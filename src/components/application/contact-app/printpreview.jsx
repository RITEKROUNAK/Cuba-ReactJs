import React, { Component } from 'react';

class Printpreview extends Component {
    render(){
    const {selectedUser} = this.props
    return (
        <div className="profile-mail pt-0" id="DivIdToPrint">
        <div className="media"><img className="img-100 img-fluid m-r-20 rounded-circle" id="updateimg" src={selectedUser.avatar} alt="" />
          <div className="media-body mt-0">
            <h5><span id="printname">{selectedUser.name} </span><span id="printlast">{selectedUser.surname}</span></h5>
            <p id="printmail">{selectedUser.name}{"@gmail.com"}</p>
          </div>
        </div>
        <div className="email-general">
          <h6>{"General"}</h6>
          <p>{"Email Address"}: <span className="font-primary" id="mailadd">{selectedUser.surname}{"@gmail.com"}   </span></p>
        </div>
      </div>
    );
  }
}

export default Printpreview