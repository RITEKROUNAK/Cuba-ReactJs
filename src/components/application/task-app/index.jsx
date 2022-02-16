import React, { Fragment, useState,useRef, Component,useEffect } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardBody, CardHeader, Nav, NavItem, TabContent, TabPane, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, Table } from 'reactstrap'
import { useForm } from 'react-hook-form'
import { newTask, removeTask } from '../../../redux/task-app/action'
import {WATCH_TASK_LIST} from '../../../redux/actionTypes'
import { useSelector, useDispatch } from 'react-redux'
import SweetAlert from 'sweetalert2'
import { Printer, Link, MoreHorizontal, Trash2, PlusCircle, CheckCircle } from 'react-feather';
import ReactToPrint from "react-to-print";
import {AddTask,TaskTitle,Collection,General,Description,Save,Cancel,Views,CreatedByMe,TodayTasks,DelayedTasks,UpcomingTasks,ThisWeekTask,ThisMonthTasks,AssignedToMe,MyTasks,Tags,Newsletter,Business,Holidays,Print,NoTasksFound,Notification,MARKJENCO,MARKJENCOEMAIL,NewTask,NoTaskDueToday} from "../../../constant";

class CreatedByme extends Component {
   render(){
    const {tasklist,RemoveTask} = this.props
     return(
      <CardBody className="p-0">
        <div className="taskadd">
          <div className="table-responsive table-borderless">
            <Table>
              <thead><tr></tr></thead>
              <tbody>
                {tasklist.length > 0 ?
                  tasklist.map((tasklistdata, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <h6 className="task_title_0">{tasklistdata.title}</h6>
                          <p className="project_name_0">{tasklistdata.collection}</p>
                        </td>
                        <td>
                          <p className="task_desc_0">{tasklistdata.desc}</p>
                        </td>
                        <td>
                          <a className="mr-2" href="#javascript"><Link /></a>
                          <a href="#javascript"><MoreHorizontal /></a>
                        </td>
                        <td><a href="#javascript" onClick={() => RemoveTask(tasklistdata.id)}><Trash2 /></a></td>
                      </tr>
                    )
                  })
                  : <tr><td><div className="no-favourite"><span>{NoTasksFound}</span></div></td></tr>
                }
              </tbody>

            </Table>
          </div>
        </div>
      </CardBody>
     )
  }
}

