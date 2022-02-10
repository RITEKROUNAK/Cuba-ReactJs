import React, { useState, Fragment,useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import axios from 'axios'
import Lightbox from "react-image-lightbox";
import { Container, Row, Col, Card, CardHeader, CardBody, Form,  Input, Media, TabContent, TabPane, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink, InputGroup, InputGroupAddon } from 'reactstrap';
import {All,Images,Videos,Settings,Tools,Previous,Next,PortfolioTitle,Audios} from '../../constant'

const Search = (props) => {

  const [images,setImage] = useState([]) 
  const [smallImages,setsmallImages] = useState([])
  const [activeTab, setActiveTab] = useState('1');

  useEffect(() => {

    axios.get(`${process.env.PUBLIC_URL}/api/image-light.json`).then((response) => {
        setImage(response.data.src);
    })

    axios.get(`${process.env.PUBLIC_URL}/api/image-big-light.json`).then((response) => {
        setsmallImages(response.data.src);
    })

  },[])

  const initilindex = {index:0,isOpen:false}
  const[photoIndex,setPhotoIndex] = useState(initilindex)
  
  const onMovePrev = () => {
      const prev = (photoIndex.index + images.length - 1) % images.length
      setPhotoIndex({...photoIndex,index:prev})
  }
  const  onMoveNext = () => {
      const next = (photoIndex.index + 1) % images.length
      setPhotoIndex({...photoIndex,index:next})
  }

  return (
    <Fragment>
      <Breadcrumb parent="Pages" title="Search Page" />
      <Container fluid={true} className="search-page">
        <Row>
          {smallImages.length > 0 ? 
          <Col sm="12">
            <Card>
              <CardHeader className="bg-light-primary">
                <Form className="theme-form">
                  <InputGroup className="m-0">
                    <Input className="form-control-plaintext" type="search" placeholder="Pixelstrap .."/>
                    <InputGroupAddon addonType="append"><span className="btn btn-primary">{"Search"}</span></InputGroupAddon>
                  </InputGroup>
                </Form>
              </CardHeader>
              <CardBody>
                <div className="text-center">
                <Nav tabs className="search-list">
                  <NavItem>
                    <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                      <i className="icon-target"></i>{All}
                      </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                      <i className="icon-image"></i>{Images}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                      <i className="icon-video-clapper"></i>{Videos}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                        <i className="icon-map-alt"></i>{Audios}
                    </NavLink>
                  </NavItem>
                  <NavItem className="bg-light-success">
                    <NavLink className={`txt-success ${activeTab === '5' ? 'active' : ''}`} onClick={() => setActiveTab('5')}>
                        <i className="icon-settings"></i>{Settings}
                    </NavLink>
                  </NavItem >
                  <NavItem className="bg-light-secondary">
                    <NavLink className={`txt-secondary ${activeTab === '6' ? 'active' : ''}`} onClick={() => setActiveTab('6')}>
                        <i className="icon-settings"></i>{Tools}
                    </NavLink>
                  </NavItem>
                </Nav>
                </div>
                <TabContent activeTab={activeTab}>
                <TabPane tabId="1" className="search-links fade show">
                    <Row>
                      <Col xl="8" className="box-col-12">
                        <h6 className="mb-2">{"Search result for 'Pixelstrap'"}</h6>
                        <div className="info-block"><a href="#javascript">{"https://themeforest.net/user/pixelstrap/portfolio/"}</a>
                          <h6>{"PixelStrap - Portfolio | ThemeForest"}</h6>
                          <p>{"2020's Best Selling Creative WP Themes. The #1 Source of Premium WP Themes! ThemeForest 45,000+ WP Themes & Website Templates From $2. Check it Out! "}</p>
                          <div className="star-ratings">
                            <ul className="search-info">
                              <li>{"3 stars"}</li>
                              <li>{"590 votes"}</li>
                              <li>{"Theme"}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="info-block"><a href="#javascript">{"PixelStrap - Portfolio | ThemeForestthemeforest.net › user › "}</a>
                          <h6>{"PixelStrap - Portfolio | ThemeForest"}</h6>
                          <p>{"The #1 marketplace for premium website templates, including themes for WordPress, Magento, Drupal, Joomla, and more. Create a website, fast."}</p>
                          <div className="star-ratings">
                            <ul className="search-info">
                              <li>{"3 stars"}</li>
                              <li>{"590 votes"}</li>
                              <li>{"Theme"}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="info-block"><a href="#javascript">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                          <h6>{"Morbi feugiat mauris vel semper fringilla."}</h6>
                          <p>{"Cuba introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat."}</p>
                          <div className="star-ratings">
                            <ul className="search-info">
                              <li><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rate-blank"></i><i className="icofont icofont-ui-rate-blank"></i></li>
                              <li>{"3 stars"}</li>
                              <li>{"590 votes"}</li>
                              <li>{"Theme"}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="info-block"><a href="#javascript">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                          <h6>{"Morbi feugiat mauris vel semper fringilla."}</h6>
                          <p>{"Cuba introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat."}</p>
                          <div className="star-ratings">
                            <ul className="search-info">
                              <li><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rate-blank"></i><i className="icofont icofont-ui-rate-blank"></i></li>
                              <li>{"3 stars"}</li>
                              <li>{"590 votes"}</li>
                              <li>{"Theme"}</li>
                            </ul>
                          </div>
                        </div>
                      </Col>
                      <Col xl="4"  className="box-col-12 mt-4">
                        <div className="card lg-mt o-hidden">
                          <div className="blog-box blog-shadow"><img className="img-fluid" src={require("../../assets/images/blog/blog.jpg")} alt=""/>
                            <div className="blog-details">
                              <p>{"25 July 2018"}</p>
                              <h4>{"Accusamus et iusto odio dignissimos ducimus qui blanditiis."}</h4>
                              <ul className="blog-social">
                                <li><i className="icofont icofont-user"></i>{"Mark Jecno"}</li>
                                <li><i className="icofont icofont-thumbs-up"></i>{"02 Hits"}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="info-block"><a href="#javascript">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                          <h6>{"Pixelstrap Website Templates from       ThemeForest"}                                  </h6>
                          <p>{"Get 59 pixelstrap website templates on ThemeForest. Buy pixelstrap website templates from $7. All created by our Global Community of independent Web ..."}</p>
                          <div className="star-ratings">
                            <ul className="search-info">
                              <li><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rate-blank"></i><i className="icofont icofont-ui-rate-blank"></i></li>
                              <li>{"3 stars"}</li>
                              <li>{"590 votes"}</li>
                              <li>{"Theme"}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="info-block"><a href="#javascript">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                          <h6>{"Morbi feugiat mauris vel semper fringilla."}</h6>
                          <p>{"Cuba introduces a IELTS Coaching, TOEFL Coaching, GRE Coaching, GMAT Coaching, SAT Coaching in Surat."}</p>
                          <div className="star-ratings">
                            <ul className="search-info">
                              <li><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rating"></i><i className="icofont icofont-ui-rate-blank"></i><i className="icofont icofont-ui-rate-blank"></i></li>
                              <li>{"3 stars"}</li>
                              <li>{"590 votes"}</li>
                              <li>{"Theme"}</li>
                            </ul>
                          </div>
                        </div>
                      </Col>
                      <Col xs="12" className="m-t-30">
                      <Nav>
                        <Pagination className="pagination-primary">
                          <PaginationItem disabled>
                            <PaginationLink href="#javascript">{Previous}</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#javascript">{"1"}</PaginationLink>
                          </PaginationItem>
                          <PaginationItem active>
                            <PaginationLink href="#javascript">{"2"}<span className="sr-only">{"(current)"}</span></PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#javascript">{"3"}</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#javascript">{Next}</PaginationLink>
                          </PaginationItem>
                        </Pagination>
                        </Nav>
                      </Col>
                    </Row>
                </TabPane>

                <TabPane tabId="2">
                  <div>
                    <h6 className="mb-2">{"About 12,120 results (0.50 seconds)"}</h6>
                    <div className="my-gallery row gallery-with-description" id="aniimated-thumbnials">
                      <figure className="col-xl-3 col-sm-6" itemProp="associatedMedia"><a href="#javascript" data-size="1600x950">
                        <Media
                          src={require(`../../assets/images/${smallImages[0]}`)}
                          alt="Gallery"
                          className="img-thumbnail"
                          onClick={() =>
                            setPhotoIndex({ ...photoIndex, index: 0, isOpen: true })
                          }
                        />
                        <div className="caption">
                          <h4>{PortfolioTitle}</h4>
                          <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                        </div></a>
                        
                      </figure>
                      <figure className="col-xl-3 col-sm-6" itemProp="associatedMedia" itemScope=""><a href="#javascript" itemProp="contentUrl" data-size="1600x950">
                        <Media
                          src={require(`../../assets/images/${smallImages[1]}`)}
                          alt="Gallery"
                          className="img-thumbnail"
                          onClick={() =>
                            setPhotoIndex({ ...photoIndex, index: 1, isOpen: true })
                          }
                        />
                        <div className="caption">
                          <h4>{PortfolioTitle}</h4>
                          <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                        </div></a>
                        
                      </figure>
                      <figure className="col-xl-3 col-sm-6" itemProp="associatedMedia" itemScope=""><a href="#javascript" itemProp="contentUrl" data-size="1600x950">
                        <Media
                          src={require(`../../assets/images/${smallImages[2]}`)}
                          alt="Gallery"
                          className="img-thumbnail"
                          onClick={() =>
                            setPhotoIndex({ ...photoIndex, index: 2, isOpen: true })
                          }
                        />
                        <div className="caption">
                          <h4>{PortfolioTitle}</h4>
                          <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                        </div></a>
                        
                      </figure>
                      <figure className="col-xl-3 col-sm-6" itemProp="associatedMedia" itemScope=""><a href="#javascript" itemProp="contentUrl" data-size="1600x950">
                        <Media
                          src={require(`../../assets/images/${smallImages[3]}`)}
                          alt="Gallery"
                          className="img-thumbnail"
                          onClick={() =>
                            setPhotoIndex({ ...photoIndex, index: 3, isOpen: true })
                          }
                        />
                        <div className="caption">
                          <h4>{PortfolioTitle}</h4>
                          <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                        </div></a>
                        
                      </figure>
                      <figure className="col-xl-3 col-sm-6" itemProp="associatedMedia" itemScope=""><a href="#javascript" itemProp="contentUrl" data-size="1600x950">
                        <Media
                          src={require(`../../assets/images/${smallImages[4]}`)}
                          alt="Gallery"
                          className="img-thumbnail"
                          onClick={() =>
                            setPhotoIndex({ ...photoIndex, index: 4, isOpen: true })
                          }
                        />
                        <div className="caption">
                          <h4>{PortfolioTitle}</h4>
                          <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                        </div></a>
                        
                      </figure>
                      <figure className="col-xl-3 col-sm-6" itemProp="associatedMedia" itemScope=""><a href="#javascript" itemProp="contentUrl" data-size="1600x950">
                        <Media
                          src={require(`../../assets/images/${smallImages[5]}`)}
                          alt="Gallery"
                          className="img-thumbnail"
                          onClick={() =>
                            setPhotoIndex({ ...photoIndex, index: 5, isOpen: true })
                          }
                        />
                        <div className="caption">
                          <h4>{PortfolioTitle}</h4>
                          <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                        </div></a>
                        
                      </figure>
                      <figure className="col-xl-3 col-sm-6" itemProp="associatedMedia" itemScope=""><a href="#javascript" itemProp="contentUrl" data-size="1600x950">
                        <Media
                          src={require(`../../assets/images/${smallImages[6]}`)}
                          alt="Gallery"
                          className="img-thumbnail"
                          onClick={() =>
                            setPhotoIndex({ ...photoIndex, index: 6, isOpen: true })
                          }
                        />
                        <div className="caption">
                          <h4>{PortfolioTitle}</h4>
                          <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                        </div></a>
                        
                      </figure>
                      <figure className="col-xl-3 col-sm-6" itemProp="associatedMedia" itemScope=""><a href="#javascript" itemProp="contentUrl" data-size="1600x950">
                        <Media
                          src={require(`../../assets/images/${smallImages[7]}`)}
                          alt="Gallery"
                          className="img-thumbnail"
                          onClick={() =>
                            setPhotoIndex({ ...photoIndex, index: 7, isOpen: true })
                          }
                        />
                        <div className="caption">
                          <h4>{PortfolioTitle}</h4>
                          <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                        </div></a>
                        
                      </figure>
                    </div>

                  </div>
                  <div className="info-block">
                    <Pagination className="pagination-primary">
                      <PaginationItem disabled>
                        <PaginationLink href="#javascript">{Previous}</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#javascript">{"1"}</PaginationLink>
                      </PaginationItem>
                      <PaginationItem active>
                        <PaginationLink href="#javascript">{"2"}</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#javascript">{"3"}</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#javascript">{Next}</PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </div>
                </TabPane>
                
                <TabPane tabId="3">
                  <Row>
                    <Col xl="6">
                      <h6 className="mb-2">{"About 6,000 results (0.60 seconds)"}</h6>
                      <Media className="info-block">
                        <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/CJnfAXlBRTE" title="myFrame"></iframe>
                        <Media body>
                          <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                          <h6>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}</h6>
                          
                          <div className="star-ratings">
                            <ul className="search-info">
                              <li>{"3 stars"}</li>
                              <li>{"590 votes"}</li>
                              <li>{"Theme"}</li>
                            </ul>
                          </div>
                        </Media>
                      </Media>
                      <Media className="info-block">
                        <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/-L4gEk7cOfk" title="myFrame"></iframe>
                        <Media body>
                          <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                          <h6>{"Lorem Ipsum is simply dummy text of the printing."}</h6>
                          
                          <div className="star-ratings">
                            <ul className="search-info">
                              <li>{"3 stars"}</li>
                              <li>{"590 votes"}</li>
                              <li>{"Theme"}</li>
                            </ul>
                          </div>
                        </Media>
                      </Media>
                      <Media className="info-block">
                        <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/wpmHZspl4EM" title="myFrame"></iframe>
                        <Media body>
                          <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                          <h6>{"Morbi eget quam et purus commodo dapibus."}</h6>
                          
                          <div className="star-ratings">
                            <ul className="search-info">
                              <li>{"3 stars"}</li>
                              <li>{"590 votes"}</li>
                              <li>{"Theme"}</li>
                            </ul>
                          </div>
                        </Media>
                      </Media>
                    
                    </Col>
                    <Col xl="6">
                    <p className="pb-4">{"About 6,000 results (0.60 seconds)"}</p>
                      <Media className="info-block">
                        <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/CJnfAXlBRTE" title="myFrame"></iframe>
                        <Media body>
                          <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                          <h6>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}</h6>
                          
                          <div className="star-ratings">
                            <ul className="search-info">
                              <li>{"3 stars"}</li>
                              <li>{"590 votes"}</li>
                              <li>{"Theme"}</li>
                            </ul>
                          </div>
                        </Media>
                      </Media>
                      <Media className="info-block">
                        <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/-L4gEk7cOfk" title="myFrame"></iframe>
                        <Media body>
                          <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                          <h6>{"Lorem Ipsum is simply dummy text of the printing."}</h6>
                          
                          <div className="star-ratings">
                            <ul className="search-info">
                              <li>{"3 stars"}</li>
                              <li>{"590 votes"}</li>
                              <li>{"Theme"}</li>
                            </ul>
                          </div>
                        </Media>
                      </Media>
                      <Media className="info-block">
                        <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/wpmHZspl4EM" title="myFrame"></iframe>
                        <Media body>
                          <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                          <h6>{"Morbi eget quam et purus commodo dapibus."}</h6>
                          
                          <div className="star-ratings">
                            <ul className="search-info">
                              <li>{"3 stars"}</li>
                              <li>{"590 votes"}</li>
                              <li>{"Theme"}</li>
                            </ul>
                          </div>
                        </Media>
                      </Media>
                    
                    </Col>
                    <Col xl="12"  className="m-t-30">  
                      <Nav>
                          <Pagination className="pagination-primary">
                            <PaginationItem disabled>
                              <PaginationLink href="#javascript">{Previous}</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink href="#javascript">{"1"}</PaginationLink>
                            </PaginationItem>
                            <PaginationItem active>
                              <PaginationLink href="#javascript">{"2"}</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink href="#javascript">{"3"}</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink href="#javascript">{Next}</PaginationLink>
                            </PaginationItem>
                          </Pagination>
                        </Nav>
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tabId="4">
                < Row>
                  <Col xl="6">
                    <h6 className="mb-2">{"About 6,000 results (0.60 seconds)"}</h6>
                    <Media className="info-block">
                      <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/CJnfAXlBRTE" title="myFrame"></iframe>
                      <Media body>
                        <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                        <h6>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}</h6>
                        
                        <div className="star-ratings">
                          <ul className="search-info">
                            <li>{"3 stars"}</li>
                            <li>{"590 votes"}</li>
                            <li>{"Theme"}</li>
                          </ul>
                        </div>
                      </Media>
                    </Media>
                    <Media className="info-block">
                      <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/-L4gEk7cOfk" title="myFrame"></iframe>
                      <Media body>
                        <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                        <h6>{"Lorem Ipsum is simply dummy text of the printing."}</h6>
                        
                        <div className="star-ratings">
                          <ul className="search-info">
                            <li>{"3 stars"}</li>
                            <li>{"590 votes"}</li>
                            <li>{"Theme"}</li>
                          </ul>
                        </div>
                      </Media>
                    </Media>
                    <Media className="info-block">
                      <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/wpmHZspl4EM" title="myFrame"></iframe>
                      <Media body>
                        <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                        <h6>{"Morbi eget quam et purus commodo dapibus."}</h6>
                        
                        <div className="star-ratings">
                          <ul className="search-info">
                            <li>{"3 stars"}</li>
                            <li>{"590 votes"}</li>
                            <li>{"Theme"}</li>
                          </ul>
                        </div>
                      </Media>
                    </Media>
                  
                  </Col>
                  <Col xl="6">
                  <p className="pb-4">{"About 6,000 results (0.60 seconds)"}</p>
                    <Media className="info-block">
                      <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/CJnfAXlBRTE" title="myFrame"></iframe>
                      <Media body>
                        <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                        <h6>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}</h6>
                        
                        <div className="star-ratings">
                          <ul className="search-info">
                            <li>{"3 stars"}</li>
                            <li>{"590 votes"}</li>
                            <li>{"Theme"}</li>
                          </ul>
                        </div>
                      </Media>
                    </Media>
                    <Media className="info-block">
                      <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/-L4gEk7cOfk" title="myFrame"></iframe>
                      <Media body>
                        <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                        <h6>{"Lorem Ipsum is simply dummy text of the printing."}</h6>
                        
                        <div className="star-ratings">
                          <ul className="search-info">
                            <li>{"3 stars"}</li>
                            <li>{"590 votes"}</li>
                            <li>{"Theme"}</li>
                          </ul>
                        </div>
                      </Media>
                    </Media>
                    <Media className="info-block">
                      <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/wpmHZspl4EM" title="myFrame"></iframe>
                      <Media body>
                        <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                        <h6>{"Morbi eget quam et purus commodo dapibus."}</h6>
                        
                        <div className="star-ratings">
                          <ul className="search-info">
                            <li>{"3 stars"}</li>
                            <li>{"590 votes"}</li>
                            <li>{"Theme"}</li>
                          </ul>
                        </div>
                      </Media>
                    </Media>
                  
                  </Col>
                  <Col xl="12"  className="m-t-30">  
                    <Nav>
                        <Pagination className="pagination-primary">
                          <PaginationItem disabled>
                            <PaginationLink href="#javascript">{Previous}</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#javascript">{"1"}</PaginationLink>
                          </PaginationItem>
                          <PaginationItem active>
                            <PaginationLink href="#javascript">{"2"}</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#javascript">{"3"}</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#javascript">{Next}</PaginationLink>
                          </PaginationItem>
                        </Pagination>
                      </Nav>
                  </Col>
                </Row>
                </TabPane>

                <TabPane tabId="5">
                  <Row>
                  <Col xl="6">
                    <h6 className="mb-2">{"About 6,000 results (0.60 seconds)"}</h6>
                    <Media className="info-block">
                      <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/CJnfAXlBRTE" title="myFrame"></iframe>
                      <Media body>
                        <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                        <h6>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}</h6>
                        
                        <div className="star-ratings">
                          <ul className="search-info">
                            <li>{"3 stars"}</li>
                            <li>{"590 votes"}</li>
                            <li>{"Theme"}</li>
                          </ul>
                        </div>
                      </Media>
                    </Media>
                    <Media className="info-block">
                      <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/-L4gEk7cOfk" title="myFrame"></iframe>
                      <Media body>
                        <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                        <h6>{"Lorem Ipsum is simply dummy text of the printing."}</h6>
                        
                        <div className="star-ratings">
                          <ul className="search-info">
                            <li>{"3 stars"}</li>
                            <li>{"590 votes"}</li>
                            <li>{"Theme"}</li>
                          </ul>
                        </div>
                      </Media>
                    </Media>
                    <Media className="info-block">
                      <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/wpmHZspl4EM" title="myFrame"></iframe>
                      <Media body>
                        <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                        <h6>{"Morbi eget quam et purus commodo dapibus."}</h6>
                        
                        <div className="star-ratings">
                          <ul className="search-info">
                            <li>{"3 stars"}</li>
                            <li>{"590 votes"}</li>
                            <li>{"Theme"}</li>
                          </ul>
                        </div>
                      </Media>
                    </Media>
                  
                  </Col>
                  <Col xl="6">
                  <p className="pb-4">{"About 6,000 results (0.60 seconds)"}</p>
                    <Media className="info-block">
                      <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/CJnfAXlBRTE" title="myFrame"></iframe>
                      <Media body>
                        <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                        <h6>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}</h6>
                        
                        <div className="star-ratings">
                          <ul className="search-info">
                            <li>{"3 stars"}</li>
                            <li>{"590 votes"}</li>
                            <li>{"Theme"}</li>
                          </ul>
                        </div>
                      </Media>
                    </Media>
                    <Media className="info-block">
                      <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/-L4gEk7cOfk" title="myFrame"></iframe>
                      <Media body>
                        <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                        <h6>{"Lorem Ipsum is simply dummy text of the printing."}</h6>
                        
                        <div className="star-ratings">
                          <ul className="search-info">
                            <li>{"3 stars"}</li>
                            <li>{"590 votes"}</li>
                            <li>{"Theme"}</li>
                          </ul>
                        </div>
                      </Media>
                    </Media>
                    <Media className="info-block">
                      <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/wpmHZspl4EM" title="myFrame"></iframe>
                      <Media body>
                        <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                        <h6>{"Morbi eget quam et purus commodo dapibus."}</h6>
                        
                        <div className="star-ratings">
                          <ul className="search-info">
                            <li>{"3 stars"}</li>
                            <li>{"590 votes"}</li>
                            <li>{"Theme"}</li>
                          </ul>
                        </div>
                      </Media>
                    </Media>
                  
                  </Col>
                  <Col xl="12"  className="m-t-30">  
                    <Nav>
                        <Pagination className="pagination-primary">
                          <PaginationItem disabled>
                            <PaginationLink href="#javascript">{Previous}</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#javascript">{"1"}</PaginationLink>
                          </PaginationItem>
                          <PaginationItem active>
                            <PaginationLink href="#javascript">{"2"}</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#javascript">{"3"}</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#javascript">{Next}</PaginationLink>
                          </PaginationItem>
                        </Pagination>
                      </Nav>
                  </Col>
                </Row>
                </TabPane>

                <TabPane tabId="6">
                  <Row>
                  <Col xl="6">
                    <h6 className="mb-2">{"About 6,000 results (0.60 seconds)"}</h6>
                    <Media className="info-block">
                      <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/CJnfAXlBRTE" title="myFrame"></iframe>
                      <Media body>
                        <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                        <h6>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}</h6>
                        
                        <div className="star-ratings">
                          <ul className="search-info">
                            <li>{"3 stars"}</li>
                            <li>{"590 votes"}</li>
                            <li>{"Theme"}</li>
                          </ul>
                        </div>
                      </Media>
                    </Media>
                    <Media className="info-block">
                      <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/-L4gEk7cOfk" title="myFrame"></iframe>
                      <Media body>
                        <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                        <h6>{"Lorem Ipsum is simply dummy text of the printing."}</h6>
                        
                        <div className="star-ratings">
                          <ul className="search-info">
                            <li>{"3 stars"}</li>
                            <li>{"590 votes"}</li>
                            <li>{"Theme"}</li>
                          </ul>
                        </div>
                      </Media>
                    </Media>
                    <Media className="info-block">
                      <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/wpmHZspl4EM" title="myFrame"></iframe>
                      <Media body>
                        <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                        <h6>{"Morbi eget quam et purus commodo dapibus."}</h6>
                        
                        <div className="star-ratings">
                          <ul className="search-info">
                            <li>{"3 stars"}</li>
                            <li>{"590 votes"}</li>
                            <li>{"Theme"}</li>
                          </ul>
                        </div>
                      </Media>
                    </Media>
                  
                  </Col>
                  <Col xl="6">
                  <p className="pb-4">{"About 6,000 results (0.60 seconds)"}</p>
                    <Media className="info-block">
                      <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/CJnfAXlBRTE" title="myFrame"></iframe>
                      <Media body>
                        <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                        <h6>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}</h6>
                        
                        <div className="star-ratings">
                          <ul className="search-info">
                            <li>{"3 stars"}</li>
                            <li>{"590 votes"}</li>
                            <li>{"Theme"}</li>
                          </ul>
                        </div>
                      </Media>
                    </Media>
                    <Media className="info-block">
                      <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/-L4gEk7cOfk" title="myFrame"></iframe>
                      <Media body>
                        <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                        <h6>{"Lorem Ipsum is simply dummy text of the printing."}</h6>
                        
                        <div className="star-ratings">
                          <ul className="search-info">
                            <li>{"3 stars"}</li>
                            <li>{"590 votes"}</li>
                            <li>{"Theme"}</li>
                          </ul>
                        </div>
                      </Media>
                    </Media>
                    <Media className="info-block">
                      <iframe className="mr-3" width="200" height="100" src="https://www.youtube.com/embed/wpmHZspl4EM" title="myFrame"></iframe>
                      <Media body>
                        <a href="https://themeforest.net/user/pixelstrap/portfolio">{"https://themeforest.net/user/pixelstrap/portfolio"}</a>
                        <h6>{"Morbi eget quam et purus commodo dapibus."}</h6>
                        
                        <div className="star-ratings">
                          <ul className="search-info">
                            <li>{"3 stars"}</li>
                            <li>{"590 votes"}</li>
                            <li>{"Theme"}</li>
                          </ul>
                        </div>
                      </Media>
                    </Media>
                  
                  </Col>
                  <Col xl="12"  className="m-t-30">  
                    <Nav>
                        <Pagination className="pagination-primary">
                          <PaginationItem disabled>
                            <PaginationLink href="#javascript">{Previous}</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#javascript">{"1"}</PaginationLink>
                          </PaginationItem>
                          <PaginationItem active>
                            <PaginationLink href="#javascript">{"2"}</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#javascript">{"3"}</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#javascript">{Next}</PaginationLink>
                          </PaginationItem>
                        </Pagination>
                      </Nav>
                  </Col>
                </Row>
                </TabPane>
              </TabContent>
              </CardBody>
            </Card>
          </Col>
          :""}
        </Row>
      </Container>
      {photoIndex.isOpen && (
          <Lightbox
              mainSrc={require(`../../assets/images/${images[photoIndex.index]}`)}
              nextSrc={require(`../../assets/images/${images[(photoIndex.index + 1) % images.length]}`)}
              prevSrc={require(`../../assets/images/${images[(photoIndex.index + images.length - 1) % images.length]}`)}
              imageTitle={photoIndex.index + 1 + "/" + images.length}
              onCloseRequest={() => setPhotoIndex({ ...photoIndex,isOpen:false})}
              onMovePrevRequest={onMovePrev}
              onMoveNextRequest={onMoveNext}
          />
      )}
    </Fragment>
  );
}

export default Search;