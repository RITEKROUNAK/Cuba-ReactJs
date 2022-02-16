import React, { Fragment,useEffect,useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody, CardFooter, Media, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'
import { MyProfile,Bio,MarkJecno,Designer,Password,Website,Save,EditProfile,Company,Username,UsersCountryMenu,AboutMe,UpdateProfile,UsersTableTitle,FirstName,LastName,Address,EmailAddress,PostalCode,Country, UsersTableHeader,City,Edit,Update,Delete} from '../../constant'
const UserEdit = (props) => {

  const [data,setData] = useState([])

  useEffect(() => {
      axios.get(`${process.env.PUBLIC_URL}/api/user-edit-table.json`).then(res => setData(res.data))
  },[])

  return (
    <Fragment>
      <Breadcrumb parent="Users" title="Edit Profile" />
      <Container fluid={true}>
        <div className="edit-profile">
          <Row>
            <Col xl="4">
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">{MyProfile}</h4>
                  <div className="card-options">
                    <a className="card-options-collapse" href="#javascript">
                      <i className="fe fe-chevron-up"></i>
                    </a>
                    <a className="card-options-remove" href="#javascript">
                      <i className="fe fe-x"></i>
                    </a>
                  </div>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row className="mb-2">
                      <div className="col-auto">
                        <Media className="img-70 rounded-circle" alt="" src={require("../../assets/images/user/7.jpg")} />
                      </div>
                      <Col>
                        <h3 className="mb-1">{MarkJecno}</h3>
                        <p className="mb-4">{Designer}</p>
                      </Col>
                    </Row>
                    <FormGroup>
                      <h6 className="form-label">{Bio}</h6>
                      <Input type="textarea" className="form-control" rows="5" defaultValue="On the other hand, we denounce with righteous indignation" />
                    </FormGroup>
                    <FormGroup>
                      <Label className="form-label">{EmailAddress}</Label>
                      <Input className="form-control" placeholder="your-email@domain.com" />
                    </FormGroup>
                    <FormGroup>
                      <Label className="form-label">{Password}</Label>
                      <Input className="form-control" type="password" defaultValue="password" />
                    </FormGroup>
                    <FormGroup>
                      <Label className="form-label">{Website}</Label>
                      <Input className="form-control" placeholder="http://Uplor .com" />
                    </FormGroup>
                    <div className="form-footer">
                      <button className="btn btn-primary btn-block">{Save}</button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col xl="8">
              <Form className="card">
                <CardHeader>
                  <h4 className="card-title mb-0">{EditProfile}</h4>
                  <div className="card-options">
                    <a className="card-options-collapse" href="#javascript">
                      <i className="fe fe-chevron-up"></i>
                    </a>
                    <a className="card-options-remove" href="#javascript">
                      <i className="fe fe-x"></i>
                    </a>
                  </div>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col lg="4">
                      <FormGroup>
                        <Label className="form-label">{Company}</Label>
                        <Input className="form-control" type="text" placeholder="Company" />
                      </FormGroup>
                    </Col>
                    <Col sm="6" md="3">
                      <FormGroup>
                        <Label className="form-label">{Username}</Label>
                        <Input className="form-control" type="text" placeholder="Username" />
                      </FormGroup>
                    </Col>
                    <Col sm="6" md="4">
                      <FormGroup>
                        <Label className="form-label">{EmailAddress}</Label>
                        <Input className="form-control" type="email" placeholder="Email" />
                      </FormGroup>
                    </Col>
                    <Col sm="6" md="6">
                      <FormGroup>
                        <Label className="form-label">{FirstName}</Label>
                        <Input className="form-control" type="text" placeholder="Company" />
                      </FormGroup>
                    </Col>
                    <Col sm="6" md="6">
                      <FormGroup>
                        <Label className="form-label">{LastName}</Label>
                        <Input className="form-control" type="text" placeholder="Last Name" />
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <FormGroup>
                        <Label className="form-label">{Address}</Label>
                        <Input className="form-control" type="text" placeholder="Home Address" />
                      </FormGroup>
                    </Col>
                    <Col sm="6" md="4">
                      <FormGroup>
                        <Label className="form-label">{City}</Label>
                        <Input className="form-control" type="text" placeholder="City" />
                      </FormGroup>
                    </Col>
                    <Col sm="6" md="3">
                      <FormGroup>
                        <Label className="form-label">{PostalCode}</Label>
                        <Input className="form-control" type="number" placeholder="ZIP Code" />
                      </FormGroup>
                    </Col>
                    <Col md="5">
                      <FormGroup>
                        <Label className="form-label">{Country}</Label>
                        <Input type="select" name="select" className="form-control btn-square">
                          {UsersCountryMenu.map((items,i) => 
                            <option key={i}>{items}</option>
                          )}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="12">
                      <div className="form-group mb-0">
                        <Label className="form-label">{AboutMe}</Label>
                        <Input type="textarea" className="form-control" rows="5" placeholder="Enter About your description" />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter className="text-right">
                  <button className="btn btn-primary" type="submit">{UpdateProfile}</button>
                </CardFooter>
              </Form>
            </Col>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h4 className="card-title mb-0">{UsersTableTitle}</h4>
                  <div className="card-options"><a className="card-options-collapse" href="#javascript" data-toggle="card-collapse"><i className="fe fe-chevron-up"></i></a><a className="card-options-remove" href="#javascript" data-toggle="card-remove"><i className="fe fe-x"></i></a></div>
                </CardHeader>
                <div className="table-responsive">
                  <table className="table card-table table-vcenter text-nowrap">
                    <thead>
                      <tr>
                        {UsersTableHeader.map((items,i) => 
                          <th key={i}>{items}</th>
                        )}
                      </tr>
                    </thead>
                    <tbody>

                      {data.map((items,i) => 
                        <tr key={i}>
                          <td><a className="text-inherit" href="#javascript">{items.projectName} </a></td>
                          <td>{items.date}</td>
                          <td><span className="status-icon bg-success"></span>{items.status}</td>
                          <td>{items.price}</td>
                          <td className="text-right">
                            <Button color="primary" size="sm"><i className="fa fa-pencil"></i> {Edit}</Button>
                            <Button color="transparent" size="sm"><i className="fa fa-link"></i> {Update}</Button>
                            <Button color="danger" size="sm"><i className="fa fa-trash"></i> {Delete}</Button>
                          </td>
                        </tr>
                      )}
                      
                    </tbody>
                  </table>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
}

export default UserEdit;