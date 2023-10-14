import React from 'react'
import { facebook, twitter } from "../assets/index";


const Footer = () => {
  return (
    <div className="footer-box">
            <div className="box-container">
              <div className="icon">
                <img src={facebook} alt="laptop bg" />
                <img src={twitter} alt="laptop bg" />
              </div>
              <div className="lower-text">
                  <p>Call us: 1-360-450-5200 </p>
                  <p>For general questions: support@woobox.com   </p>
                  <p> To talk with our sales team: sales@woobox.com </p>
                  <p>  Look it up: Help Desk & Support Library </p>
              </div>
              <div className="cop">
                  Woobox © 2023. All rights reserved.
              </div>
          </div>   
    </div>
  )
}

export default Footer