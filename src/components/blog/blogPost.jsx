import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import Ckeditor from 'react-ckeditor-component'
import { Typeahead } from 'react-bootstrap-typeahead';
import Dropzone from 'react-dropzone-uploader'
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from "reactstrap"
import {PostEdit,Title,Type,Category,Content,Post,Discard,Text,Audio,Video,Image} from "../../constant";

const BlogPost = (props) => {

  const data = [
    { name: 'Lifestyle' },
    { name: 'Travel' }
  ]

  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  const handleChangeStatus = ({ meta, file }, status) => { }
  
  return (
    <Fragment>
      <Breadcrumb parent="Blog" title="Add Post" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{PostEdit}</h5>
              </CardHeader>
              <CardBody className="add-post">
                <Form className="row needs-validation">
                  <Col sm="12">
                    <FormGroup>
                      <Label for="validationCustom01">{Title}:</Label>
                      <Input className="form-control" id="validationCustom01" type="text" placeholder="Post Title" required="" />
                      <div className="valid-feedback">{"Looks good!"}</div>
                    </FormGroup>
                    <FormGroup>
                      <Label>{Type}:</Label>
                      <div className="m-checkbox-inline">
                        <Label for="edo-ani">
                          <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" />{Text}
                            </Label>
                        <Label for="edo-ani1">
                          <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" />{Image}
                            </Label>
                        <Label for="edo-ani2">
                          <Input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" defaultChecked />{Audio}
                            </Label>
                        <Label for="edo-ani3">
                          <Input className="radio_animated" id="edo-ani3" type="radio" name="rdo-ani" />{Video}
                            </Label>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <div className="col-form-Label">{Category}:
                            <Typeahead
                              id="multiple-typeahead"
                              className="mt-2"
                              clearButton
                              defaultSelected={data.slice(0, 5)}
                              labelKey="name"
                              multiple
                              options={data}
                              placeholder="Select Your Name...."
                            />
                      </div>
                    </FormGroup>
                    <div className="email-wrapper">
                      <div className="theme-form">
                        <FormGroup>
                          <Label>{Content}:</Label>
                          <Ckeditor
                            activeclassName="p10"
                          />
                        </FormGroup>
                      </div>
                    </div>
                  </Col>
                </Form>
                <Form className="m-b-20">
                  <div className="m-0 dz-message needsclick">
                    <Dropzone
                      getUploadParams={getUploadParams}
                      onChangeStatus={handleChangeStatus}
                      maxFiles={1}
                      multiple={false}
                      canCancel={false}
                      inputContent="Drop files here or click to upload."
                      styles={{
                        dropzone: { width: '100%', height: 50 },
                        dropzoneActive: { borderColor: 'green' },
                      }}
                    />
                  </div>
                </Form>
                <div className="btn-showcase">
                  <Button color="primary" type="submit">{Post}</Button>
                  <Button color="light" type="reset">{Discard}</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default BlogPost;