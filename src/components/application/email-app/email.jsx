import React,{useState,useEffect, Fragment} from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import CKEditor from "react-ckeditor-component";
import {Container,Row,Col,Card,CardBody,Media,Label,Input,Button,Form,FormGroup} from 'reactstrap'
import {useDispatch,useSelector} from 'react-redux'
import {UPDATE_EMAIL_TYPES, GET_ALL_EMAIL_ASYN,WATCH_ALL_TYPE_EMAIL, GET_ALL_TYPE_ASYN} from '../../../redux/actionTypes'
import {Dropdown,DropdownItem,DropdownToggle,DropdownMenu} from 'reactstrap'
import user from '../../../assets/images/user/1.jpg';
import email1 from '../../../assets/images/email/1.jpg';
import email2 from '../../../assets/images/email/2.jpg';
import email3 from '../../../assets/images/email/3.jpg';
import {groupBy} from '../../../redux/email/action'
import {MARKJENCO,MARKJENCOEMAIL,NEWMAIL,Inbox,AllMail,Sent,Draft,Trash,IMPORTANT,Starred,UNREAD,Spam,OUTBOX,UPDATE,ALERT,NOTES,NoMailFound,NewMessage,To,ATTACHMENTS,DownloadAll,Reply,ReplyAll,Forward,Send,Messages,More,Subject} from '../../../constant'

var images = require.context('../../../assets/images', true);

