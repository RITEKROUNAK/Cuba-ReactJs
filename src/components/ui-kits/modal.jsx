import React,{useState, Fragment} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input} from 'reactstrap'
import {BasicModal,Simple,StaticExample,NewMessage,SendMessage,ModalTitle,Close,SaveChanges,VerticallyCentered,TooltipsAndPopovers,UsingTheGrid,SizesModal,LargeModal,SmallModal,ScrollingLongContent,VaryingModalContent} from '../../constant'


const Modals = (props) => {

    const [modal, setModal] = useState(false);
    const [scrollingmodal, setscrollingModal] = useState(false);
    const [Verticalcenter, setVerticalcenter] = useState(false);
    const [tooltippopover, setTooltipPopover] = useState(false);
    const [grid, setGrid] = useState(false);
    const [VaryingContentone, setVaryingContentone] = useState(false);
    const [VaryingContenttwo, setVaryingContenttwo] = useState(false);
    const [VaryingContentthree, setVaryingContentthree] = useState(false);
    const [Large, setLarge] = useState(false);
    const [Small, setSmall] = useState(false);

    const toggle = () => setModal(!modal);
    const Scrollmodaltoggle = () => setscrollingModal(!scrollingmodal);
    const Verticalcentermodaltoggle = () => setVerticalcenter(!Verticalcenter);
    const Tooltippopovermodaltoggle = () => setTooltipPopover(!tooltippopover);
    const Gridmodaltoggle = () => setGrid(!grid);
    const VaryingContentonetoggle = () => setVaryingContentone(!VaryingContentone);
    const VaryingContenttwotoggle = () => setVaryingContenttwo(!VaryingContenttwo);
    const VaryingContentthreetoggle = () => setVaryingContentthree(!VaryingContentthree);
    const LargeModaltoggle = () => setLarge(!Large);
    const SmallModaltoggle = () => setSmall(!Small);
    
    return (
      <Fragment>
        <Breadcrumb parent="Ui Kits" title="Modal"/>
        <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
            <CardHeader>
                <h5>{StaticExample}</h5>
            </CardHeader>
            <CardBody>
                <div className="modal-dialog modal-lg mt-0 mb-0">
                    <div className="modal-dialog mt-0 mb-0">
                    <div className="modal-content">
                        <ModalHeader>
                            {NewMessage}
                        </ModalHeader>
                        <ModalBody>
                        <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary">{Close}</Button>
                            <Button color="primary">{SendMessage}</Button>
                        </ModalFooter>
                    </div> 
                    </div>
                </div>
            </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{BasicModal}</h5>
              </CardHeader>
              <CardBody className="btn-showcase">
                 <Button color="primary" onClick={toggle}>{Simple}</Button>
                    <Modal isOpen={modal} toggle={toggle} >
                        <ModalHeader toggle={toggle}>{ModalTitle}</ModalHeader>
                        <ModalBody>
                        ....
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={toggle}>{Close}</Button>
                        <Button color="secondary" onClick={toggle}>{SaveChanges}</Button>
                        </ModalFooter>
                    </Modal>
                <Button color="primary" onClick={Scrollmodaltoggle}>{ScrollingLongContent}</Button>
                <Modal isOpen={scrollingmodal} toggle={Scrollmodaltoggle}>
                      <ModalHeader toggle={Scrollmodaltoggle}>
                        {ModalTitle}
                      </ModalHeader>
                      <ModalBody>
                        <p>{"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}</p>
                        <p>{"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}</p>
                        <p>{"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}</p>
                        <p>{"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}</p>
                        <p>{"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}</p>
                        <p>{"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}</p>
                        <p>{"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}</p>
                        <p>{"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}</p>
                        <p>{"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}</p>
                        <p>{"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}</p>
                        <p>{"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}</p>
                        <p>{"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}</p>
                        <p>{"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}</p>
                        <p>{"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}</p>
                        <p>{"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}</p>
                        <p>{"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}</p>
                        <p>{"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}</p>
                        <p>{"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}</p>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="secondary" onClick={Scrollmodaltoggle}>{Close}</Button>
                        <Button color="primary"   onClick={Scrollmodaltoggle}>{SaveChanges}</Button>
                      </ModalFooter>
                </Modal>
                <Button color="primary" onClick={Verticalcentermodaltoggle}>{VerticallyCentered}</Button>
                <Modal isOpen={Verticalcenter} toggle={Verticalcentermodaltoggle} centered>
                      <ModalHeader toggle={Verticalcentermodaltoggle}>
                        {ModalTitle}
                      </ModalHeader>
                      <ModalBody>
                        <p>{"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}</p>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="secondary" onClick={Verticalcentermodaltoggle}>{Close}</Button>
                        <Button color="primary"  onClick={Verticalcentermodaltoggle}>{SaveChanges}</Button>
                      </ModalFooter>
                </Modal>
                <Button color="primary" onClick={Tooltippopovermodaltoggle}>{TooltipsAndPopovers}</Button>
                <Modal isOpen={tooltippopover} toggle={Tooltippopovermodaltoggle} centered>
                    <ModalHeader toggle={Tooltippopovermodaltoggle}>
                        {ModalTitle}
                      </ModalHeader>

                      <ModalBody>
                        <h5>{"Popover in a modal"}</h5>
                        <p>{"This"} <button className="btn btn-primary popover-test">{"button"}</button> {"triggers a popover on click."}</p>
                        <hr/>
                        <h5>{"Tooltips in a modal"}</h5>
                        <p><a className="tooltip-test" href="#javascript" >{"that link"}</a> {"have tooltips on hover."}</p>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="secondary"  onClick={Tooltippopovermodaltoggle}>{Close}</Button>
                        <Button color="primary"  onClick={Tooltippopovermodaltoggle}>{SaveChanges}</Button>
                      </ModalFooter>
                </Modal>
                <Button color="primary" onClick={Gridmodaltoggle}>{UsingTheGrid}</Button>
                <Modal isOpen={grid} toggle={Gridmodaltoggle}>
                        <ModalHeader toggle={Gridmodaltoggle}>
                          {ModalTitle}
                        </ModalHeader>
                         <ModalBody className="grid-showcase">
                        <Container fluid={true} className="bd-example-row">
                          <Row>
                            <Col md="4"><span>{".col-md-4"}</span></Col>
                            <Col md="4" className="ml-auto"><span>{".col-md-4 .ml-auto"}</span></Col>
                          </Row>
                          <Row>
                            <Col md="3" className="ml-auto"><span>{".col-md-3 .ml-auto"}</span></Col>
                            <Col md="2" className="ml-auto"><span>{".col-md-2 .ml-auto"}</span></Col>
                          </Row>
                          <Row>
                            <Col md="6" className="ml-auto"><span>{".col-md-6 .ml-auto"}</span></Col>
                          </Row>
                          <Row>
                            <Col sm="9"><span>{"Level 1: .col-sm-9"}</span>
                              <Row>
                                <Col sm="6" col="9"><span>{"Level 2: .col-8 .col-sm-6"}</span></Col>
                                <Col sm="6"  col="4" ><span>{"Level 2: .col-4 .col-sm-6"}</span></Col>
                              </Row>
                            </Col>
                          </Row>
                        </Container>
                        </ModalBody>
                      <ModalFooter>
                        <Button color="secondary"  onClick={Gridmodaltoggle}>{Close}</Button>
                        <Button color="primary"  onClick={Gridmodaltoggle}>{SaveChanges}</Button>
                      </ModalFooter>
                </Modal> 
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{VaryingModalContent}</h5>
              </CardHeader>
              <CardBody className="btn-showcase">
                <Button color="primary" onClick={VaryingContentonetoggle}>{"Open modal for @mdo"}</Button>
                <Button color="primary" onClick={VaryingContenttwotoggle}>{"Open modal for @fat"}</Button>
                <Button color="primary" onClick={VaryingContentthreetoggle}>{"Open modal for @getbootstrap"}</Button>
                <Modal isOpen={VaryingContentone} toggle={VaryingContentonetoggle}>
                     <ModalHeader toggle={VaryingContentonetoggle}>
                      {NewMessage}
                     </ModalHeader>
                      <ModalBody>
                        <Form>
                          <FormGroup>
                            <Label className="col-form-label" for="recipient-name">{"Recipient:"}</Label>
                            <Input className="form-control" type="text" defaultValue="@fat"/>
                          </FormGroup>
                          <FormGroup>
                            <Label className="col-form-label" for="message-text">{"Message:"}</Label>
                            <Input type="textarea" className="form-control" id="message-text"></Input>
                          </FormGroup>
                        </Form>
                      </ModalBody>
                      <ModalFooter>
                            <Button color="secondary" onClick={VaryingContentonetoggle}>{Close}</Button>
                            <Button color="primary" onClick={VaryingContentonetoggle}>{SendMessage}</Button>
                      </ModalFooter>
                </Modal>
                <Modal isOpen={VaryingContenttwo} toggle={VaryingContenttwotoggle}>
                     <ModalHeader toggle={VaryingContenttwotoggle}>
                        {NewMessage}
                     </ModalHeader>
                      <ModalBody>
                        <Form>
                          <FormGroup>
                            <Label className="col-form-label" for="recipient-name">{"Recipient:"}</Label>
                            <Input  className="form-control" type="text" defaultValue="@Mat"/>
                          </FormGroup>
                          <FormGroup>
                            <Label className="col-form-label" for="message-text">{"Message:"}</Label>
                            <Input type="textarea" className="form-control" id="message-text"></Input>
                          </FormGroup>
                        </Form>
                      </ModalBody>
                      <ModalFooter>
                            <Button color="secondary" onClick={VaryingContenttwotoggle}>{Close}</Button>
                            <Button color="primary" onClick={VaryingContenttwotoggle}>{SendMessage}</Button>
                      </ModalFooter>
                </Modal>
                <Modal isOpen={VaryingContentthree} toggle={VaryingContentthreetoggle}>
                     <ModalHeader toggle={VaryingContentthreetoggle}>
                        {NewMessage}
                     </ModalHeader>
                      <ModalBody>
                        <Form>
                          <FormGroup>
                            <Label className="col-form-label" for="recipient-name">{"Recipient:"}</Label>
                            <Input className="form-control" type="text" defaultValue="@getbootstrap"/>
                          </FormGroup>
                          <FormGroup>
                            <Label className="col-form-label" for="message-text">{"Message:"}</Label>
                            <Input type="textarea"className="form-control" id="message-text"></Input>
                          </FormGroup>
                        </Form>
                      </ModalBody>
                      <ModalFooter>
                            <Button color="secondary" onClick={VaryingContentthreetoggle}>{Close}</Button>
                            <Button color="primary" onClick={VaryingContentthreetoggle}>{SendMessage}</Button>
                      </ModalFooter>
                </Modal>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{SizesModal}</h5>
              </CardHeader>
              <CardBody className="btn-showcase">
                 <Button color="primary" onClick={LargeModaltoggle}>{LargeModal}</Button>
                    <Modal isOpen={Large} toggle={LargeModaltoggle} size="lg">
                      <ModalHeader toggle={LargeModaltoggle}>
                        {LargeModal}
                      </ModalHeader>
                      <ModalBody>
                        ....
                      </ModalBody>
                    </Modal>
                <Button color="primary" onClick={SmallModaltoggle}>{SizesModal}</Button>
                    <Modal isOpen={Small} toggle={SmallModaltoggle} size="sm">
                      <ModalHeader toggle={SmallModaltoggle}>
                        {SmallModal}
                      </ModalHeader>
                      <ModalBody>
                        ....
                     </ModalBody>
                    </Modal>
              </CardBody>
            </Card>
          </Col> 
        </Row>
      </Container>
      </Fragment>
    );
}

export default Modals;