const Task = (props) => {

  const dispatch = useDispatch()
  const newtaskdata = useSelector(content => content.Taskapp.newtaskdata);
  const tasklist = useSelector(content => content.Taskapp.task);
  const [activeTab, setActiveTab] = useState('1');
  const [addModal, setaddModal] = useState(false)
  const [tagModal, setTagModal] = useState(false)
  const { register, handleSubmit, errors } = useForm();
  const componentRef = useRef();
  const addToggle = () => { setaddModal(!addModal) }
  const tagToggle = () => { setTagModal(!tagModal) }

  useEffect(() => {
    dispatch({type: WATCH_TASK_LIST})
  },[dispatch])

  const Addtask = data => {
    if (data !== '') {
      Addnewtask(data);
      setaddModal(false)
    } else {
      errors.showMessages();
    }
  };

  const Addnewtask = (data) => {
    dispatch(newTask(data))
  }

  const RemoveTask = (taskId) => {
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
        dispatch(removeTask(taskId));
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
  
  return (
    <Fragment>
      <Breadcrumb parent="Apps" title="Tasks" />
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
                      <Nav className="main-menu" role="tablist">
                        <NavItem>
                          <button className="badge-light-primary btn-block btn-mail" onClick={addToggle}><CheckCircle className="mr-2" />{NewTask}</button>
                          <Modal isOpen={addModal} toggle={addToggle} size="lg">
                            <ModalHeader toggle={addToggle}>{AddTask}</ModalHeader>
                            <ModalBody>
                              <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(Addtask)}>
                                <div className="form-row">
                                  <FormGroup className="col-md-12">
                                    <Label>{TaskTitle}</Label>
                                    <Input className="form-control" name="title" type="text" innerRef={register({ required: true })} />
                                    <span style={{ color: "red" }}>{errors.title && 'Title is required'}</span>
                                  </FormGroup>
                                  <FormGroup className="col-md-6">
                                    <Label>{Collection}</Label>
                                    <Input className="js-example-disabled-results" name="collection" type="select" innerRef={register({ required: true })}>
                                      <option value="general">{General}</option>
                                      <option value="fs">{"Fs"}</option>
                                    </Input>
                                  </FormGroup>
                                  <FormGroup className="col-md-12">
                                    <Label>{Description}</Label>
                                    <Input className="form-control" name="desc" type="textarea" innerRef={register({ required: true })}></Input>
                                    <span style={{ color: "red" }}>{errors.desc && 'Description is required'}</span>
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
                          <a href="#javaScript" className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                            <span className="title"> {CreatedByMe}</span>
                          </a>
                        </NavItem>
                        <NavItem>
                          <a href="#javaScript" className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                            <span className="title"> {TodayTasks}</span>
                          </a>
                        </NavItem>
                        <NavItem>
                          <a href="#javaScript" className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                            <span className="title"> {DelayedTasks}</span>
                          </a>
                        </NavItem>
                        <NavItem>
                          <a href="#javaScript" className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                            <span className="title"> {UpcomingTasks}</span>
                          </a>
                        </NavItem>
                        <NavItem>
                          <a href="#javaScript" className={activeTab === '5' ? 'active' : ''} onClick={() => setActiveTab('5')}>
                            <span className="title"> {ThisWeekTask}</span>
                          </a>
                        </NavItem>
                        <NavItem>
                          <a href="#javaScript" className={activeTab === '6' ? 'active' : ''} onClick={() => setActiveTab('6')}>
                            <span className="title"> {ThisMonthTasks}</span>
                          </a>
                        </NavItem>
                        <NavItem>
                          <a href="#javaScript" className={activeTab === '7' ? 'active' : ''} onClick={() => setActiveTab('7')}>
                            <span className="title"> {AssignedToMe} ({newtaskdata.length})</span>
                          </a>
                        </NavItem>
                        <NavItem>
                          <a href="#javaScript" className={activeTab === '8' ? 'active' : ''} onClick={() => setActiveTab('8')}>
                            <span className="title"> {MyTasks} ({newtaskdata.length})</span>
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
                        <NavItem><a href="#javaScript" className={activeTab === '9' ? 'show' : ''} onClick={() => setActiveTab('9')} ><span className="title"> {Notification}</span></a></NavItem>
                        <NavItem><a href="#javaScript" className={activeTab === '10' ? 'show' : ''} onClick={() => setActiveTab('10')} ><span className="title"> {Newsletter}</span></a></NavItem>
                        <NavItem><a href="#javaScript" className={activeTab === '11' ? 'show' : ''} onClick={() => setActiveTab('11')} ><span className="title"> {Business}</span></a></NavItem>
                        <NavItem><a href="#javaScript" className={activeTab === '12' ? 'show' : ''} onClick={() => setActiveTab('12')} ><span className="title">{Holidays}</span></a></NavItem>
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
                            <h6 className="mb-0 f-w-600" >{CreatedByMe}</h6>
                            <ReactToPrint
                              trigger={() => (
                                  <a href="#javascript"><Printer className="mr-2" />{Print}</a>
                              )}
                              content={() => componentRef.current}
                              />
                          </CardHeader>
                         
                          <CreatedByme tasklist={tasklist} RemoveTask={RemoveTask} ref={componentRef}/>

                        </Card>
                      </TabPane>
                      <TabPane tabId="2">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{TodayTasks}</h6><a href="#javascript"><Printer className="mr-2" />{Print}</a>
                          </CardHeader>
                          <CardBody>
                            <div className="details-bookmark text-center">
                              <Row></Row>
                              <div className="no-favourite"><span>{NoTaskDueToday}</span></div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="3">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{DelayedTasks}</h6><a href="#javascript"><Printer className="mr-2" />{Print}</a>
                          </CardHeader>
                          <CardBody>
                            <div className="details-bookmark text-center">
                              <Row></Row>
                              <div className="no-favourite"><span>{NoTasksFound}</span></div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="4">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{UpcomingTasks}</h6><a href="#javascript"><Printer className="mr-2" />{Print}</a>
                          </CardHeader>
                          <CardBody>
                            <div className="details-bookmark text-center">
                              <Row></Row>
                              <div className="no-favourite"><span>{NoTasksFound}</span></div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="5">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{ThisWeekTask}</h6><a href="#javascript"><Printer className="mr-2" />{Print}</a>
                          </CardHeader>
                          <CardBody>
                            <div className="details-bookmark text-center">
                              <Row></Row>
                              <div className="no-favourite"><span>{NoTasksFound}</span></div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="6">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{ThisMonthTasks}</h6><a href="#javascript"><Printer className="mr-2" />{Print}</a>
                          </CardHeader>
                          <CardBody>
                            <div className="details-bookmark text-center">
                              <Row></Row>
                              <div className="no-favourite"><span>{NoTasksFound}</span></div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="7">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0 f-w-600">{AssignedToMe}</h6>
                            <a href="#javascript"><Printer className="mr-2" />{Print}</a>
                          </CardHeader>
                          <CardBody className="p-0">
                            <div className="taskadd">
                              <div className="table-responsive">
                                <Table>
                                  <thead></thead>
                                  <tbody>
                                    {newtaskdata.length > 0 ?
                                      newtaskdata.map((taskdata, index) => {
                                        return (
                                          <tr key={index}>
                                            <td>
                                              <h6 className="task_title_0">{taskdata.title}</h6>
                                              <p className="project_name_0">{taskdata.collection}</p>
                                            </td>
                                            <td>
                                              <p className="task_desc_0">{taskdata.desc}</p>
                                            </td>
                                            <td>
                                              <a className="mr-2" href="#javascript"><Link /></a>
                                              <a href="#javascript"><MoreHorizontal /></a>
                                            </td>
                                            <td><a href="#javascript" onClick={() => RemoveTask(taskdata.id)}><Trash2 /></a></td>
                                          </tr>
                                        )
                                      })
                                      : <tr><td><div className="no-favourite"><span>{NoTasksFound}</span></div></td></tr>
                                    }
                                  </tbody>
                                </Table>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="8">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0 f-w-600">{MyTasks}</h6>
                            <a href="#javascript"><Printer className="mr-2" />{Print}</a>
                          </CardHeader>
                          <CardBody className="p-0">
                            <div className="taskadd">
                              <div className="table-responsive">
                                <Table>
                                  <thead></thead>
                                  <tbody>
                                    {newtaskdata.length > 0 ?
                                      newtaskdata.map((taskdata, index) => {
                                        return (
                                          <tr key={index}>
                                            <td>
                                              <h6 className="task_title_0">{taskdata.title}</h6>
                                              <p className="project_name_0">{taskdata.collection}</p>
                                            </td>
                                            <td>
                                              <p className="task_desc_0">{taskdata.desc}</p>
                                            </td>
                                            <td>
                                              <a className="mr-2" href="#javascript"><Link /></a>
                                              <a href="#javascript"><MoreHorizontal /></a>
                                            </td>
                                            <td><a href="#javascript" onClick={() => RemoveTask(taskdata.id)}><Trash2 /></a></td>
                                          </tr>
                                        )
                                      })
                                      : <tr><td><div className="no-favourite"><span>{NoTasksFound}</span></div></td></tr>
                                    }
                                  </tbody>
                                </Table>
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="9">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{Notification}</h6><a href="#javascript"><Printer className="mr-2" />{Print}</a>
                          </CardHeader>
                          <CardBody>
                            <div className="details-bookmark text-center">
                              <Row></Row>
                              <div className="no-favourite"><span>{NoTasksFound}</span></div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="10">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{Newsletter}</h6><a href="#javascript"><Printer className="mr-2" />{Print}</a>
                          </CardHeader>
                          <CardBody>
                            <div className="details-bookmark text-center">
                              <Row></Row>
                              <div className="no-favourite"><span>{NoTasksFound}</span></div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="11">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{Business}</h6><a href="#javascript"><Printer className="mr-2" />{Print}</a>
                          </CardHeader>
                          <CardBody>
                            <div className="details-bookmark text-center">
                              <Row></Row>
                              <div className="no-favourite"><span>{NoTasksFound}</span></div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId="12">
                        <Card className="mb-0">
                          <CardHeader className="d-flex">
                            <h6 className="mb-0">{Holidays}</h6><a href="#javascript"><Printer className="mr-2" />{Print}</a>
                          </CardHeader>
                          <CardBody>
                            <div className="details-bookmark text-center">
                              <Row></Row>
                              <div className="no-favourite"><span>{NoTasksFound}</span></div>
                            </div>
                          </CardBody>
                        </Card>
                      </TabPane>
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

export default Task;