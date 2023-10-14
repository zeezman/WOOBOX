import React from 'react'
import { menu, woobox, laptop } from "../assets/index";
import Footer from './Footer';
import Product from './Product';
import { Link } from "react-router-dom";
import Sign from './Sign';


const Home = () => {
  return (
    <div className="head">
        <div className="navbar">
          <div className="logo">
            <img src={woobox} alt="woobox logo" />
          </div>
          <div className="hamburger">
            <a href="/Sign"> <img src={menu} alt="hamburger" />  </a> 
          </div>
        </div>

        <div className="hero"   >
          <div className="hero-text">
            <div className="content"> 
              <h2 className="hd"> Create Your First <br />
                 Campaign  <span> Now </span>
               </h2>
               <p className="sm">Woobox Lets You Build Forms, Giveaways,
               contests, And More.</p>

               <button className="btn">Get started </button>
            </div>
          </div>
          <div className="middle-icon">
              <img src={laptop} alt="laptop bg" />
          </div> 
          <div className="hero-bottom">
            <div className="end">
              <p className="small"><b>Endless campaigns</b> built
                with one marketing platform </p>
                <button className="sm-btn"> Get started </button>
            </div>           
          </div>
        </div>

        <Product/>
        <Footer/>
    </div>
  )
}

export default Home