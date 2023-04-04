import React from 'react';

const Classes = () => {
    return (
        <div className="wrapper">
            <div className="row" style={{minHeight: 700}}>
                <div className="col-lg-6 col-sm-6 col-12">
                    <div className="Class_container">
                        <div className="vector_img">
                            <img src="/images/vector_icon.png" alt="" />

                        </div>
                        <span className="audio_text">High quality video, audio & live classes</span>
                        <div>
                            <p className="aud_text">high-defination video is video of higher resolution and quality than standard definition.
                                while there’s no standard meaning for high definition, generally any standard video image</p>
                        </div>
                        <button type="button" className="btn btn-primary btn_class">view courses</button>
                        <div className="label_cont">
                            <label className="audio_classes"><img src="/images/audio_icon.png" alt="" />Audio classes</label>
                            <label className="audio_classes"><img src="/images/live_icon.png" alt="" />live classes</label>
                        </div>
                        <div className="label_box">
                            <label className="live_classes"><img src="/images/record_icon.png" alt="" />recorded classes</label>
                            <label className="live_classes"><img src="/images/note_icon.png" alt="" />50+ notes</label>
                        </div>

                    </div>
                </div>

                <div className="col-lg-6 col-sm-6 col-12">

                    <div className="class_box">
                        <img src="/images/unsplash_img.png" className="splash_Box" alt="" />
                        <img src="/images/drip_icon.png" className="drip_box" alt="" />
                    </div>

                </div>
                <div className="unsplash_box">
                    <img src="/images/unsplash_Viky.png" alt="" />
                </div>

                <div className="group_box">
                    <img src="/images/group_img.png" width="12%" alt="" />
                </div>

                <div className="curve_box">
                    <img src="/images/curve_icon.png" alt="" />
                </div>

                <div className="green_vector">
                    <img src="/images/green_vector.png" alt="" />
                </div>

                <div className="circle_box">
                    <img src="/images/circle_icon.png" alt="" />
                </div>

            </div>

        </div>
    )
}

export default Classes;
