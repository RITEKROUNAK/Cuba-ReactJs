import React, { useState,Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import InputRange from "react-input-range";
import {Container,Row,Col,Card,CardHeader,CardBody,Label,Form} from 'reactstrap'
import {Default,BasicSlider,NegativeValues,FormatedLabel,DraggableRange,Disabled} from '../../constant'

const RangeSlider = () => {
    const initialslider = {
        value: 10,
        nagative: -10,
        foramtedLabel: 10,
        disabled: 10,
        foramtedLabelKg: 5,
        draggable: {
          min: 3,
          max: 7,
        },
      };
      const [values, setValues] = useState(initialslider);
 
    return (
        <Fragment>
        <Breadcrumb parent="Bouns Ui" title="Range Slider"/>    
        <Container fluid={true}>
        <Row>
            <Col sm="12" xl="6">
              <Card>
                <CardHeader>
                  <h5>{BasicSlider}</h5>
                </CardHeader>
                <CardBody>
                  <Form className="theme-form form-label-align-right range-slider">
                    <Row className="mb-0">
                      <Col md="2">
                        <Label>{Default}</Label>
                      </Col>
                      <Col md="10">
                        <InputRange
                          maxValue={20}
                          minValue={0}
                          value={values.value}
                          onChange={(value) =>
                            setValues({ ...values, value: value })
                          }
                        />
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
  
            <Col sm="12" xl="6">
              <Card>
                <CardHeader>
                  <h5>{NegativeValues}</h5>
                </CardHeader>
                <CardBody>
                  <Form className="theme-form form-label-align-right range-slider">
                    <Row className="mb-0">
                      <Col md="2">
                        <Label>{Default}</Label>
                      </Col>
                      <Col md="10">
                        <InputRange
                          maxValue={0}
                          minValue={-20}
                          value={values.nagative}
                          onChange={(value) =>
                            setValues({ ...values, nagative: value })
                          }
                        />
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
  
            <Col sm="12">
              <Card>
                <CardHeader>
                  <h5>{Disabled}</h5>
                </CardHeader>
                <CardBody>
                  <Form className="theme-form form-label-align-right range-slider">
                    <Row className="mb-0">
                      <Col md="2">
                        <Label>{Default}</Label>
                      </Col>
                      <Col md="10">
                        <InputRange
                          maxValue={20}
                          minValue={0}
                          disabled
                          value={values.disabled}
                          onChange={(value) =>
                            setValues({ ...values, disabled: value })
                          }
                        />
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
  
            <Col sm="12">
              <Card>
                <CardHeader>
                  <h5>{FormatedLabel}</h5>
                </CardHeader>
                <CardBody>
                  <Form className="theme-form form-label-align-right range-slider">
                    <Row className="mb-0">
                      <Col md="2">
                        <Label>{Default}</Label>
                      </Col>
                      <Col md="10">
                        <InputRange
                          maxValue={20}
                          minValue={0}
                          formatLabel={() => values.foramtedLabel.toFixed(2)}
                          value={values.foramtedLabel}
                          onChange={(value) =>
                            setValues({ ...values, foramtedLabel: value })
                          }
                        />
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
  
            <Col sm="12">
              <Card>
                <CardHeader>
                  <h5>{FormatedLabel}</h5>
                </CardHeader>
                <CardBody>
                  <Form className="theme-form form-label-align-right range-slider">
                    <Row className="mb-0">
                      <Col md="2">
                        <Label>{Default}</Label>
                      </Col>
                      <Col md="10">
                        <InputRange
                          maxValue={20}
                          minValue={0}
                          formatLabel={() => `${values.foramtedLabelKg} kg`}
                          value={values.foramtedLabelKg}
                          onChange={(value) =>
                            setValues({ ...values, foramtedLabelKg: value })
                          }
                        />
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
  
            <Col sm="12">
              <Card>
                <CardHeader>
                  <h5>{DraggableRange}</h5>
                </CardHeader>
                <CardBody>
                  <Form className="theme-form form-label-align-right range-slider">
                    <Row className="mb-0">
                      <Col md="2">
                        <Label>{Default}</Label>
                      </Col>
                      <Col md="10">
                        <InputRange
                          draggableTrack
                          maxValue={20}
                          minValue={0}
                          value={values.draggable}
                          onChange={(value) =>
                            setValues({ ...values, draggable: value })
                          }
                        />
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          
        </Row>
        </Container>
        </Fragment>
    );
}

export default RangeSlider;