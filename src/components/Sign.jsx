import React from 'react'
import { google, profile, icons } from "../assets/index";
import { Link } from 'react-router-dom';

const Sign = () => {
  return (
    <div className="body">
      <center>
        <div className="base">
        <div id="logo">
          <img src={google} alt="google logo" />
        </div>
        <div id="info1">One account. All of Google.</div>
        <div id="info2">Sign in to continue to Gmail</div>
        <div id="form-img">
        <div id="form-img">
              <img src={profile} width="99" height="99" />
          </div>
          <div id="mailbox">
            <input placeholder="Enter your email" type="mail" name="name" 
            style={{width: 270, height: 42, border: '1px solid #c2c4c6',
              fontSize: 16, paddingLeft: 0, marginLeft: -180 }}
             />
          </div>
            <Link to="/" ><input type="submit" id="button2" value="Next" /></Link>
            <div id="info3"><a href="#">Need help?</a></div>
        </div>
        <div id="info4"> <a href="#">Create account</a></div>
          <div id="info5">One Google Account for everything Google</div>
        <div className="btn-icon"> <img src={icons} alt="logo2" /></div>
        <div id="bottom">
              <ul >
                <li>&copy; www.coderglass.com</li>
                <li>Designed by Varun Singh </li>
              </ul>
        </div>
        </div>
      </center>
    </div>
  )
}

export default Sign