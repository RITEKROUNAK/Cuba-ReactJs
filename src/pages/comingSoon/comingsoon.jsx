import React, { Fragment } from 'react';
import CountdownComponent from './countdownData';
import {Container} from 'reactstrap' 
import { WE_ARE_COMING_SOON } from "../../constant";
const ComingSoon = () => {
    return (
        <Fragment>
             <div className="page-wrapper">
                <Container fluid={true}  className="p-0">
                    <div className="comingsoon">
                    <div className="comingsoon-inner text-center">
                        <img src={require("../../assets/images/other-images/coming-soon-Logo.png")} alt=""/>
                        <h5>{WE_ARE_COMING_SOON}</h5>
                        <div className="countdown" id="clockdiv">
                        <CountdownComponent />
                        </div>
                    </div>
                    </div>
                </Container>
            </div>
        </Fragment>
    );
};

export default ComingSoon;