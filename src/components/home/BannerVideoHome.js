import React from 'react'

const BannerVideoHome = () => {
  return (
    <div>
        <section className="parallax0 parallax100" style={{backgroundImage: 'url(assets/images/bg-video-01.jpg)'}} >
            <div className="overlay0 p-t-190 p-b-200">
                <div className="flex-col-c-m p-l-15 p-r-15">
                    <span className="m-text9 p-t-45 fs-20-sm">
                        The Beauty
                    </span>

                    <h3 className="l-text1 fs-35-sm">
                        Lookbook
                    </h3>

                    <span className="btn-play s-text4 hov5 cs-pointer p-t-25" data-toggle="modal" data-target="#modal-video-01">
                        <i className="fa fa-play" aria-hidden="true"></i>
                        Play Video
                    </span>
                </div>
            </div>
        </section>
        <div className="modal fade" id="modal-video-01" tabindex="-1" role="dialog" aria-hidden="true">

            <div className="modal-dialog" role="document" data-dismiss="modal">
                <div className="close-mo-video-01 trans-0-4" data-dismiss="modal" aria-label="Close">&times;</div>

                <div className="wrap-video-mo-01">
                    <div className="w-full wrap-pic-w op-0-0"><img src="assets/images/icons/video-16-9.jpg" alt="IMG" /></div>
                    <div className="video-mo-01">
                    
                        <iframe src="https://www.youtube.com/embed/Nt8ZrWY2Cmk?rel=0&amp;showinfo=0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>  
        
    </div>
  )
}

export default BannerVideoHome
