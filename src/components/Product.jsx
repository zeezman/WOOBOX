import React from 'react'
import { embed, landing, menu, popup, social,} from "../assets/index";

const Product = () => {
  return (
        <div className="product">
          <div className="top-text"> 
            <h2> Experiences That Boost Engagement </h2>
            <p className="xs">Easily create and run successful contests, <br />
             giveaways, polls, coupons, forms, and more.</p>
             <button className="btn-new">Try Woobox For Free</button>
          </div>

          <div className="desc">
            <div className="col">
                <div  className="rol"> <img src={social} alt="hamburger" />
                 Social Media </div>
                 <div  className="rol"> <img src={landing} alt="hamburger" />
                 Landing Pages </div> 
                 <div className="rol"> <img src={popup} alt="hamburger" />
                 Popups </div>
                 <div  className="rol"> <img src={embed} alt="hamburger" />
                 Embeds </div>
            </div>
            <div className="desc-text">
                From Instagram hashtag contests and comment
                 giveaways to polls embedded in your website,
                  we have all of your interactive experience needs
                   covered across your marketing channels.
            </div>
          </div>
        </div>
  )
}

export default Product