import React from 'react'
import people from './Data';
// import "swiper/swiper.min.css";
// import "swiper/css/pagination";
import Carousel from 'react-elastic-carousel'




const Feedback = () => {
  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-lg-12">
          <div className="feedback_cont">
            <span className="client_text">what our clients are saying</span>
            <p className="desc_text">high-defination video is video of higher resolution and quality than standard definition.
              while<br /> there’s no standard meaning for high definition, generally any standard video image</p>
          </div>
          <div className="main">

            <Carousel itemsToShow={3} showArrows={false}>
              {people.map((peopleFeedback) => {
                const { id, name, image, text, job } = peopleFeedback;
                return (
                  <div className="Desc_container" key={id}> 
                    <div className="inner_container">
                      <p className="Desc_Text">{text}</p>
                      <div className="img_wrap">
                        <div>
                          <img src={image} alt="" />
                        </div>
                        <div>
                          <span className="sam_text">{name}</span>
                          <p className="pro_text">{job}</p>
                        </div>

                      </div>
                    </div>

                  </div>

                );

              })}

            </Carousel>





          </div>

        </div>
      </div>
    </div>
  )
}

export default Feedback;
