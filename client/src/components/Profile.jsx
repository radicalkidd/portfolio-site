import React, { Component } from 'react';
import profilePic from '../img/smallerpic.png'
import npmImg from '../img/npm.png';
import reactImg from '../img/react.png';
import jsImg from '../img/js.png';
import htmlImg from '../img/html.png';
import cssImg from '../img/css.png';
import nodeImg from '../img/node.png';
import mysqlImg from '../img/mysql.png';
import mongodbImg from '../img/mongodb.png';

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <img className="profile-img" src={profilePic} alt="vu-image"></img>
        <h1>Vu Huynh</h1>
        <h3>Software Engineer Based in the Bay Area</h3>
        <div className="skills-container">
          <img className="npm-img" src={npmImg}></img>
          <img className="react-img" src={reactImg}></img>
          <img className="js-img" src={jsImg}></img>
          <img className="html-img" src={htmlImg}></img>
          <img className="css-img" src={cssImg}></img>
          <img className="node-img" src={nodeImg}></img>
          <img className="mysql-img" src={mysqlImg}></img>
          <img className="mongodb-img" src={mongodbImg}></img>
        </div>
      </div>
    );
  }
}

export default Profile;