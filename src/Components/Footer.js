import React from 'react'

const Footer = () => {
    return (
        <div className="wrapper">
            <div className="row footer_container">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
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

                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="link_cont">
                        <div className="sub_us">
                            <span className="link_text">useful links</span>
                        </div>

                        <p>home</p>
                        <p>about us</p>
                        <p>our courses</p>
                        <p>testimonials</p>
                        <p>our community</p>

                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="link_cont">
                        <div className="sub_us">
                            <span className="link_text">community</span>
                        </div>

                        <p>help centers</p>
                        <p>partners</p>
                        <p>suggestion</p>
                        <p>blog</p>
                        <p>newsletter</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                    <div className="link_cont">
                        <div className="sub_us">
                            <span className="link_text">subscribe us</span>
                        </div>

                        <div class="input-group mb-3">
                            <input type="text" className="form-control input-control" placeholder="nft123@gmail.com" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button className="btn btn-primary butt-In" type="button">send message</button>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

        </div>

    )
}

export default Footer;
