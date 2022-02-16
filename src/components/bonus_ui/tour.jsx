import React, { Fragment, useState } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, Media } from 'reactstrap'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import Tour from 'reactour'
import { MARKJENCOEMAIL, MarkJecno, JOHANDIO,Like,Designer,BOD,Email,Follower,Following,ContactUs,Location,Comment   } from '../../constant';
const steps = [
  {
    selector: '.step1',
    content: 'This is Profile image',
  },
  {
    selector: '.step2',
    content: 'Change Profile image here',
  },
  {
    selector: '.step3',
    content: 'This is the your details',
  },
  {
    selector: '.step4',
    content: 'This is your Social details',
  },
  {
    selector: '.step5',
    content: 'This is the your first Post',
  },
]
const Tours = (props) => {


  const [opentour, setopentour] = useState(true)

  const [url, setUrl] = useState();

  const readUrl = (event) => {
    if (event.target.files.length === 0)
      return;
    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      setUrl(reader.result)
    }
  }

  const closeTour = () => {
    setopentour(false);
  };
  const disableBody = target => disableBodyScroll(target);
  const enableBody = target => enableBodyScroll(target);

  return (
    <Fragment>
      <Breadcrumb parent="Bouns Ui" title="Tour" />
      <Tour
        steps={steps}
        rounded={5}
        isOpen={opentour}
        disableInteraction={true}
        disableKeyboardNavigation={false}
        onRequestClose={closeTour}
        onAfterOpen={disableBody}
        onBeforeClose={enableBody}
      />
      <Container fluid={true}>
        <div className="user-profile">
          <Row>
            <Col sm="12">
              <Card className="card hovercard text-center">
                <CardHeader className="cardheader"></CardHeader>
                <div className="user-image">
                  <div className="avatar"><Media body className="step1" alt="" src={url ? url : require("../../assets/images/user/7.jpg")} data-intro="This is Profile image" /></div>
                  <div className="icon-wrapper step2" data-intro="Change Profile image here">
                    <i className="icofont icofont-pencil-alt-5">
                      <input className="upload" type="file" onChange={(e) => readUrl(e)} />
                    </i>
                  </div>
                </div>
                <div className="info">
                  <Row className="step3" data-intro="This is the your details">
                    <Col sm="6" lg="4" className="order-sm-1 order-xl-0">
                      <Row >
                        <Col md="6">
                          <div className="ttl-info text-left">
                            <h6><i className="fa fa-envelope mr-2"></i>{Email}</h6><span>{MARKJENCOEMAIL}</span>
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="ttl-info text-left ttl-sm-mb-0">
                            <h6><i className="fa fa-calendar"></i>   {BOD}</h6><span>{"02 January 1988"}</span>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm="12" lg="4" className="order-sm-0 order-xl-1">
                      <div className="user-designation">
                        <div className="title"><a target="_blank" href="#javascript">{MarkJecno}</a></div>
                        <div className="desc mt-2">{Designer}</div>
                      </div>
                    </Col>
                    <Col sm="6" lg="4" className="order-sm-2 order-xl-2">
                      <Row>
                        <Col md="6">
                          <div className="ttl-info text-left ttl-xs-mt">
                            <h6><i className="fa fa-phone"></i>   {ContactUs}</h6><span>{"India +91 123-456-7890"}</span>
                          </div>
                        </Col>
                        <Col md="6">
                          <div className="ttl-info text-left ttl-sm-mb-0">
                            <h6><i className="fa fa-location-arrow"></i>   {Location}</h6><span>{"B69 Near Schoool Demo Home"}</span>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <hr />
                  <div className="social-media step4" data-intro="This is your Social details">
                    <ul className="list-inline">
                      <li className="list-inline-item"><a href="#javascript"><i className="fa fa-facebook"></i></a></li>
                      <li className="list-inline-item"><a href="#javascript"><i className="fa fa-google-plus"></i></a></li>
                      <li className="list-inline-item"><a href="#javascript"><i className="fa fa-twitter"></i></a></li>
                      <li className="list-inline-item"><a href="#javascript"><i className="fa fa-instagram"></i></a></li>
                      <li className="list-inline-item"><a href="#javascript"><i className="fa fa-rss"></i></a></li>
                    </ul>
                  </div>
                  <div className="follow">
                    <Row>
                      <Col col="6" className="border-right">
                        <div className="follow-num counter">{"25869"}</div><span>{Follower}</span>
                      </Col>
                      <Col col="6">
                        <div className="follow-num counter">{"659887"}</div><span>{Following}</span>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Col>
            <Col sm="12" >
              <Card className="step5" data-intro="This is the your first Post">
                <div className="profile-img-style">
                  <Row>
                    <Col sm="8">
                      <div className="media"><Media className="img-thumbnail rounded-circle mr-3" src={require("../../assets/images/user/7.jpg")} alt="Generic placeholder image" />
                        <div className="media-body align-self-center">
                          <h5 className="mt-0 user-name">{JOHANDIO}</h5>
                        </div>
                      </div>
                    </Col>
                    <Col sm="4" className="align-self-center">
                      <div className="float-sm-right"><small>{"10 Hours ago"}</small></div>
                    </Col>
                  </Row>
                  <hr />
                  <p>{"you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."}</p>
                  <div className="img-container">
                    <div id="aniimated-thumbnials">
                      <a href="#javascript">
                        <Media className="img-fluid rounded" src={require("../../assets/images/other-images/profile-style-img3.png")} alt="gallery" />
                      </a>
                    </div>
                  </div>
                  <div className="like-comment mt-4">
                    <ul className="list-inline">
                      <li className="list-inline-item border-right pr-3">
                        <label className="m-0"><a href="#javascript"><i className="fa fa-heart"></i></a>  {Like}</label><span className="ml-2 counter">{"2659"}</span>
                      </li>
                      <li className="list-inline-item ml-2">
                        <label className="m-0"><a href="#javascript"><i className="fa fa-comment"></i></a>  {Comment}</label><span className="ml-2 counter">{"569"}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Col>
            <Col sm="12">
              <Card>
                <div className="profile-img-style">
                  <Row>
                    <Col sm="8">
                      <div className="media"><Media className="img-thumbnail rounded-circle mr-3" src={require("../../assets/images/user/7.jpg")} alt="Generic placeholder image" />
                        <div className="media-body align-self-center">
                          <h5 className="mt-0 user-name">{JOHANDIO}</h5>
                        </div>
                      </div>
                    </Col>
                    <Col sm="4" className="align-self-center">
                      <div className="float-sm-right"><small>{"10 Hours ago"}</small></div>
                    </Col>
                  </Row>
                  <hr />
                  <p>{"you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."}</p>
                  <Row className="mt-4 pictures">
                    <a className="col-sm-6" href="#javascript">
                      <Media body className="img-fluid rounded" src={require("../../assets/images/other-images/profile-style-img.png")} alt="gallery" />
                    </a>
                    <a className="col-sm-6" href="#javascript">
                      <Media body className="img-fluid rounded" src={require("../../assets/images/other-images/profile-style-img.png")} alt="gallery" />
                    </a>
                  </Row>
                  <div className="like-comment mt-4">
                    <ul className="list-inline">
                      <li className="list-inline-item border-right pr-3">
                        <label className="m-0"><a href="#javascript"><i className="fa fa-heart"></i></a>  {Like}</label><span className="ml-2 counter">{"2659"}</span>
                      </li>
                      <li className="list-inline-item ml-2">
                        <label className="m-0"><a href="#javascript"><i className="fa fa-comment"></i></a>  {Comment}</label><span className="ml-2 counter">{"569"}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Col>

            <Col sm="12">
              <Card>
                <div className="profile-img-style">
                  <Row>
                    <Col sm="8">
                      <div className="media"><Media className="img-thumbnail rounded-circle mr-3" src={require("../../assets/images/user/7.jpg")} alt="Generic placeholder image" />
                        <div className="media-body align-self-center">
                          <h5 className="mt-0 user-name">{JOHANDIO}</h5>
                        </div>
                      </div>
                    </Col>
                    <Col sm="4" className="align-self-center">
                      <div className="float-sm-right"><small>{"10 Hours ago"}</small></div>
                    </Col>
                  </Row>
                  <hr />
                  <p>{"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source .Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source"}</p>
                  <div className="like-comment mt-4">
                    <ul className="list-inline">
                      <li className="list-inline-item border-right pr-3">
                        <label className="m-0"><a href="#javascript"><i className="fa fa-heart"></i></a>  {Like}</label><span className="ml-2 counter">{"2659"}</span>
                      </li>
                      <li className="list-inline-item ml-2">
                        <label className="m-0"><a href="#javascript"><i className="fa fa-comment"></i></a>  {Comment}</label><span className="ml-2 counter">{"569"}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Col>

            <Col sm="12">
              <Card>
                <div className="profile-img-style">
                  <Row>
                    <Col sm="8">
                      <div className="media"><Media className="img-thumbnail rounded-circle mr-3" src={require("../../assets/images/user/7.jpg")} alt="Generic placeholder image" />
                        <div className="media-body align-self-center">
                          <h5 className="mt-0 user-name">{JOHANDIO}</h5>
                        </div>
                      </div>
                    </Col>
                    <Col sm="4" className="align-self-center">
                      <div className="float-sm-right"><small>{"10 Hours ago"}</small></div>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col lg="12" xl="4">
                      <div id="aniimated-thumbnials-3"><a href="#javascript"><Media body className="img-fluid rounded" src={require("../../assets/images/blog/img.png")} alt="gallery" /></a></div>
                      <div className="like-comment mt-4 like-comment-lg-mb">
                        <ul className="list-inline">
                          <li className="list-inline-item border-right pr-3">
                            <label className="m-0"><a href="#javascript"><i className="fa fa-heart"></i></a>  {Like}</label><span className="ml-2 counter">{"2659"}</span>
                          </li>
                          <li className="list-inline-item ml-2">
                            <label className="m-0"><a href="#javascript"><i className="fa fa-comment"></i></a>  {Comment}</label><span className="ml-2 counter">{"569"}</span>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col xl="6">
                      <p>{"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consecteturContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur"}</p>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>

  );
}

export default Tours;