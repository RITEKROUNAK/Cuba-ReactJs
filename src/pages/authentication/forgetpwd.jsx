import React from 'react';
import {Container,Row,Col,Form,FormGroup,Label,Input,Button} from 'reactstrap' 
import { NewPassword,RetypePassword,Done,EnterMobileNumber,EnterOTP,Resend,ResetPassword, RememberPassword, SignIn,Send} from "../../constant";
import { useState } from 'react';
const Forgetpwd = (props) => {

    const [togglePassword,setTogglePassword] = useState(false)
    const [password,setPassword] = useState("")

    const handleChange = (e) => {
      setPassword(e.target.value)
    }
    const HideShowPassword  = (tPassword) => {
      setTogglePassword(!tPassword)
    }
    
    return (
      <Container fluid={true}>
      <Row>
          <Col xs="12">     
            <div className="login-card">
              <div>
                <div><a className="logo" href="#javascript"><img className="img-fluid for-light" src={require("../../assets/images/logo/login.png")} alt="looginpage"/><img className="img-fluid for-dark" src={require("../../assets/images/logo/logo_dark.png")} alt="looginpage"/></a></div>
                <div className="login-main"> 
                  <Form className="theme-form">
                    <h4>{ResetPassword}</h4>
                    <FormGroup>
                      <Label className="col-form-label">{EnterMobileNumber}</Label>
                      <Row>
                        <Col md="3">
                          <Input className="form-control mb-1" type="text" defaultValue="+ 91"/>
                        </Col>
                        <Col md="9">
                          <Input className="form-control mb-1" type="tel" defaultValue="000-000-0000"/>
                        </Col>
                        <Col xs="12">
                          <Button color="primary" className="btn-block m-t-10" type="submit">{Send}</Button>
                        </Col>
                      </Row>
                    </FormGroup>
                    <div className="text-center mt-4 mb-4"><span className="reset-password-link">{"If don't receive OTP?"}  <a className="btn-link text-danger" href="#javascript">{Resend}</a></span></div>
                    <FormGroup>
                      <Label className="col-form-label pt-0">{EnterOTP}</Label>
                      <Row>
                        <Col>
                          <Input className="form-control text-center opt-text" type="text" defaultValue="00" maxLength="2"/>
                        </Col>
                        <Col>
                          <Input className="form-control text-center opt-text" type="text" defaultValue="00" maxLength="2"/>
                        </Col>
                        <Col>
                          <Input className="form-control text-center opt-text" type="text" defaultValue="00" maxLength="2"/>
                        </Col>
                      </Row>
                    </FormGroup>
                    <h6 className="mt-4">{"Create Your Password"}</h6>
                    <FormGroup>
                      <Label className="col-form-label">{NewPassword}</Label>
                      <Input className="form-control" type={togglePassword ? "text" : "password" } name="login[password]" value={password} onChange={(e) => handleChange(e)} required="" placeholder="*********"/>
                      <div className="show-hide" onClick={() => HideShowPassword(togglePassword)}><span className={togglePassword ? "" : "show"}></span></div>
                    </FormGroup>
                    <FormGroup>
                      <Label className="col-form-label">{RetypePassword}</Label>
                      <Input className="form-control" type="password" name="login[password]" required="" placeholder="*********"/>
                    </FormGroup>
                    <FormGroup className="mb-0">
                      <div className="checkbox ml-3">
                        <Input id="checkbox1" type="checkbox"/>
                        <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                      </div>
                      <Button color="primary" className="btn-block" type="submit">{Done}</Button>
                    </FormGroup>
                    <p className="mt-4 mb-0">{"Already have an password?"}<a className="ml-2" href="#javascript">{SignIn}</a></p>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
}

export default Forgetpwd;