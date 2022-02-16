import React, { Fragment } from 'react';
import {Container,Button} from 'reactstrap'
import { Link } from 'react-router-dom';
import {MAINTENANCE,BACK_TO_HOME_PAGE} from "../constant";
const Maintenance = (props) => {
    return (
        <Fragment>
        <div className="page-wrapper">
        <div className="error-wrapper maintenance-bg">
          <Container>
            <ul className="maintenance-icons">
              <li><i className="fa fa-cog"></i></li>
              <li><i className="fa fa-cog"></i></li>
              <li><i className="fa fa-cog"></i></li>
            </ul>
            <div className="maintenance-heading">
              <h2 className="headline">{MAINTENANCE}</h2>
            </div>
            <h4 className="sub-content">{"Our Site is Currently under maintenance We will be back Shortly"}<br/>{"Thank You For Patience"}</h4>
            <div>
              <Link to={`${process.env.PUBLIC_URL}/dashboard/default/`}><Button color="primary-gradien" size='lg' className="text-light">{BACK_TO_HOME_PAGE}</Button></Link>
            </div>
          </Container>
        </div>
      </div>
      </Fragment>
    );
}

export default Maintenance;