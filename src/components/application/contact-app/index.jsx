import React, { Fragment, useState, useEffect,useRef } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import {firebase_app} from '../../../data/config';
import { Container, Row, Col, Card, CardHeader, CardBody, Nav, NavItem, NavLink, TabContent, TabPane, Modal, ModalHeader, ModalBody, Label, Input, FormGroup, Form, Button } from 'reactstrap'
import defaultuser from '../../../assets/images/user/user.png';
import search from '../../../assets/images/search-not-found.png';
import { createUser, deletedUser, editUser } from '../../../services/contact.service'
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert2'
import ReactToPrint from "react-to-print";
import PrintPreview from './printpreview'
import {MarkJecno,MARKJENCOEMAIL,MARKJENCO,NewContacts,AddContacts,Views,Name,Age,Mobile,MobileNo,EmailAddress,Gender,Male,Female,FollowUp,Orgenization,Favourites,History,ContactHistory,AddCategory,Ideas,SarahLoren,AndewJon,JasonBorne,Business,Holidays, Important,Personal,Edit,Delete,Print,General,Save,Cancel,NoDataFound,PrintViews} from '../../../constant'
import { Users } from 'react-feather';

const Newcontact = (props) => {

  const [addurl,setAddurl] = useState(defaultuser)
  const [editurl,setEditurl] = useState()
  const [activeTab, setActiveTab] = useState('1');
  const [dynamictab, setDynamicTab] = useState('0')
  const [orgactiveTab, setorgActiveTab] = useState('1');
  const { register, handleSubmit, errors } = useForm(); // initialise the hook
  const [users, setUsers] = useState([])
  const [editdata, setEditData] = useState({});
  const [editing, setEditing] = useState(false)
  const [selectedUser,setSelectedUser] = useState({})
  const db = firebase_app.firestore();
  const [printmodal, setprintModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [categoryModal,setCategoryModal] = useState(false)
  const toggle = () => setModal(!modal);
  const categoryToggle = () => setCategoryModal(!categoryModal);
  const printModalToggle = () => setprintModal(!printmodal);
  const componentRef = useRef();

  useEffect(() => {
    const unsubscribe = db.collection('contactApp').onSnapshot((snapshot) => {
      const getUser = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setUsers(getUser)
      setSelectedUser(getUser[0])
    })
    return () => unsubscribe();
  }, [db]);

  const AddContact = data => {
    if (data !== '') {
      createUser(data, addurl);
      setModal(false)

    } else {
      errors.showMessages();
    }
  };


  const UpdateContact = data => {
    if (data !== '') {
      editUser(data, editurl, editdata.id);
      setEditing(false)
    } else {
      errors.showMessages();
    }
  };

  const EditUSers = (usersData) => {
    setEditing(true)
    setEditData(usersData)
    setEditurl(usersData.avatar)
  }

  const HandleAddUrl = (event) => {
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
      setAddurl(reader.result)
    }
  }

  const HandleEditUrl = (event) => {
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
      setEditurl(reader.result)
    }
  }

  const deleteUser = (userId) => {

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
        deletedUser(userId);
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

  const history = () => {
    document.querySelector(".history").classList.add("show")
  }

  const closehistory = () => {
    document.querySelector(".history").classList.remove("show")
  }

  const ContactDetails = (user) => {
    setSelectedUser({ id: user.id, name: user.name, surname: user.surname, avatar: user.avatar, age: user.age,mobile:user.mobile })
  }

  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Contact" />
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
                          <h6 className="f-w-600">{MARKJENCO}</h6>
                          <p>{MARKJENCOEMAIL}</p>
                        </div>
                      </div>
                      <Nav className="main-menu contact-options" role="tablist">
                        <NavItem>
                          <button  className="badge-light-primary btn-block btn-mail" onClick={toggle}>
                            <Users className="mr-2" />
                                {NewContacts}
                          </button>
                          <Modal isOpen={modal} toggle={toggle} size="lg">
                            <ModalHeader toggle={toggle}>{AddContacts}</ModalHeader>
                            <ModalBody>
                              <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddContact)}>
                                <div className="form-row">
                                  <div className="contact-profile">
                                    <img className="rounded-circle img-100" src={addurl} alt="" />
                                    <div className="icon-wrapper">
                                      <i className="icofont icofont-pencil-alt-5">
                                        <input className="upload" type="file" onChange={(e) => HandleAddUrl(e)} />
                                      </i>
                                    </div>
                                  </div>
                                  <FormGroup className="col-md-12">
                                    <Label>{Name}</Label>
                                    <Row>
                                      <Col sm="6">
                                        <Input className="form-control" name="name" type="text" innerRef={register({ required: true })} />
                                        <span style={{ color: "red" }}>{errors.name && 'First name is required'}</span>
                                      </Col>
                                      <Col sm="6">
                                        <Input className="form-control" name="surname" type="text" innerRef={register({ required: true })} />
                                        <span style={{ color: "red" }}>{errors.surname && 'Last name is required'}</span>
                                      </Col>
                                    </Row>
                                  </FormGroup>
                                  <FormGroup className="col-md-12">
                                    <Label>{Age}</Label>
                                    <Input className="form-control" name="age" type="text" innerRef={register({ required: true, pattern: /\d+/, min: 18, max: 70 })} />
                                    <span style={{ color: "red" }}>{errors.age && 'Please enter age between 18 to 70 year.'}</span>
                                  </FormGroup>
                                  <FormGroup className="col-md-12 ">
                                    <Label>{Mobile}</Label>
                                    <Input className="form-control" name="mobile" type="number" innerRef={register({ pattern: /\d+/, minlength: 0, maxlength: 9 })} />
                                    <span style={{ color: "red" }}>{errors.mobile && 'Please enter number max 9 digit'}</span>
                                  </FormGroup>
                                </div>
                                <Button color="secondary" className="mr-1">{Save}</Button>
                                <Button color="primary" onClick={toggle}>{Cancel}</Button>
                              </Form>
                            </ModalBody>
                          </Modal>
                        </NavItem>
                        <NavItem><span className="main-title"> {Views}</span></NavItem>
                        <NavItem><a href="#javascript"  className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}><span className="title"> {Personal}</span></a></NavItem>
                        <li>
                            <button className="btn btn-category" onClick={categoryToggle}><span className="title"> + {AddCategory}</span></button>
                            <Modal isOpen={categoryModal} toggle={categoryToggle}>
                            <ModalHeader toggle={categoryToggle}>{AddCategory}</ModalHeader>
                              <ModalBody>
                                    <Form className="form-bookmark">
                                      <div className="form-row">
                                        <FormGroup className="mb-3 col-md-12 my-0">
                                          <Input className="form-control" type="text" required="" placeholder="Enter category name" autoComplete="off"/>
                                        </FormGroup>
                                      </div>
                                      <Button color="secondary" onClick={categoryToggle} >{Save}</Button>
                                      <Button color="primary" className="ml-1" onClick={categoryToggle}>{Cancel}</Button>
                                    </Form>
                              </ModalBody>
                            </Modal>
                        </li>
                        <NavItem><a href="#javascript"  className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}><span className="title"> {Orgenization}</span></a></NavItem>
                        <NavItem><a href="#javascript"  className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}><span className="title">{FollowUp}</span></a></NavItem>
                        <NavItem><a href="#javascript"  className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}><span className="title">{Favourites}</span></a></NavItem>
                        <NavItem><a href="#javascript"  className={activeTab === '5' ? 'active' : ''} onClick={() => setActiveTab('5')}><span className="title">{Ideas}</span></a></NavItem>
                        <NavItem><a href="#javascript"  className={activeTab === '6' ? 'active' : ''} onClick={() => setActiveTab('6')}><span className="title">{Important}</span></a></NavItem>
                        <NavItem><a href="#javascript"  className={activeTab === '7' ? 'active' : ''} onClick={() => setActiveTab('7')}><span className="title">{Business}</span></a></NavItem>
                        <NavItem><a href="#javascript"  className={activeTab === '8' ? 'active' : ''} onClick={() => setActiveTab('8')}><span className="title">{Holidays}</span></a></NavItem>
                      </Nav>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>

            {/* list */}
            <Col xl="9" md="12" className="box-col-12">
              <div className="email-right-aside bookmark-tabcontent contacts-tabs">
                <div className="email-body radius-left">
                  <div className="pl-0">
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId="1">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h5>{Personal}</h5><span className="f-14 pull-right mt-0">{`${users.length} Contacts`}</span>
                          </CardHeader>
                          <CardBody className="p-0">
                            <Row className="list-persons" id="addcon">
                              <Col xl="4 xl-50" md="5">
                                <Nav className="flex-column nav-pills">
                                  {users.length > 0 ?
                                  users.map((user, index) => {
                                    return (
                                      <NavLink  className={dynamictab === index ? "active" : ""} onClick={() => setDynamicTab(index)} key={index} >
                                        <div className="media" onClick={() => ContactDetails(user)}>
                                          <img className="img-50 img-fluid m-r-20 rounded-circle update_img_0" src={user.avatar} alt="" />
                                          <div className="media-body">
                                            <h6>
                                              <span className="first_name_0">{user.name}</span>
                                              <span className="last_name_0">{user.surname}</span>
                                            </h6>
                                            <p className="email_add_0">{user.name}{"@gmail.com"}</p>
                                          </div>
                                        </div>
                                      </NavLink>
                                    )
                                  })
                                  :
                                  <Col sm="12">
                                          <div>
                                              <div className="search-not-found text-center">
                                                  <div>
                                                      <img src={search} alt="" className="second-search" />
                                                      <p className="mb-0">{"Sorry, Not Found Any Contact"}</p>
                                                  </div>
                                              </div>
                                          </div>
                                  </Col>
                                  }
                                </Nav>
                              </Col>
                              <Col xl="8 xl-50" md="7">
                                {editing ?

                                  <div className="contact-editform pl-0 m-auto">
                                    <Form onSubmit={handleSubmit(UpdateContact)}>
                                      <div className="form-row">
                                        <div className="contact-profile">
                                          <img className="rounded-circle img-100" src={editurl} alt="" />
                                          <div className="icon-wrapper">
                                            <i className="icofont icofont-pencil-alt-5">
                                              <input className="upload" type="file" onChange={(e) => HandleEditUrl(e)} />
                                            </i>
                                          </div>
                                        </div>
                                        <FormGroup className="col-md-12">
                                          <label>{Name}</label>
                                          <Row>
                                            <Col sm="6">
                                              <Input className="form-control" type="text" name="name" defaultValue={editdata.name} innerRef={register({ required: true })} />
                                              <span style={{ color: "red" }}>{errors.name && 'First name is required'}</span>
                                            </Col>
                                            <Col sm="6">
                                              <Input className="form-control" type="text" name="surname" defaultValue={editdata.surname} innerRef={register({ required: true })} />
                                              <span style={{ color: "red" }}>{errors.surname && 'Last name is required'}</span>
                                            </Col>
                                          </Row>
                                        </FormGroup>
                                        <FormGroup className="col-md-12">
                                          <Label>{Age}</Label>
                                          <Input className="form-control" type="text" name="age" defaultValue={editdata.age} innerRef={register({ required: true, pattern: /\d+/, min: 18, max: 70 })} />
                                          <span style={{ color: "red" }}>{errors.age && 'Please enter age between 18 to 70 year.'}</span>
                                        </FormGroup>
                                        <FormGroup className="col-md-12">
                                          <Label>{Mobile}</Label>
                                          <Input className="form-control" type="text" name="mobile" defaultValue={editdata.mobile} innerRef={register({ pattern: /\d+/, minlength: 0, maxlength: 9 })} />
                                          <span style={{ color: "red" }}>{errors.mobile && 'Please enter number max 9 digit'}</span>
                                        </FormGroup>
                                      </div>
                                      <Button color="secondary" className="update-contact mr-1">{Save}</Button>
                                      <Button color="primary" onClick={() => setEditing(false)}>{Cancel}</Button>
                                    </Form>
                                  </div>
                                  :
                                  <TabContent activeTab={dynamictab}>
                                    <TabPane tabId={dynamictab}>
                                      {selectedUser ?
                                      <div className="profile-mail">
                                        <div className="media">
                                          <img className="img-100 img-fluid m-r-20 rounded-circle update_img_0" src={selectedUser.avatar} alt="" />
                                          <div className="media-body mt-0">
                                            <h5><span className="first_name_0">{selectedUser.name}</span><span className="last_name_0">{selectedUser.surname}</span></h5>
                                            <p className="email_add_0">{selectedUser.name}{"@gmail.com"}</p>
                                            <ul>
                                              <li><a href="#javaScript" onClick={() => EditUSers(selectedUser)}>{Edit}</a></li>
                                              <li><a href="#javaScript" onClick={() => deleteUser(selectedUser.id)}>{Delete}</a></li>
                                              <li><a href="#javaScript" onClick={() => history()}>{History}</a></li>
                                              <li><a href="#javaScript" onClick={() => printModalToggle()} data-toggle="modal" data-target="#printModal">{Print}</a></li>
                                            </ul>
                                          </div>
                                        </div>
                                        <div className="email-general">
                                          <h6 className="mb-3">{General}</h6>
                                          <ul>
                                            <li>{Name} <span className="font-primary first_name_0">{selectedUser.name}</span></li>
                                            <li>{Age} <span className="font-primary">{selectedUser.age}</span></li>
                                            <li>{MobileNo} <span className="font-primary mobile_num_0">{selectedUser.mobile}</span></li>
                                            <li>{EmailAddress} <span className="font-primary email_add_0">{`${selectedUser.name}@gmail.com`} </span></li>
                                          </ul>
                                        </div>
                                      </div>
                                      :
                                      <Col sm="12">
                                          <div>
                                              <div className="search-not-found text-center">
                                                  <div>
                                                      <img src={search} alt="" className="second-search" />
                                                      <p className="mb-0">{"Sorry, Not Found Any Contact"}</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </Col>
                                      }
                                    </TabPane>
                                  </TabContent>
                                }
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="2">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h5>{Orgenization}</h5><span className="f-14 pull-right mt-0">{"10 Contacts"}</span>
                          </CardHeader>
                          <CardBody className="p-0">
                            <Row className="list-persons">
                              <Col xl="4 xl-50" md="5">
                                <Nav className="flex-column nav-pills" id="v-pills-tab1" role="tablist" aria-orientation="vertical">
                                  <NavItem id="myTab" role="tablist">
                                    <NavLink  href="#javaScript" className={orgactiveTab === '1' ? 'active' : ''} onClick={() => setorgActiveTab('1')}>
                                      <div className="media">
                                        <img className="img-50 img-fluid m-r-20 rounded-circle" src={require("../../../assets/images/user/user.png")} alt="" />
                                        <div className="media-body">
                                          <h6>{MarkJecno}</h6>
                                          <p>{MARKJENCOEMAIL}</p>
                                        </div>
                                      </div>
                                    </NavLink>
                                  </NavItem>
                                  <NavItem id="myTab" role="tablist">
                                    <NavLink  href="#javaScript" className={orgactiveTab === '2' ? 'active' : ''} onClick={() => setorgActiveTab('2')}>
                                      <div className="media"><img className="img-50 img-fluid m-r-20 rounded-circle" src={require("../../../assets/images/user/3.jpg")} alt="" />
                                        <div className="media-body">
                                          <h6>{JasonBorne}</h6>
                                          <p>{"jasonb@gmail.com"}</p>
                                        </div>
                                      </div>
                                    </NavLink>
                                  </NavItem>
                                  <NavItem id="myTab" role="tablist">
                                    <a  href="#javaScript" className={orgactiveTab === '3' ? 'active' : ''} onClick={() => setorgActiveTab('3')}>
                                      <div className="media"><img className="img-50 img-fluid m-r-20 rounded-circle" src={require("../../../assets/images/user/4.jpg")} alt="" />
                                        <div className="media-body">
                                          <h6>{SarahLoren}</h6>
                                          <p>{"barnes@gmail.com"}</p>
                                        </div>
                                      </div>
                                    </a>
                                  </NavItem>
                                  <NavItem id="myTab" role="tablist">
                                    <a  href="#javaScript" className={orgactiveTab === '4' ? 'active' : ''} onClick={() => setorgActiveTab('4')}>
                                      <div className="media"><img className="img-50 img-fluid m-r-20 rounded-circle" src={require("../../../assets/images/user/10.jpg")} alt="" />
                                        <div className="media-body">
                                          <h6>{AndewJon}</h6>
                                          <p>{"andrewj@gmail.com"}</p>
                                        </div>
                                      </div>
                                    </a>
                                  </NavItem>
                                </Nav>
                              </Col>
                              <Col xl="8 xl-50" md="7">
                                <TabContent activeTab={orgactiveTab}>
                                  <TabPane tabId="1">
                                    <div className="profile-mail">
                                      <div className="media"><img className="img-100 img-fluid m-r-20 rounded-circle update_img_5" src={require("../../../assets/images/user/user.png")} alt="" />
                                        <div className="media-body mt-0">
                                          <h5><span className="first_name_5">{"Mark"} </span><span className="last_name_5">{"jecno"}</span></h5>
                                          <p className="email_add_5">{MARKJENCOEMAIL}</p>
                                          <ul>
                                            <li><a href="#javaScript" data-toggle="modal" data-target="#printModal">{Print}</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="email-general">
                                        <h6>{General}</h6>
                                        <p>{EmailAddress}: <span className="font-primary email_add_5">{MARKJENCOEMAIL}</span></p>
                                        <div className="gender">
                                          <h6>{Personal}</h6>
                                          <p>{Gender}: <span>{Male}</span></p>
                                        </div>
                                      </div>
                                    </div>
                                  </TabPane>
                                  <TabPane tabId="2">
                                    <div className="profile-mail">
                                      <div className="media"><img className="img-100 img-fluid m-r-20 rounded-circle update_img_6" src={require("../../../assets/images/user/3.jpg")} alt="" />
                                        <div className="media-body mt-0">
                                          <h5><span className="first_name_6">{"Jason"} </span><span className="last_name_6">{"Borne"}</span></h5>
                                          <p className="email_add_6">{"jasonb@gmail.com"}</p>
                                          <ul>
                                            <li><a href="#javaScript" data-toggle="modal" data-target="#printModal">{Print}</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="email-general">
                                        <h6>{General}</h6>
                                        <p>{EmailAddress}: <span className="font-primary email_add_6">{"jasonb@gmail.com"}</span></p>
                                        <div className="gender">
                                          <h6>{Personal}</h6>
                                          <p>{Gender}: <span>{Male}</span></p>
                                        </div>
                                      </div>
                                    </div>
                                  </TabPane>
                                  <TabPane tabId="3">
                                    <div className="profile-mail">
                                      <div className="media"><img className="img-100 img-fluid m-r-20 rounded-circle update_img_7" src={require("../../../assets/images/user/4.jpg")} alt="" />
                                        <div className="media-body mt-0">
                                          <h5> <span className="first_name_7">{"Sarah"} </span><span className="last_name_7">{"Loren"}</span></h5>
                                          <p className="email_add_7">{"barnes@gmail.com"}</p>
                                          <ul>
                                            <li><a href="#javaScript" data-toggle="modal" data-target="#printModal">{Print}</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="email-general">
                                        <h6>{General}</h6>
                                        <p>{EmailAddress}: <span className="font-primary email_add_7">{"barnes@gmail.com"}</span></p>
                                        <div className="gender">
                                          <h6>{Personal}</h6>
                                          <p>{Gender}: <span>{Female}</span></p>
                                        </div>
                                      </div>
                                    </div>
                                  </TabPane>
                                  <TabPane tabId="4">
                                    <div className="profile-mail">
                                      <div className="media"><img className="img-100 img-fluid m-r-20 rounded-circle update_img_8" src={require("../../../assets/images/user/10.jpg")} alt="" />
                                        <div className="media-body mt-0">
                                          <h5> <span className="first_name_8">{"Andew"} </span><span className="last_name_8">{"Jon"}</span></h5>
                                          <p className="email_add_8">{"andrewj@gmail.com"}</p>
                                          <ul>
                                            <li><a href="#javaScript" data-toggle="modal" data-target="#printModal">{Print}</a></li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div className="email-general">
                                        <h6>{General}</h6>
                                        <p>{EmailAddress}: <span className="font-primary email_add_8">{"andrewj@gmail.com"}</span></p>
                                        <div className="gender">
                                          <h6>{Personal}</h6>
                                          <p>{Gender}: <span>{Female}</span></p>
                                        </div>
                                      </div>
                                    </div>
                                  </TabPane>
                                </TabContent>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </TabPane>
                      
                      <TabPane tabId="3">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h5>{FollowUp}</h5><span className="f-14 pull-right mt-0">{"10 Contacts"}</span>
                          </CardHeader>
                          <CardBody>
                            <p>{NoDataFound} </p>
                          </CardBody>
                          </Card>
                      </TabPane>

                      <TabPane tabId="4">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h5>{Favourites}</h5><span className="f-14 pull-right mt-0">{"10 Contacts"}</span>
                          </CardHeader>
                          <CardBody>
                            <p>{NoDataFound} </p>
                          </CardBody>
                          </Card>
                      </TabPane>

                      <TabPane tabId="5">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h5>{Ideas}</h5><span className="f-14 pull-right mt-0">{"10 Contacts"}</span>
                          </CardHeader>
                          <CardBody>
                            <p>{NoDataFound} </p>
                          </CardBody>
                          </Card>
                      </TabPane>

                      <TabPane tabId="6">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h5>{Important}</h5><span className="f-14 pull-right mt-0">{"10 Contacts"}</span>
                          </CardHeader>
                          <CardBody>
                            <p>{NoDataFound} </p>
                          </CardBody>
                          </Card>
                      </TabPane>

                      <TabPane tabId="7">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h5>{Business}</h5><span className="f-14 pull-right mt-0">{"10 Contacts"}</span>
                          </CardHeader>
                          <CardBody>
                            <p>{NoDataFound} </p>
                          </CardBody>
                          </Card>
                      </TabPane>

                      <TabPane tabId="8">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h5>{Holidays}</h5><span className="f-14 pull-right mt-0">{"10 Contacts"}</span>
                          </CardHeader>
                          <CardBody>
                            <p>{NoDataFound} </p>
                          </CardBody>
                          </Card>
                      </TabPane>
                      
                      <div id="right-history" className="history">
                        <div className="modal-header p-l-20 p-r-20">
                          <h6 className="modal-title w-100">{ContactHistory}
                                <span className="pull-right">
                              <a className="closehistory" href="#javaScript" onClick={closehistory}>
                                <i className="icofont icofont-close"></i>
                              </a>
                            </span>
                          </h6>
                        </div>
                        <div className="history-details">
                          <div className="text-center"><i className="icofont icofont-ui-edit"></i>
                            <p>{"Contact has not been modified yet."}</p>
                          </div>
                          <div className="media"><i className="icofont icofont-star mr-3"></i>
                            <div className="media-body mt-0">
                              <h6 className="mt-0">{"Contact Created"}</h6>
                              <p className="mb-0">{"Contact is created via mail"}</p><span className="f-12">{"Sep 10, 2019 4:00"}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {selectedUser ?
                      <Modal isOpen={printmodal} toggle={printModalToggle} >
                        <ModalHeader toggle={printModalToggle}>{PrintViews}</ModalHeader>
                        <ModalBody className="list-persons">
                          <PrintPreview selectedUser={selectedUser} ref={componentRef}/>
                          <ReactToPrint
                              trigger={() => (
                                <Button color="secondary" className="mr-1">
                                  {Print}
                                </Button>
                              )}
                              content={() => componentRef.current}
                            />
                          
                          <Button color="primary" onClick={printModalToggle}>{Cancel}</Button>
                          
                        </ModalBody>
                      </Modal>
                      :""}
                    </TabContent>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
}
export default Newcontact;