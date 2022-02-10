import React, { Fragment } from 'react';
import CountdownComponent from './countdownData';
import {Container} from 'reactstrap'
import comingsoon from '../../assets/images/other-images/coming-soon-bg.jpg';
import authVideo from '../../assets/video/auth-bg.mp4';
import { WE_ARE_COMING_SOON } from "../../constant";
const ComingsoonVideo = (props) => {
    return (
        <Fragment>
        <div className="page-wrapper">
        <Container fluid={true} className="p-0">
          <div className="comingsoon auth-bg-video">
            <video className="bgvideo-comingsoon" id="bgvid" poster={comingsoon} playsInline="" autoPlay={true} muted="" loop="" >
                <source src={authVideo} type="video/mp4" />
            </video>
            <div className="comingsoon-inner text-center">
                <img src={require("../../assets/images/other-images/coming-soon-Logo.png")} alt=""/>
              <h5>{WE_ARE_COMING_SOON}</h5>
              <div className="countdown" id="clockdiv">
                <CountdownComponent/>
              </div>
            </div>
          </div>
        </Container>
      </div>
      </Fragment>
    );
}

export default ComingsoonVideo;