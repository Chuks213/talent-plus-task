import * as React from 'react';

const Banner = () => {
    return (
        <div className="wrapper">
            <div className='row bg-primary'>
            {/* <img src="/images/vet_icon.png" alt="" /> */}
                <div className="col-lg-6 col-sm-6 col-12">
                    <div className='Ban-container'>
                        <div className='img-con'>
                            <img src="/images/cir_icon.png" alt="" />
                            <img src="/images/dot_icon.png" alt="" />
                        </div>
                        <div className="G_cont">
                            <span className="G_text">Grow your skills to advance your career path </span>

                        </div>
                        <span className="future_text">build your future with our quality education.
                            the best and largest all-in-one online tutoring platform in the world</span>
                        <div className="btn_con">
                            <button type="button" className="btn btn-outline-light">Get Started Now&nbsp;&nbsp;<img src="/images/arrow_outward.png" /></button>
                            <button type="button" className="btn btn-light">Enroll Now</button>
                        </div>
                        <div>
                            <img src="/images/frame_img.png" alt="" />
                        </div>


                    </div>

                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                    <div className="container_icon">
                        <img src="/images/image_icon.png" width="100%" alt="" />
                    </div>


                </div>
                <img src="/images/frame_icon.png" className="frame_icon" alt="" />

            </div>
        </div>

    )
}

export default Banner;