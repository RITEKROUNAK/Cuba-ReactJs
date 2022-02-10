import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Grid, List, Link, Share2, Trash2, Tag, Edit2, Bookmark, PlusCircle } from 'react-feather';
import { useForm } from 'react-hook-form'
import defaultImg from '../../../assets/images/lightgallry/01.jpg'
import { useSelector, useDispatch } from 'react-redux'
import SweetAlert from 'sweetalert2'
import { mybookmark, newbookmark, removebookmark, removemybookmark, updatebookmark, updateMybookmark } from '../../../redux/bookmark/action'
import { useEffect } from 'react';
import { WATCH_BOOKMARK_LIST } from '../../../redux/actionTypes';
import {MarkJecno,MARKJENCOEMAIL,NewBookmark,AddBookmark,EditBookmark,WebUrl,Title,Description,Group,General,Save,Cancel,Views,CreatedByMe,Favourites,SharedWithMe,MyBookmark,Tags,Newsletter,Notification,Business,Orgenization,Holidays,Collection,Important,MyBookmarks ,NoBookmarksFound} from "../../../constant";

const Bookmarkapp = (props) => {
  const dispatch = useDispatch();
  const bookmarklist = useSelector(content => content.Bookmarkapp.bookmark);
  const mybookmarklist = useSelector(content => content.Bookmarkapp.mybookmarkdata);
  const [editrow, setEditrow] = useState({})
  const [activeTab, setActiveTab] = useState('1');
  const [addModal, setaddModal] = useState(false)
  const [editModal, seteditModal] = useState(false)
  const [tagModal, setTagModal] = useState(false)
  const [addimgurl, setAddImgUrl] = useState(defaultImg);
  const [editimgurl, setEditImgUrl] = useState();
  const [gridView,setgridView] = useState(true);
  const { register, handleSubmit, errors } = useForm();
  const addToggle = () => { setaddModal(!addModal) }
  const editToggle = () => { seteditModal(!editModal) }
  const tagToggle = () => { setTagModal(!tagModal) }

  useEffect(() => {
    dispatch({type: WATCH_BOOKMARK_LIST})
  },[dispatch])

  const ADDUrl = (event) => {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      setAddImgUrl(reader.result)
    }
  }

  const onSubmit = data => {
    if (data !== '') {
      Addnewbookmark(data, "lightgallry/01.jpg");
      setaddModal(false)
    } else {
      errors.showMessages();
    }
  };

  const Updatebookmark = data => {
    if (data !== '') {
      Updatenewbookmark(editrow.id, data, "lightgallry/01.jpg");
      UpdateMybookmarkdata(editrow.id, data, "lightgallry/01.jpg");
      seteditModal(false)
    } else {
      errors.showMessages();
    }
  };

  const editbookmarkdata = (data) => {
    editToggle()
    setEditrow(data);
    setEditImgUrl(require(`../../../assets/images/${data.image}`))
  }

  const Updatenewbookmark = (id, data, image_url) => {
    dispatch(updatebookmark(id, data, image_url))
  }

  const UpdateMybookmarkdata = (id, data, image_url) => {
    dispatch(updateMybookmark(id, data, image_url))
  }

  const Addnewbookmark = (data, image_url) => {
    dispatch(newbookmark(data, image_url))
  }

  const addToFavourites = (data) => {
    if(data.fillstar === false) {
      data.fillstar = true;
      dispatch(mybookmark(data))
    }else{
      dispatch(removemybookmark(data.id));
      data.fillstar = false;
    }
  }

  const Remove_from_favourite = (data) => {
    
    if(data.fillstar === true) {
      data.fillstar = false
      dispatch(removemybookmark(data.id));
      dispatch(updatebookmark(data.id, data, data.image))
    }
  }

  const Removefrombookmark = (bookmarkId) => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        dispatch(removebookmark(bookmarkId));
        SweetAlert.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
      else {
        SweetAlert.fire(
          'Your imaginary file is safe!'
        )
      }
    })
  }

  const Remove_from_my_bookmark = (mybookmarkId) => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        dispatch(removemybookmark(mybookmarkId));
        SweetAlert.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
      else {
        SweetAlert.fire(
          'Your imaginary file is safe!'
        )
      }
    })
  }

  const Gridbookmark = () => {
      setgridView(true)
  }

  const Listbookmark = () => {
      setgridView(false)
  }

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Bookmarks" />
      <Container fluid={true}>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <Col xl="3" className="box-col-6">
              <div className="email-left-aside">
                <Card>
                  <CardBody>
                    <div className="email-app-sidebar left-bookmark">
                      <div className="media">
                        <div className="media-size-email"><img className="mr-3 rounded-circle" src={require("../../../assets/images/user/user.png")} alt="" /></div>
                        <div className="media-body">
                          <h6 className="f-w-600">{MarkJecno}</h6>
                          <p>{MARKJENCOEMAIL}</p>
                        </div>
                      </div>
                      <Nav className="main-menu" role="tablist">
                        <NavItem>
                          <button  className="badge-light-primary btn-block btn-mail" onClick={addToggle}><Bookmark /> {NewBookmark}</button>
                          <Modal isOpen={addModal} toggle={addToggle} size="lg">
                            <ModalHeader toggle={addToggle}>{AddBookmark}</ModalHeader>
                            <ModalBody>
                              <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-row">
                                  <div className="contact-profile">
                                    <img className="rounded-circle img-100" src={addimgurl} alt="" />
                                    <div className="icon-wrapper">
                                      <i className="icofont icofont-pencil-alt-5">
                                        <input className="upload" name="imageurl" type="file" onChange={(e) => ADDUrl(e)} />
                                      </i>
                                    </div>
                                  </div>
                                  <FormGroup className="col-md-12">
                                    <Label>{WebUrl}</Label>
                                    <Input className="form-control" name="url" type="text" autoComplete="off" innerRef={register({ required: true })} />
                                    <span style={{ color: "red" }}>{errors.url && 'Url is required'}</span>
                                  </FormGroup>
                                  <FormGroup className="col-md-12">
                                    <Label>{Title}</Label>
                                    <Input className="form-control" name="title" type="text" autoComplete="off" innerRef={register({ required: true })} />
                                    <span style={{ color: "red" }}>{errors.title && 'Title is required'}</span>
                                  </FormGroup>
                                  <FormGroup className="col-md-12">
                                    <Label>{Description}</Label>
                                    <Input className="form-control" name="desc" type="textarea" autoComplete="off" innerRef={register({ required: true })}></Input>
                                    <span style={{ color: "red" }}>{errors.desc && 'Description is required'}</span>
                                  </FormGroup>
                                  <FormGroup className="col-md-6 mb-0">
                                    <Label>{Group}</Label>
                                    <Input className="js-example-basic-single" type="select" name="group" innerRef={register({ required: true })}>
                                      <option value="bookmark">{MyBookmarks}</option>
                                    </Input>
                                    <span style={{ color: "red" }}>{errors.group && 'select one group'}</span>
                                  </FormGroup>
                                  <FormGroup className="col-md-6 mb-0">
                                    <Label>{Collection}</Label>
                                    <Input className="js-example-disabled-results" type="select" name="collection" innerRef={register({ required: true })}>
                                      <option value="general">{General}</option>
                                      <option value="fs">{"fs"}</option>
                                    </Input>
                                    <span style={{ color: "red" }}>{errors.desc && 'select one collection'}</span>
                                  </FormGroup>
                                </div>
                                <Button color="secondary" className="mr-1">{Save}</Button>
                                <Button color="primary" onClick={addToggle}>{Cancel}</Button>
                              </Form>
                            </ModalBody>
                          </Modal>
                        </NavItem>
                        <NavItem>
                          <span className="main-title">{Views}</span>
                        </NavItem>
                        <NavItem>
                          <a  href="#javaScript" className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                            <span className="title"> {CreatedByMe}</span>
                          </a>
                        </NavItem>
                        <NavItem>
                          <a  href="#javaScript" className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                            <span className="title"> {Favourites} ({mybookmarklist.length})</span>
                          </a>
                        </NavItem>
                        <NavItem>
                          <a  href="#javaScript" className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                            <span className="title"> {SharedWithMe}</span>
                          </a>
                        </NavItem>
                        <NavItem>
                          <a  href="#javaScript" className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                            <span className="title"> {MyBookmark}</span>
                          </a>
                        </NavItem>
                        <li>
                          <hr />
                        </li>
                        <NavItem><span className="main-title"> {Tags}<span className="pull-right" onClick={tagToggle}><PlusCircle/></span></span></NavItem>
                        <Modal className="fade show modal-bookmark" isOpen={tagModal} toggle={tagToggle} size="lg">
                          <ModalHeader className="modal-title" toggle={tagToggle}>
                            {"Create Tag"}
                          </ModalHeader>
                          <ModalBody>
                            <Form className="form-bookmark needs-validation">
                              <div className="form-row">
                                <FormGroup className="col-md-12">
                                  <Label>{"Tag Name"}</Label>
                                  <Input type="text"/>
                                </FormGroup>
                                <FormGroup className="col-md-12 mb-0">
                                  <Label>{"Tag color"}</Label>
                                  <Input type="color" defaultValue="#563d7c"/>
                                </FormGroup>
                              </div>
                              <Button color="secondary" onClick={tagToggle}>{Save}</Button>
                              <Button color="primary m-l-5" onClick={tagToggle}>{Cancel}</Button>
                            </Form>
                          </ModalBody>
                        </Modal>
                        <NavItem><a href="#javaScript" className={activeTab === '5' ? 'show' : ''} onClick={() => setActiveTab('5')} ><span className="title"> {Notification}</span></a></NavItem>
                        <NavItem><a href="#javaScript" className={activeTab === '6' ? 'show' : ''} onClick={() => setActiveTab('6')} ><span className="title"> {Newsletter}</span></a></NavItem>
                        <NavItem><a href="#javaScript" className={activeTab === '7' ? 'show' : ''} onClick={() => setActiveTab('7')} ><span className="title"> {Business}</span></a></NavItem>
                        <NavItem><a href="#javaScript" className={activeTab === '8' ? 'show' : ''} onClick={() => setActiveTab('8')} ><span className="title">{Holidays}</span></a></NavItem>
                        <NavItem><a href="#javaScript" className={activeTab === '9' ? 'show' : ''} onClick={() => setActiveTab('9')} ><span className="title"> {Important}</span></a></NavItem>
                        <NavItem><a href="#javaScript" className={activeTab === '10' ? 'show' : ''} onClick={() => setActiveTab('10')} ><span className="title"> {Orgenization}</span></a></NavItem>
                      </Nav>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col xl="9" md="12" className="box-col-12">
              <div className="email-right-aside bookmark-tabcontent">
                <Card className="email-body radius-left">
                  <div className="pl-0">
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="1">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{CreatedByMe}</h6>
                            <ul>
                              <li><a className="grid-bookmark-view" href="#javascript"><Grid onClick={Gridbookmark} /></a></li>
                              <li><a className="list-layout-view" href="#javascript"><List onClick={Listbookmark} /></a></li>
                            </ul>
                          </CardHeader>
                          <CardBody className="pb-0">
                            <div className={`details-bookmark text-center ${gridView ? '' : 'list-bookmark'}`}>
                              <Row id="bookmarkData">
                                {bookmarklist.length > 0 ?
                                  bookmarklist.map((data, index) => {
                                    return (
                                      <Col xl="3 xl-50" md="4" key={index}>
                                        <Card className="card-with-border bookmark-card o-hidden">
                                          <div className="details-website">
                                            <img className="img-fluid" src={require(`../../../assets/images/${data.image}`)} alt="" />
                                            <div className={`favourite-icon favourite_0 ${data.fillstar ? 'favourite' : ''}`} onClick={(e) => addToFavourites(data)}><a href="#javascript"><i className="fa fa-star" ></i></a></div>
                                            <div className="desciption-data">
                                              <div className="title-bookmark">
                                                <h6 className="title_0">{data.title}</h6>
                                                <p className="weburl_0">{data.website_url}</p>
                                                <div className="hover-block">
                                                  <ul>
                                                    <li><a href="#javascript" onClick={() => editbookmarkdata(data)}><Edit2 /></a></li>
                                                    <li><a href="#javascript"><Link /></a></li>
                                                    <li><a href="#javascript"><Share2 /></a></li>
                                                    <li><a href="#javascript" onClick={() => Removefrombookmark(data.id)}><Trash2 /></a></li>
                                                    <li className="pull-right text-right"><a href="#javascript"><Tag /></a></li>
                                                  </ul>
                                                </div>
                                                <div className="content-general">
                                                  <p className="desc_0">{data.desc}</p><span className="collection_0">{data.colection}</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </Card>
                                      </Col>
                                    )
                                  })
                                  : <Col xl="12"><div className="no-favourite"><span>{NoBookmarksFound}</span></div> </Col>
                                  
                                }
                              </Row>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="2">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{Favourites}</h6>
                            <ul>
                            <li><a className="grid-bookmark-view" href="#javascript"><Grid onClick={Gridbookmark} /></a></li>
                            <li><a className="list-layout-view" href="#javascript"><List onClick={Listbookmark} /></a></li> 
                            </ul>
                          </CardHeader>
                          <CardBody>
                            <div className={`details-bookmark text-center ${gridView ? '' : 'list-bookmark'}`}>
                              <Row>
                                {mybookmarklist.length > 0 ?
                                mybookmarklist.map((mybookdata, index) => {
                                  return (
                                      <Col xl="3 xl-50" md="4" key={index}>
                                        <Card className="card-with-border bookmark-card o-hidden">
                                          <div className="details-website">
                                            <img className="img-fluid" src={require(`../../../assets/images/${mybookdata.image}`)} alt="" />
                                            <div className={`favourite-icon favourite_0 ${mybookdata.fillstar ? 'favourite' : ''}`}><a href="#javascript"><i className="fa fa-star" onClick={() => Remove_from_favourite(mybookdata)}></i></a></div>
                                            <div className="desciption-data">
                                              <div className="title-bookmark">
                                                <h6 className="title_0">{mybookdata.title}</h6>
                                                <p className="weburl_0">{mybookdata.website_url}</p>
                                                <div className="hover-block">
                                                  <ul>
                                                    <li><a href="#javascript" onClick={() => editbookmarkdata(mybookdata)}><Edit2 /></a></li>
                                                    <li><a href="#javascript"><Link /></a></li>
                                                    <li><a href="#javascript"><Share2 /></a></li>
                                                    <li><a href="#javascript" onClick={() => Remove_from_my_bookmark(mybookdata.id)}><Trash2 /></a></li>
                                                    <li className="pull-right text-right"><a href="#javascript"><Tag /></a></li>
                                                  </ul>
                                                </div>
                                                <div className="content-general">
                                                  <p className="desc_0">{mybookdata.desc}</p><span className="collection_0">{mybookdata.collection}</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </Card>
                                      </Col>
                                  )
                                })
                                : <div className="no-favourite"><span>{NoBookmarksFound}</span></div>
                              }
                              </Row>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="3">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{SharedWithMe}</h6>
                            <ul>
                                <li><a className="grid-bookmark-view" href="#javascript"><Grid/></a></li>
                                <li><a className="list-layout-view" href="#javascript"><List/></a></li>
                            </ul>
                          </CardHeader>
                          <CardBody>
                            <div className="details-bookmark text-center">
                              <Row></Row>
                              <div className="no-favourite"><span>{NoBookmarksFound}</span></div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="4">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{MyBookmark}</h6>
                            <ul>
                                <li><a className="grid-bookmark-view" href="#javascript"><Grid onClick={Gridbookmark}/></a></li>
                                <li><a className="list-layout-view" href="#javascript"><List onClick={Listbookmark}/></a></li>
                              </ul>
                          </CardHeader>
                          <CardBody>
                            <div className={`details-bookmark text-center ${gridView ? '' : 'list-bookmark'}`}>
                              <Row>
                              {bookmarklist.length > 0 ?
                                  bookmarklist.map((data, index) => {
                                     return(
                                        <Col xl="3 xl-50" md="4" key={index}>
                                          <Card className="card-with-border bookmark-card o-hidden">
                                          <div className="details-website">
                                            <img className="img-fluid" src={require(`../../../assets/images/${data.image}`)} alt="" />
                                            <div className={`favourite-icon favourite_0 ${data.fillstar ? 'favourite' : ''}`} onClick={(e) => addToFavourites(data)} ><a href="#javascript"><i className="fa fa-star" ></i></a></div>
                                            <div className="desciption-data">
                                              <div className="title-bookmark">
                                                <h6 className="title_0">{data.title}</h6>
                                                <p className="weburl_0">{data.website_url}</p>
                                                <div className="hover-block">
                                                  <ul>
                                                    <li><a href="#javascript" onClick={() => editbookmarkdata(data)}><Edit2 /></a></li>
                                                    <li><a href="#javascript"><Link /></a></li>
                                                    <li><a href="#javascript"><Share2 /></a></li>
                                                    <li><a href="#javascript" onClick={() => Removefrombookmark(data.id)}><Trash2 /></a></li>
                                                    <li className="pull-right text-right"><a href="#javascript"><Tag /></a></li>
                                                  </ul>
                                                </div>
                                                <div className="content-general">
                                                  <p className="desc_0">{data.desc}</p><span className="collection_0">{data.colection}</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </Card>
                                        </Col>
                                      
                                     )
                                    })
                                    : <div className="no-favourite"><span>{NoBookmarksFound}</span></div>
                                }
                              </Row> 
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="5">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{Notification}</h6>
                            <ul>
                                <li><a className="grid-bookmark-view" href="#javascript"><Grid/></a></li>
                                <li><a className="list-layout-view" href="#javascript"><List/></a></li>
                              </ul>
                          </CardHeader>
                          <CardBody>
                            <div className="details-bookmark text-center">
                              <Row></Row>
                              <div className="no-favourite"><span>{NoBookmarksFound}</span></div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="6">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{Newsletter}</h6>
                            <ul>
                                <li><a className="grid-bookmark-view" href="#javascript"><Grid/></a></li>
                                <li><a className="list-layout-view" href="#javascript"><List/></a></li>
                              </ul>
                          </CardHeader>
                          <CardBody>
                            <div className="details-bookmark text-center">
                              <Row></Row>
                              <div className="no-favourite"><span>{NoBookmarksFound}</span></div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="7">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{Business}</h6>
                            <ul>
                                <li><a className="grid-bookmark-view" href="#javascript"><Grid/></a></li>
                                <li><a className="list-layout-view" href="#javascript"><List/></a></li>
                              </ul>
                          </CardHeader>
                          <CardBody>
                            <div className="details-bookmark text-center">
                              <Row></Row>
                              <div className="no-favourite"><span>{NoBookmarksFound}</span></div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="8">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{Holidays}</h6>
                            <ul>
                                <li><a className="grid-bookmark-view" href="#javascript"><Grid/></a></li>
                                <li><a className="list-layout-view" href="#javascript"><List/></a></li>
                              </ul>
                          </CardHeader>
                          <CardBody>
                            <div className="details-bookmark text-center">
                              <Row></Row>
                              <div className="no-favourite"><span>{NoBookmarksFound}</span></div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="9">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{Important}</h6>
                            <ul>
                                <li><a className="grid-bookmark-view" href="#javascript"><Grid/></a></li>
                                <li><a className="list-layout-view" href="#javascript"><List/></a></li>
                              </ul>
                          </CardHeader>
                          <CardBody>
                            <div className="details-bookmark text-center">
                              <Row></Row>
                              <div className="no-favourite"><span>{NoBookmarksFound}</span></div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="10">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{Orgenization}</h6>
                            <ul>
                                <li><a className="grid-bookmark-view" href="#javascript"><Grid/></a></li>
                                <li><a className="list-layout-view" href="#javascript"><List/></a></li>
                              </ul>
                          </CardHeader>
                          <CardBody>
                            <div className="details-bookmark text-center">
                              <Row></Row>
                              <div className="no-favourite"><span>{NoBookmarksFound}</span></div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <Modal isOpen={editModal} toggle={editToggle} size="lg">
                        <ModalHeader toggle={editToggle}>{EditBookmark}</ModalHeader>
                        <ModalBody>
                          <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(Updatebookmark)}>
                            <div className="form-row">
                              <div className="contact-profile">
                                <img className="rounded-circle img-100" src={editimgurl} alt="" />
                                <div className="icon-wrapper">
                                  <i className="icofont icofont-pencil-alt-5">
                                    <input className="upload" name="imageurl" type="file" />
                                  </i>
                                </div>
                              </div>
                              <FormGroup className="col-md-12">
                                <Label>{WebUrl}</Label>
                                <Input className="form-control" name="url" type="text" defaultValue={editrow.website_url} autoComplete="off" innerRef={register({ required: true })} />
                                <span style={{ color: "red" }}>{errors.url && 'Url is required'}</span>
                              </FormGroup>
                              <FormGroup className="col-md-12">
                                <Label>{Title}</Label>
                                <Input className="form-control" name="title" type="text" defaultValue={editrow.title} autoComplete="off" innerRef={register({ required: true })} />
                                <span style={{ color: "red" }}>{errors.title && 'Title is required'}</span>
                              </FormGroup>
                              <FormGroup className="col-md-12">
                                <Label>{Description}</Label>
                                <Input className="form-control" name="desc" type="textarea" defaultValue={editrow.desc} autoComplete="off" innerRef={register({ required: true })}></Input>
                                <span style={{ color: "red" }}>{errors.desc && 'Description is required'}</span>
                              </FormGroup>
                              <FormGroup className="col-md-6 mb-0">
                                <Label>{Group}</Label>
                                <Input className="js-example-basic-single" type="select" name="group" innerRef={register({ required: true })}>
                                  <option value="bookmark">{MyBookmark}s</option>
                                </Input>
                                <span style={{ color: "red" }}>{errors.group && 'select one group'}</span>
                              </FormGroup>
                              <FormGroup className="col-md-6 mb-0">
                                <Label>{Collection}</Label>
                                <Input className="js-example-disabled-results" type="select" defaultValue={editrow.collection} name="collection" innerRef={register({ required: true })}>
                                  <option value="general">{General}</option>
                                  <option value="fs">{"fs"}</option>
                                </Input>
                                <span style={{ color: "red" }}>{errors.desc && 'select one collection'}</span>
                              </FormGroup>
                            </div>
                            <Button color="secondary" className="mr-1">{Save}</Button>
                            <Button color="primary" onClick={editToggle}>{Cancel}</Button>
                          </Form>
                        </ModalBody>
                      </Modal>
                    </TabContent>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
}

export default Bookmarkapp;