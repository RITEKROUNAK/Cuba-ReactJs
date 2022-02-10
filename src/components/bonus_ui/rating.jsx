import React, { useState, Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import Rating from 'react-rating'
import {StarRating,HeartRating,ThumbsUpDownRating,PillRating} from '../../constant'

const Ratingss = (props) => {

  const [rating, setRating] = useState(5)
  const [heart, setHeart] = useState(0)
  const [thumbs, setThumbs] = useState(0)

  return (
    <Fragment>
      <Breadcrumb parent="Bouns Ui" title="Rating" />
      <Container fluid={true}>
        <Row>
          <Col xl="6" lg="12" md="6">
            <Card>
              <CardHeader>
                <h5><span className="digits"></span>{StarRating}</h5>
              </CardHeader>
              <CardBody>
                <Row className="rating">
                  <Col sm="8">
                    <Rating
                      initialRating={rating}
                      emptySymbol="fa fa-star-o fa-2x"
                      fullSymbol="fa fa-star fa-2x"
                      onChange={(rate) => setRating(rate)}
                    >
                    </Rating>
                  </Col>
                  <Col sm="4">
                    <h6 className="mb-0 text-right">{"You Rated"} : {rating}</h6>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6" lg="12" md="6">
            <Card>
              <CardHeader>
                <h5>{HeartRating}</h5>
              </CardHeader>
              <CardBody>
                <Row className="rating">
                  <Col sm="8">
                    <Rating
                      initialRating={heart}
                      emptySymbol="fa fa-heart-o fa-2x"
                      fullSymbol="fa fa-heart fa-2x"
                      onClick={(rate) => setHeart(rate)}
                    >
                    </Rating>
                  </Col>
                  <Col sm="4">
                    <h6 className="mb-0 text-right">{"You Rated"} : {heart}</h6>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6" lg="12" md="6">
            <Card>
              <CardHeader>
                <h5>{ThumbsUpDownRating}</h5>
              </CardHeader>
              <CardBody>
                <Row className="rating">
                  <Col sm="8">
                    <Rating
                      initialRating={thumbs}
                      emptySymbol="fa fa-thumbs-down fa-2x"
                      fullSymbol="fa fa-thumbs-up fa-2x"
                      onHover={(rate) => setThumbs(rate)}
                    >
                    </Rating>
                  </Col>
                  <Col sm="4">
                    <h6 className="mb-0 text-right">{"You Rated"} : {thumbs}</h6>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6" lg="12" md="6">
            <Card>
              <CardHeader>
                <h5>{PillRating}</h5>
              </CardHeader>
              <CardBody>
                <Rating
                  className="rating"
                  emptySymbol={<span style={{ margin: '10px' }}>---</span>}
                  fullSymbol={['A', 'B', 'C', 'D', 'E'].map(n => <span style={{ fontSize: '20px' }}>{n}</span>)}
                  onClick={(rate) => alert(rate)}
                >
                </Rating>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Ratingss;