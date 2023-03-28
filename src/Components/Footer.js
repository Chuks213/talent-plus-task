import React from 'react'

const Footer = () => {
    return (
        <div className="wrapper">
            <div className="row footer_container">
                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div>
                        <img src="/images/logo.png" alt="" />
                        <p className="social_text">reach out to us on any of our social media networks</p>
                        <div className="social_cont">
                            <img src="/images/fab_icon.png" alt="" />
                            <img src="/images/twit_icon.png" alt="" />
                            <img src="/images/tub_icon.png" alt="" />
                            <img src="/images/insta_icon.png" alt="" />
                            <img src="/images/soc_icon.png" alt="" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="link_cont">
                        <span className="link_text">useful links</span>
                        <p>home</p>
                        <p>about us</p>
                        <p>our courses</p>
                        <p>testimonials</p>
                        <p>our community</p>

                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="link_cont">
                        <span className="link_text">community</span>
                        <p>help centers</p>
                        <p>partners</p>
                        <p>suggestion</p>
                        <p>blog</p>
                        <p>newsletter</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="link_cont">
                        <span className="link_text">subscribe us</span>
                        <div>
                        <input type="text" placeholder="nft123@gmail.com" required />
                            <button type="button" className="btn btn-primary">
                            send message
                            </button>
                        </div>
                           
                        
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Footer;
