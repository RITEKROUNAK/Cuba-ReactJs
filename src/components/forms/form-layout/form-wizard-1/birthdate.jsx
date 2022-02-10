import React, { Fragment } from 'react';
import {Row,Col,Form,Label,Input,Button} from 'reactstrap'
import { DD,MM,YY,Submit } from "../../../../constant";

const Birthdate = (props) => {
    const submitFun = () => {
        alert("successfully updated")
        window.location.reload();
    }
    return (
        <Fragment>
            <Row>
                <Col sm="12">

                    <Form className="needs-validation" noValidate>
                        <Row form>
                            <Col md="12 mb-3">
                                <Label>{DD}</Label>
                                <Input className="form-control"  type="number" placeholder="DD" required />
                                <div className="valid-feedback">{"Looks good!"}</div>
                            </Col>
                            <Col md="12 mb-3">
                                <Label>{MM}</Label>
                                <Input className="form-control"  type="number" placeholder="MM" required />
                                <div className="valid-feedback">{"Looks good!"}</div>
                            </Col>
                            <Col md="12 mb-3">
                                <Label>{YY}</Label>
                                <Input className="form-control"  type="number" placeholder="YY" required />
                                <div className="valid-feedback">{"Looks good!"}</div>
                            </Col>
                        </Row>
                        <Button color="primary"  className="pull-right" onClick={submitFun}>{Submit}</Button>
                        
                    </Form>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Birthdate;