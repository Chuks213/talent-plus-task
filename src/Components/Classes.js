import React from 'react';

const Classes = () => {
    return (
        <div className="wrapper">
            <div className="row">
                <div className="col-lg-6 col-sm-6 col-12">
                    <div className="Class_container">
                        <div className="vector_img">
                            <img src="/images/vector_icon.png" alt="" />

                        </div>
                        <span className="audio_text">high quality video, audio & live classes</span>
                        <div>
                            <p className="aud_text">high-defination video is video of higher resolution and quality than standard definition.
                                while there’s no standard meaning for high definition, generally any standard video image</p>
                        </div>
                        <button type="button" className="btn btn-primary">view courses</button>
                        <div className="label_cont">
                            <label><img src="/images/audio_icon.png" alt="" />&nbsp;&nbsp;Audio classes</label>
                            <label><img src="/images/live_icon.png" alt="" />&nbsp;&nbsp;live classes</label>
                        </div>
                        <div className="label_cont">
                            <label><img src="/images/record_icon.png" alt="" />&nbsp;&nbsp;recorded classes</label>
                            <label><img src="/images/note_icon.png" alt="" />&nbsp;&nbsp;50+ notes</label>
                        </div>

                    </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-12">
                {/* <img src="/images/curve_icon.png" className="curve_box" alt=""/> */}
                    <div className="class_box">
                        <img src="/images/unsplash_img.png" className="splash_Box" alt="" />
                        <img src="/images/drip_icon.png" className="drip_box" alt="" />
                    </div>

                </div>
                <div className="unsplash_box" max-width="50%">
                    <img src="/images/unsplash_Viky.png" alt="" />
                </div>

                <div className="group_box">
                    <img src="/images/group_img.png" alt="" />
                </div>

            </div>

        </div>
    )
}

export default Classes;
