import React from 'react'

const ProductRelation = () => {
  return (
        <section className="relateproduct bgwhite p-t-45 p-b-138">
            <div className="container">
                <div className="sec-title p-b-60">
                    <h3 className="m-text5 t-center">
                        Related Products
                    </h3>
                </div>

                
              <div className="wrap-slick2">
                  <button className="arrow-slick2 prev-slick2 slick-arrow"><i className="fa  fa-angle-left" aria-hidden="true"></i></button>
                    <div className="slick2 slick-initialized slick-slider">      
                       

                      <div className="slick-list draggable">
                          <div className="slick-track" style={{opacity: 1, width: '6264px', transform: 'translate3d(-696px, 0px, 0px)'}}>
                              <div className="item-slick2 p-l-15 p-r-15 slick-slide slick-cloned" tabindex="-1" style={{width: '348px'}} data-slick-index="-2" aria-hidden="true">
                            
                            <div className="block2">
                                <div className="block2-img wrap-pic-w of-hidden pos-relative">
                                    <img src="assets/images/item-05.jpg" alt="IMG-PRODUCT" />

                                    <div className="block2-overlay trans-0-4">
                                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4" tabindex="-1">
                                            <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                            <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                        </a>

                                        <div className="block2-btn-addcart w-size1 trans-0-4">
                                            
                                            <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" tabindex="-1">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="block2-txt p-t-20">
                                    <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5" tabindex="-1">
                                        Coach slim easton black
                                    </a>

                                    <span className="block2-price m-text6 p-r-5">
                                        $165.90
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="item-slick2 p-l-15 p-r-15 slick-slide slick-cloned" tabindex="-1" style={{width: '348px'}} data-slick-index="-1" aria-hidden="true">
                            
                            <div className="block2">
                                <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
                                    <img src="assets/images/item-07.jpg" alt="IMG-PRODUCT" />

                                    <div className="block2-overlay trans-0-4">
                                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4" tabindex="-1">
                                            <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                            <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                        </a>

                                        <div className="block2-btn-addcart w-size1 trans-0-4">
                                            
                                            <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4" tabindex="-1">
                                                Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="block2-txt p-t-20">
                                    <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5" tabindex="-1">
                                        Frayed denim shorts
                                    </a>

                                    <span className="block2-oldprice m-text7 p-r-5">
                                        $29.50
                                    </span>

                                    <span className="block2-newprice m-text8 p-r-5">
                                        $15.90
                                    </span>
                                </div>
                            </div>
                          </div>
                          
                            
                      </div>
                    </div>
                </div>
                <button className="arrow-slick2 next-slick2 slick-arrow"><i className="fa  fa-angle-right" aria-hidden="true"></i></button></div>

            </div>
        </section>
  )
}

export default ProductRelation
