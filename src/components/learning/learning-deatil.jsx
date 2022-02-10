import React, { Fragment} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import LearningFilter from './learning-filter';
import {Container,Row,Col,Media} from 'reactstrap'
import { Comment,JolioMark } from "../../constant";

const LearningDeatil = (props) => {
    return (
        <Fragment>
          <Breadcrumb parent="Learning" title="Detailed Course"/>
            <Container fluid={true}>
            <Row>
              <Col xl="9 xl-60">
                <div className="blog-single">
                  <div className="blog-box blog-details"><Media className="img-fluid w-100" src={require("../../assets/images/faq/learning-1.png")} alt="blog-main"/>
                    <div className="blog-details">
                      <ul className="blog-social">
                        <li className="digits">{"25 July 2019"}</li>
                        <li><i className="icofont icofont-user"></i>{"Mark"} <span>{"Jecno"} </span></li>
                        <li className="digits"><i className="icofont icofont-thumbs-up"></i>{"02"}<span>{"Hits"}</span></li>
                        <li className="digits"><i className="icofont icofont-ui-chat"></i>{"598 Comments"}</li>
                      </ul>
                      <h4>
                        {"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."}
                      </h4>
                      <div className="single-blog-content-top">
                        <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}</p>
                        <p>{"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"}</p>
                      </div>
                    </div>
                  </div>
                  <section className="comment-box">
                    <h4>{Comment}</h4>
                    <hr/>
                    <ul>
                      <li>
                        <Media className="align-self-center"><Media className="align-self-center" src={require("../../assets/images/blog/comment.jpg")} alt=""/>
                          <Media body>
                            <Row>
                              <Col md="4 xl-100">
                                <h6 className="mt-0">{JolioMark}<span> {"( Designer )"}</span></h6>
                              </Col>
                              <Col md="8 xl-100">
                                <ul className="comment-social float-left float-md-right learning-comment">
                                  <li className="digits"><i className="icofont icofont-thumbs-up"></i>{"02 Hits"}</li>
                                  <li className="digits"><i className="icofont icofont-ui-chat"></i>{"598 Comments"}</li>
                                </ul>
                              </Col>
                            </Row>
                            <p>{"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}</p>
                          </Media>
                        </Media>
                      </li>
                      <li>
                        <ul>
                          <li>
                            <Media><Media className="align-self-center" src={require("../../assets/images/blog/9.jpg")} alt=""/>
                              <Media body>
                                <Row>
                                  <Col xl="12">
                                    <h6 className="mt-0">{JolioMark}<span> {"( Designer )"}</span></h6>
                                  </Col>
                                </Row>
                                <p>{"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}</p>
                              </Media>
                            </Media>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Media><Media className="align-self-center" src={require("../../assets/images/blog/4.jpg")} alt=""/>
                          <Media body>
                            <Row>
                              <Col md="4 xl-100">
                                <h6 className="mt-0">{JolioMark}<span> {"( Designer )"}</span></h6>
                              </Col>
                              <Col md="8 xl-100">
                                <ul className="comment-social float-left float-md-right learning-comment">
                                  <li className="digits"><i className="icofont icofont-thumbs-up"></i>{"02 Hits"}</li>
                                  <li className="digits"><i className="icofont icofont-ui-chat"></i>{"598 Comments"}</li>
                                </ul>
                              </Col>
                            </Row>
                            <p>{"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}</p>
                          </Media>
                        </Media>
                      </li>
                    </ul>
                  </section>
                </div>
              </Col>
              <LearningFilter/>
          </Row>
          </Container>
        </Fragment>
    );
};

export default LearningDeatil;