const Email = (props) => {

  const dispatch = useDispatch();
  const usersList = useSelector(content => content.EmailApp.allEmails);
  const TypesOfData = useSelector(mailTypes => mailTypes.EmailApp.types);
  const [compose, setCompose] = useState(true);
  const [dropdownOpen, setOpen] = useState(false);
  const [type, setType] = useState('Inbox');
  const [emailIds, setEmailIds] = useState([]);
  // eslint-disable-next-line
  const [mailData, setMailData] = useState([]);
  const [checked, setchecked] = useState(false);
  const [selectedFav, setSelectedFav] = useState(false);
  const [singleMailRecord, setSingleMailRecord] = useState({});

  const toggle = () => setOpen(!dropdownOpen);

  useEffect(() => {
      if(usersList !== null){
      const result = groupBy(usersList, (item) => {
        return [item.type];
      });
      dispatch({type : WATCH_ALL_TYPE_EMAIL,result});
    }
    
   }, [dispatch,usersList]);

  
  const dynamicImage = (image) => {
    return images(`./${image}`);
  }
   
  const clickCompose = () => {
      setCompose(true);
  }

  const selectTypes = (types) => {
    setSelectedFav(false)
    setType(types)   
  }

  const selectFev = (types) => {
    setSelectedFav(true)
  }

  const moveEmails = (val) => {
    [...document.querySelectorAll('.checkbox_animated')].map((input) => {
        if (input.checked) {
            let fakeInput = {
                target: {
                    value: input.value,
                    checked: false
                }
            }
            input.checked = !input.checked;
            selectedmail(fakeInput);
        }
        return null;
    })
    for (var i = 0; i < usersList.length; i++) {
        if (emailIds.includes(usersList[i].id)) {
            usersList[i].type = val;
        }
    }

    var result = groupBy(usersList, function (item) {
        return [item.type];
    });

     dispatch({type : GET_ALL_EMAIL_ASYN, usersList})
     dispatch({ type: GET_ALL_TYPE_ASYN, result })

    }

  const selectedCompose = (email) => {
    setCompose(false);
    setSingleMailRecord(email);
   }

  const addFavourite = (singleMailRecord) => {
    dispatch({ type: UPDATE_EMAIL_TYPES, payload: singleMailRecord })
  }

  const selectedmail = (e, emailID) => {
    const IDs = emailIds;
    setchecked(e.target.checked);
    if (emailIds == null) {
        setEmailIds(mailData)
    } else {
        if (e.target.checked) {
            IDs.push(emailID)
            setEmailIds(IDs)
            const arr = [...new Set(emailIds)];;
            setEmailIds(arr)
        } else {
            setEmailIds(mailData)
        }
    }
  }   
    
    return (
      <Fragment>
        <Breadcrumb parent="Apps" title="Email App"/>
        <Container fluid={true}>
            <div className="email-wrap">
              <Row>
                <Col xl="3" md="6 box-col-6">
                  <div className="email-left-aside">
                    <Card>
                      <CardBody>
                        <div className="email-app-sidebar">
                          <Media>
                            <div className="media-size-email">
                              <Media body className="mr-3 rounded-circle img-50"  src={user} alt=""/></div>
                            <Media body>
                              <h6 className="f-w-600">{MARKJENCO}</h6>
                              <p>{MARKJENCOEMAIL}</p>
                            </Media>
                          </Media>
                          <ul className="nav main-menu" role="tablist">
                            <li className="nav-item">
                              <a className="btn-primary btn-block btn-mail"  onClick={clickCompose} href="#javascript">
                              <i className="icofont icofont-envelope mr-2"></i> 
                                {NEWMAIL}
                              </a>
                            </li>
                            <li className="nav-item" onClick={() => selectTypes('Inbox')}>
                              <a className={`show ${type === 'Inbox' ? 'active' : ''}`} href="#javascript">
                              <span className="title">
                                <i className="icon-import"></i> 
                                {Inbox}
                              </span>
                              <span className="badge pull-right digits">
                                ({TypesOfData['Inbox'] ? TypesOfData['Inbox'].length : 0})
                              </span>
                              </a>
                           </li>
                            <li onClick={() => selectTypes('AllEmails')}>
                              <a className={`${type === 'AllEmails' ? 'active' : ''}`} href="#javascript">
                                <span className="title">
                                  <i className="icon-folder"></i> 
                                  {AllMail}
                                  </span>
                              </a>
                            </li>
                            <li onClick={() => selectTypes('Sent')}>
                              <a href="#javascript" className={`${type === 'Sent' ? 'active' : ''}`}>
                                  <span className="title">
                                      <i className="icon-new-window"></i>
                                      {Sent}
                                  </span>
                                  <span className="badge pull-right digits">
                                      ({TypesOfData['Sent'] ? TypesOfData['Sent'].length : 0})
                                  </span>
                              </a>
                          </li>
                          <li onClick={() => selectTypes('Draft')}>
                              <a href="#javascript" className={`${type === 'Draft' ? 'active' : ''}`}>
                                  <span className="title">
                                      <i className="icon-pencil-alt"></i>
                                      {Draft}
                                  </span>
                                  <span className="badge pull-right digits">
                                      ({TypesOfData['Draft'] ? TypesOfData['Draft'].length : 0})
                                  </span>
                              </a>
                          </li>
                          <li onClick={() => selectTypes('Trash')}>
                              <a href="#javascript" className={`${type === 'Trash' ? 'active' : ''}`}>
                                  <span className="title">
                                      <i className="icon-trash"></i>
                                      {Trash}
                                  </span>
                                  <span className="badge pull-right digits">
                                      ({TypesOfData['Trash'] ? TypesOfData['Trash'].length : 0})
                                  </span>
                              </a>
                          </li>
                          <li>
                              <a href="#javascript">
                                  <span className="title">
                                      <i className="icon-info-alt"></i>
                                      {IMPORTANT}
                                  </span>
                              </a>
                          </li>
                          <li onClick={() => selectFev('favourite')}>
                              <a href="#javascript" className={`${type === 'favourite' ? 'active' : ''}`}>
                                  <span className="title">
                                      <i className="icon-star"></i>
                                      {Starred}
                                  </span>
                              </a>
                          </li>
                          <li>
                              <hr />
                          </li>
                          <li onClick={() => selectTypes('Unread')}>
                              <a href="#javascript">
                                  <span className="title">
                                      <i className="icon-email"></i>
                                      {UNREAD}
                                  </span>
                              </a>
                          </li>
                          <li onClick={() => selectTypes('Spam')}>
                              <a href="#javascript">
                                  <span className="title">
                                      <i className="icon-export"></i>
                                      {Spam}
                                  </span>
                              </a>
                          </li>
                          <li onClick={() => selectTypes('Outbox')}>
                              <a href="#javascript">
                                  <span className="title">
                                      <i className="icon-share"></i>
                                      {OUTBOX}
                                  </span>
                              </a>
                          </li>
                          <li>
                              <a href="#javascript">
                                  <span className="title">
                                      <i className="icon-file"></i>
                                      {UPDATE}
                                  </span>
                              </a>
                          </li>
                          <li>
                              <a href="#javascript">
                                  <span className="title">
                                      <i className="icon-bell"></i>
                                      {ALERT}
                                  </span>
                              </a>
                          </li>
                          <li>
                              <a href="#javascript">
                                  <span className="title">
                                      <i className="icon-notepad"></i>
                                      {NOTES}
                                  </span>
                                  <span className="badge pull-right digits">
                                      {"(20)"}
                                  </span>
                              </a>
                          </li>
                          </ul>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </Col>
                <Col xl="3" md="6 box-col-6">
                  <div className="email-right-aside">
                    <Card className="email-body">
                      <div className="pr-0 b-r-light">
                        <div className="email-top">
                            <Row>
                                <Col>
                                    <h5>{selectedFav ? 'Favourite' : type}</h5>
                                </Col>
                                <Col className="text-right">
                                    <div className="dropdown">
                                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                            <DropdownToggle className="dropbtn" color="primary" caret> {More} </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem onClick={() => moveEmails("Draft")}>{Draft}</DropdownItem>
                                                <DropdownItem onClick={() => moveEmails("Trash")}>{Trash}</DropdownItem>
                                                <DropdownItem onClick={() => moveEmails("Spam")}>{Spam}</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                      <div className="inbox custom-scrollbar">
                        {
                          selectedFav ?
                              usersList.filter((email) => email.favourite === true).length > 0 ?
                                  usersList.filter((email) => email.favourite === true).map((list, index) => {
                                      return (
                                          <Media key={index} onClick={() => selectedCompose(list)}>
                                              <Label className="d-block">
                                                  <Input className="checkbox_animated" 
                                                      name="chk-ani" type="checkbox" onChange={(e) => selectedmail(e, list.id)} defaultChecked={checked} />
                                              </Label>
                                              <div className="media-size-email">
                                                  <Media body className="mr-3 rounded-circle img-50 " src={list.image ? dynamicImage(list.image) : ''} alt="" />
                                              </div>
                                              <Media body>
                                                  <h6>{list.name}  <small><span className="digits">({list.date})</span></small></h6>
                                                  <p>{list.cc},</p>
                                              </Media>
                                          </Media>
                                      )
                                  })
                                  :
                                  <div className="search-not-found text-center ng-star-inserted" >
                                      <div className="">
                                          <Media alt="" className="second-search" src={images(`./search-not-found.png`)} />
                                          <p className="mb-0">{NoMailFound}</p>
                                      </div>
                                  </div>
                              :
                              TypesOfData[type] ? TypesOfData[type].map((list, index) => {
                                  return (
                                      <Media key={index} onClick={() => selectedCompose(list)}>
                                          <Label className="d-block" htmlFor="chk-ani">
                                              <input className="checkbox_animated" id="chk-ani"
                                                  name="chk-ani" type="checkbox" onChange={(e) => selectedmail(e, list.id)} defaultChecked={checked} />
                                          </Label>
                                          <div className="media-size-email">
                                              <Media body className="mr-3 rounded-circle img-50" src={list.image ? dynamicImage(list.image) : ''} alt="" />
                                          </div>
                                          <Media body>
                                              <h6>{list.name}  <small><span className="digits">({list.date})</span></small></h6>
                                              <p>{list.cc},</p>
                                          </Media>
                                      </Media>
                                  )
                              }) 
                              :
                              type === 'AllEmails' ?
                                  usersList.map((list, index) => {
                                      return (
                                          <Media key={index} onClick={() => selectedCompose(list)}>
                                              <Label className="d-block" htmlFor="chk-ani">
                                                  <Input className="checkbox_animated"
                                                      name="chk-ani" type="checkbox" onChange={(e) => selectedmail(e, list.id)} defaultChecked={checked} />
                                              </Label>
                                              <div className="media-size-email">
                                                  <Media body className="mr-3 rounded-circle img-50" src={list.image ? dynamicImage(list.image) : ''} alt="" />
                                              </div>
                                              <Media body>
                                                  <h6>{list.name}  <small><span className="digits">({list.date})</span></small></h6>
                                                  <p>{list.cc},</p>
                                              </Media>
                                          </Media>
                                      )
                                  })
                                  :
                                  <div className="search-not-found text-center ng-star-inserted" >
                                      <div className="">
                                          <Media alt="" className="second-search" src={images(`./search-not-found.png`)} />
                                          <p className="mb-0">{NoMailFound}</p>
                                      </div>
                                  </div>
                          }
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>
                <Col xl="6" md="12 box-col-12">
                  <div className="email-right-aside">
                    <Card className="email-body radius-left">
                      <div className="pl-0">
                        <div className="tab-content">
                        <div className={`tab-pane fade ${compose ? 'active show' : ''}`} id="pills-darkhome" role="tabpanel" aria-labelledby="pills-darkhome-tab">
                            <div className="email-compose">
                              <div className="email-top compose-border">
                                <Row>
                                  <Col sm="8 xl-50">
                                    <h4 className="mb-0">{NewMessage}</h4>
                                  </Col>
                                  <Col sm="4 xl-50" className="btn-middle">
                                    <Button color="primary" className="btn-block btn-mail text-center mb-0 mt-0">
                                      <i className="fa fa-paper-plane mr-2"></i>{Send}
                                    </Button>
                                  </Col>
                                </Row>
                              </div>
                              <div className="email-wrapper">
                                <Form className="theme-form">
                                  <FormGroup>
                                    <Label className="col-form-Label pt-0">{To}</Label>
                                    <Input className="form-control" type="email"/>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label >{Subject}</Label>
                                    <Input className="form-control" type="text"/>
                                  </FormGroup>
                                  <FormGroup className="mb-0">
                                    <Label className="text-muted">{Messages}</Label>
                                    <CKEditor
                                        activeclassName="p10"
                                    />                                                          
                                  </FormGroup>
                                </Form>
                              </div>
                            </div>
                          </div>
                          <div className={`tab-pane fade ${compose !== true ? 'active show' : ''}`}>
                              <div className="email-content">
                                  <div className="email-top">
                                      <Row>
                                          <Col md="6 xl-100" sm="12">
                                              <Media>
                                                  <Media className="mr-3 rounded-circle img-50" src={singleMailRecord.image ? dynamicImage(singleMailRecord.image) : ''} alt="" />
                                                  <Media body>
                                                      <h6>{singleMailRecord.name} <small><span className="digits">{singleMailRecord.date}</span> <span className="digits">6:00</span> AM</small></h6>
                                                      <p>{singleMailRecord.cc}</p>
                                                  </Media>
                                              </Media>
                                          </Col>
                                          <Col md="6" sm="12">
                                              <div className="float-right d-flex" onClick={() => addFavourite(singleMailRecord)}>
                                                  <p className="user-emailid">{"Lormlpsa"}<span className="digits">{"23"}</span>{"@company.com"}</p>
                                                  <i className={`fa fa-star-o f-18 mt-1 ${singleMailRecord.favourite ? 'starred' : ''} `} ></i>
                                              </div>
                                          </Col>
                                      </Row>
                                  </div>
                                  <div className="email-wrapper">
                                      <p>{"Hello"}</p>
                                      <p>{"Dear Sir Good Morning"},</p>
                                      <h5>{"Elementum varius nisi vel tempus. Donec eleifend egestas viverra."}</h5>
                                      <p className="m-b-20">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor."}</p>
                                      <p>{"In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit"}</p>
                                      <hr />
                                      <div className="d-inline-block">
                                          <h6 className="text-muted"><i className="icofont icofont-clip"></i> {ATTACHMENTS}</h6><a className="text-muted text-right right-download" href="#javascript"><i className="fa fa-long-arrow-down mr-2"></i>{DownloadAll}</a>
                                          <div className="clearfix"></div>
                                      </div>
                                      <div className="attachment">
                                          <ul className="list-inline">
                                              <li className="list-inline-item"><img className="img-fluid" src={email1} alt="" /></li>
                                              <li className="list-inline-item"><img className="img-fluid" src={email2} alt="" /></li>
                                              <li className="list-inline-item"><img className="img-fluid" src={email3} alt="" /></li>
                                          </ul>
                                      </div>
                                      <hr />
                                      <div className="action-wrapper">
                                          <ul className="actions">
                                              <li><a className="text-muted" href="#javascript"><i className="fa fa-reply mr-2"></i>{Reply}</a></li>
                                              <li><a className="text-muted" href="#javascript"><i className="fa fa-reply-all mr-2"></i>{ReplyAll}</a></li>
                                              <li><a className="text-muted" href="#javascript"><i className="fa fa-share mr-2"></i></a>{Forward}</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </div>
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
export default Email;