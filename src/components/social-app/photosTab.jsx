import React, { Fragment ,useState,useEffect } from 'react';
import {Col,Row,Card,CardBody,Media} from 'reactstrap'
import Lightbox from "react-image-lightbox";
import axios from 'axios'
import { PortfolioTitle } from "../../constant";



const PhotosTab = () => {

    const [images,setImage] = useState([]) 
    const [smallImages,setsmallImages] = useState([])   

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

    useEffect(() => {

        axios.get(`${process.env.PUBLIC_URL}/api/image-light.json`).then((response) => {
            setImage(response.data.src);
        })

        axios.get(`${process.env.PUBLIC_URL}/api/image-big-light.json`).then((response) => {
            setsmallImages(response.data.src);
        })

    },[])
    
    return (
        <Fragment>
            <Row>
                {smallImages.length > 0 ?
                <Col sm="12">
                    <Card>
                        <CardBody className="my-gallery row gallery-with-description">
                            <figure className="col-xl-3 col-sm-6"><a href="#javascript"  data-size="1600x950">
                                <Media
                                    src={require(`../../assets/images/${smallImages[0]}`)}
                                    alt="Gallery"
                                    className="img-thumbnail"
                                    onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:0, isOpen:true})
                                    }
                                />
                                <div className="caption">
                                    <h4>{PortfolioTitle}</h4>
                                    <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                </div></a>
                            </figure>
                            <figure className="col-xl-3 col-sm-6"><a href="#javascript"  data-size="1600x950">
                                <Media
                                    src={require(`../../assets/images/${smallImages[1]}`)}
                                    alt="Gallery"
                                    className="img-thumbnail"
                                    onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:1, isOpen:true})
                                }
                                />
                                <div className="caption">
                                    <h4>{PortfolioTitle}</h4>
                                    <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                </div></a>
                            </figure>
                            <figure className="col-xl-3 col-sm-6"><a href="#javascript"  data-size="1600x950">
                                <Media
                                    src={require(`../../assets/images/${smallImages[2]}`)}
                                    alt="Gallery"
                                    className="img-thumbnail"
                                    onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:2, isOpen:true})
                                }
                                />
                                <div className="caption">
                                    <h4>{PortfolioTitle}</h4>
                                    <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                </div></a>
                            </figure>
                            <figure className="col-xl-3 col-sm-6"><a href="#javascript"  data-size="1600x950">
                                <Media
                                    src={require(`../../assets/images/${smallImages[3]}`)}
                                    alt="Gallery"
                                    className="img-thumbnail"
                                    onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:3, isOpen:true})
                                }
                                />
                                <div className="caption">
                                    <h4>{PortfolioTitle}</h4>
                                    <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                </div></a>
                            </figure>
                            <figure className="col-xl-3 col-sm-6"><a href="#javascript"  data-size="1600x950">
                                <Media
                                    src={require(`../../assets/images/${smallImages[4]}`)}
                                    alt="Gallery"
                                    className="img-thumbnail"
                                    onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:4, isOpen:true})
                                }
                                />
                                <div className="caption">
                                    <h4>{PortfolioTitle}</h4>
                                    <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                </div></a>
                            </figure>
                            <figure className="col-xl-3 col-sm-6"><a href="#javascript"  data-size="1600x950">
                                <Media
                                    src={require(`../../assets/images/${smallImages[5]}`)}
                                    alt="Gallery"
                                    className="img-thumbnail"
                                    onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:5, isOpen:true})
                                }
                                />
                                <div className="caption">
                                    <h4>{PortfolioTitle}</h4>
                                    <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                </div></a>
                            </figure>
                            <figure className="col-xl-3 col-sm-6"><a href="#javascript"  data-size="1600x950">
                                <Media
                                    src={require(`../../assets/images/${smallImages[6]}`)}
                                    alt="Gallery"
                                    className="img-thumbnail"
                                    onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:6, isOpen:true})
                                }
                                />
                                <div className="caption">
                                    <h4>{PortfolioTitle}</h4>
                                    <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                </div></a>
                            </figure>
                            <figure className="col-xl-3 col-sm-6"><a href="#javascript"  data-size="1600x950">
                                <Media
                                    src={require(`../../assets/images/${smallImages[7]}`)}
                                    alt="Gallery"
                                    className="img-thumbnail"
                                    onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:7, isOpen:true})
                                }
                                />
                                <div className="caption">
                                    <h4>{PortfolioTitle}</h4>
                                    <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                </div></a>
                            </figure>
                            <figure className="col-xl-3 col-sm-6"><a href="#javascript"  data-size="1600x950">
                                <Media
                                    src={require(`../../assets/images/${smallImages[8]}`)}
                                    alt="Gallery"
                                    className="img-thumbnail"
                                    onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:8, isOpen:true})
                                }
                                />
                                <div className="caption">
                                    <h4>{PortfolioTitle}</h4>
                                    <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                </div></a>
                            </figure>
                            <figure className="col-xl-3 col-sm-6"><a href="#javascript"  data-size="1600x950">
                                <Media
                                    src={require(`../../assets/images/${smallImages[9]}`)}
                                    alt="Gallery"
                                    className="img-thumbnail"
                                    onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:9, isOpen:true})
                                }
                                />
                                <div className="caption">
                                    <h4>{PortfolioTitle}</h4>
                                    <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                </div></a>
                            </figure>
                            <figure className="col-xl-3 col-sm-6"><a href="#javascript"  data-size="1600x950">
                                <Media
                                    src={require(`../../assets/images/${smallImages[10]}`)}
                                    alt="Gallery"
                                    className="img-thumbnail"
                                    onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:10, isOpen:true})
                                }
                                    />
                                <div className="caption">
                                    <h4>{PortfolioTitle}</h4>
                                    <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                </div></a>
                            </figure>
                            <figure className="col-xl-3 col-sm-6"><a href="#javascript"  data-size="1600x950">
                                <Media
                                    src={require(`../../assets/images/${smallImages[11]}`)}
                                    alt="Gallery"
                                    className="img-thumbnail"
                                    onClick={() =>
                                    setPhotoIndex({ ...photoIndex,index:11, isOpen:true})
                                }
                                 />
                                <div className="caption">
                                    <h4>{PortfolioTitle}</h4>
                                    <p>{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."}</p>
                                </div></a>
                            </figure>
                        </CardBody>
                    </Card>
                </Col>
                :""}
           </Row>
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
};

export default PhotosTab;