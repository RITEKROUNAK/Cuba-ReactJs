import React, { Fragment,useState,useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardFooter, Media } from 'reactstrap'
import {Follower,Following,TotalPost} from '../../constant'
import axios from 'axios'

const UserCards = (props) => {

  const [cards,setCards] = useState([])

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/api/usercard.json`).then(res => setCards(res.data))
  },[])

  return (
    <Fragment>
      <Breadcrumb parent="Users" title="User Cards" />
      <Container fluid={true}>
        
        <Row>
          {cards.map((cardItem, i) => 
          <Col md="6" lg="6" xl="4" className="box-col-6" key={i}>
            <Card className="custom-card">
              <CardHeader>
                <Media body className="img-fluid" src={require(`../../assets/images/${cardItem.card_bg}`)} alt="" />
              </CardHeader>
              <div className="card-profile">
                <Media body className="rounded-circle" src={require(`../../assets/images/${cardItem.avatar}`)} alt="" />
              </div>
              <ul className="card-social">
                <li><a href="#javascript"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#javascript"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#javascript"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#javascript"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#javascript"><i className="fa fa-rss"></i></a></li>
              </ul>
              <div className="text-center profile-details">
                <h4>{cardItem.name}</h4>
                <h6>{cardItem.post}</h6>
              </div>
              <CardFooter className="row">
                <Col sm="4 col-4">
                  <h6>{Follower}</h6>
                  <h3 className="counter">{cardItem.follower}</h3>
                </Col>
                <Col sm="4 col-4">
                  <h6>{Following}</h6>
                  <h3><span className="counter">{cardItem.following}</span>{"K"}</h3>
                </Col>
                <Col sm="4 col-4">
                  <h6>{TotalPost}</h6>
                  <h3><span className="counter">{cardItem.totalPost}</span>{"M"}</h3>
                </Col>
              </CardFooter>
            </Card>
          </Col>
          )}
        </Row>
      </Container>
    </Fragment>
  );
}

export default UserCards;