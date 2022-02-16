import React,{useState} from 'react';
import {Container,Row,Col,Form,FormGroup,Button,Input,Label} from 'reactstrap'
import { EnterPassword,Unlock, RememberPassword,SignIn} from "../../constant";
const UnlockUser = (props) => {

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
        <div className="authentication-main mt-0">
          <Row>
            <Col xs="12">
              <div className="login-card">
                <div>
                  <div><a className="logo" href="#javascript"><img className="img-fluid for-light" src={require("../../assets/images/logo/login.png")} alt="looginpage"/><img className="img-fluid for-dark" src={require("../../assets/images/logo/logo_dark.png")} alt="looginpage"/></a></div>
                  <div className="login-main">
                    <Form className="theme-form">
                      <h4>{Unlock}</h4>
                      <FormGroup>
                        <Label className="col-form-label">{EnterPassword}</Label>
                        <Input className="form-control" type={togglePassword ?  "text" : "password" } name="login[password]" value={password} onChange={(e) => handleChange(e)} required="" placeholder="*********"/>
                        <div className="show-hide" onClick={() => HideShowPassword(togglePassword)}><span className={togglePassword ? "" : "show"}></span></div>
                      </FormGroup>
                      <FormGroup className="mb-0">
                        <div className="checkbox ml-3">
                          <Input id="checkbox1" type="checkbox"/>
                          <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                        </div>
                        <Button color="primary" className="btn-block" type="submit">{Unlock}</Button>
                      </FormGroup>
                      <p className="mt-4 mb-0">{"Already Have an account?"}<a className="ml-2" href="#javascript">{SignIn}</a></p>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        </Container>
    );
}

export default UnlockUser;