import React from 'react'

const ProductDetail = () => {
  return (
    <div className="container bgwhite p-t-35 p-b-80">
		<div className="flex-w flex-sb">
			<div className="w-size13 p-t-30 respon5">
				<div className="wrap-slick3 flex-sb flex-w">
                    <div className="wrap-slick3-dots">
                        <ul className="slick3-dots" role="tablist">
                            <li className="slick-active" role="presentation">
                                <img src="assets/images/thumb-item-01.jpg " />
                                <div className="slick3-dot-overlay"></div>
                            </li>
                            <li role="presentation">
                                <img src="assets/images/thumb-item-02.jpg " />
                                <div className="slick3-dot-overlay"></div>
                            </li>
                            <li role="presentation">
                                <img src="assets/images/thumb-item-03.jpg "/>
                                <div className="slick3-dot-overlay"></div>
                            </li>
                        </ul>
                    </div>

					<div className="slick3 slick-initialized slick-slider slick-dotted">
                        <div className="slick-list draggable">
                            <div className="slick-track" style={{opacity: 1, width: '1614px'}}>
                                <div className="item-slick3 slick-slide slick-current slick-active" data-thumb="assets/images/thumb-item-01.jpg" data-slick-index="0" aria-hidden="false" tabindex="0" role="tabpanel" id="slick-slide10" aria-describedby="slick-slide-control10" style={{width: '538px', position: 'relative', left: '0px', top: '0px', zIndex: 999, opacity: 1}}>
                                    <div className="wrap-pic-w">
                                        <img src="assets/images/product-detail-01.jpg" alt="IMG-PRODUCT"/>
                                    </div>
                                </div>
                                <div className="item-slick3 slick-slide" data-thumb="assets/images/thumb-item-02.jpg" data-slick-index="1" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide11" aria-describedby="slick-slide-control11" style={{width: '538px', position: 'relative', left: -'538px', top: '0px', zIndex: 998, opacity: 0}}>
                                    <div className="wrap-pic-w">
                                        <img src="assets/images/product-detail-02.jpg" alt="IMG-PRODUCT"/>
                                    </div>
                                </div>
                                <div className="item-slick3 slick-slide" data-thumb="assets/images/thumb-item-03.jpg" data-slick-index="2" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide12" aria-describedby="slick-slide-control12" style={{width: '538px', position: 'relative', left: '-1076px', top: '0px', zIndex: 998, opacity: 0}}>
                                    <div className="wrap-pic-w">
                                        <img src="assets/images/product-detail-03.jpg" alt="IMG-PRODUCT"/>
                                    </div>
                                </div>
                        </div>
                    </div>

						

						
					</div>
				</div>
			</div>

			<div className="w-size14 p-t-30 respon5">
				<h4 className="product-detail-name m-text16 p-b-13">
					Boxy T-Shirt with Roll Sleeve Detail
				</h4>

				<span className="m-text17">
					$22
				</span>

				<p className="s-text8 p-t-10">
					Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
				</p>

				
				<div className="p-t-33 p-b-60">
					<div className="flex-m flex-w p-b-10">
						<div className="s-text15 w-size15 t-center">
							Size
						</div>

						<div className="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
							<select className="selection-2 select2-hidden-accessible" name="size" tabindex="-1" aria-hidden="true">
								<option>Choose an option</option>
								<option>Size S</option>
								<option>Size M</option>
								<option>Size L</option>
								<option>Size XL</option>
                              </select><span className="select2 select2-container select2-container--default" dir="ltr" style={{width: '155px'}}>
                                  <span className="selection">
                                      <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-size-r5-container">
                                          <span className="select2-selection__rendered" id="select2-size-r5-container" title="Choose an option">Choose an option</span>
                                          <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                                      </span>
                                  </span>
                                  <span className="dropdown-wrapper" aria-hidden="true"></span>
                              </span>
						</div>
					</div>

					<div className="flex-m flex-w">
						<div className="s-text15 w-size15 t-center">
							Color
						</div>

						<div className="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
							<select className="selection-2 select2-hidden-accessible" name="color" tabindex="-1" aria-hidden="true">
								<option>Choose an option</option>
								<option>Gray</option>
								<option>Red</option>
								<option>Black</option>
								<option>Blue</option>
                            </select>
                            <span className="select2 select2-container select2-container--default" dir="ltr" style={{ width: '155px' }}>
                                  <span className="selection">
                                      <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-color-yb-container">
                                          <span className="select2-selection__rendered" id="select2-color-yb-container" title="Choose an option">Choose an option</span>
                                          <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                                      </span>
                                  </span>
                                  <span className="dropdown-wrapper" aria-hidden="true"></span>
                            </span>
						</div>
					</div>

					<div className="flex-r-m flex-w p-t-10">
						<div className="w-size16 flex-m flex-w">
							<div className="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
								<button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
									<i className="fs-12 fa fa-minus" aria-hidden="true"></i>
								</button>

								<input className="size8 m-text18 t-center num-product" type="number" name="num-product" value="1"/>

								<button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
									<i className="fs-12 fa fa-plus" aria-hidden="true"></i>
								</button>
							</div>

							<div className="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10">
								
								<button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="p-b-45">
					<span className="s-text8 m-r-35">SKU: MUG-01</span>
					<span className="s-text8">Categories: Mug, Design</span>
				</div>

				
				<div className="wrap-dropdown-content bo6 p-t-15 p-b-14 active-dropdown-content">
					<h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4 show-dropdown-content">
						Description
						<i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
						<i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
					</h5>

					<div className="dropdown-content dis-none p-t-15 p-b-23" style={{display: 'block'}}>
						<p className="s-text8">
							Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
						</p>
					</div>
				</div>

				<div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
					<h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
						Additional information
						<i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
						<i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
					</h5>

					<div className="dropdown-content dis-none p-t-15 p-b-23">
						<p className="s-text8">
							Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
						</p>
					</div>
				</div>

				<div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
					<h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
						Reviews (0)
						<i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true"></i>
						<i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true"></i>
					</h5>

					<div className="dropdown-content dis-none p-t-15 p-b-23">
						<p className="s-text8">
							Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default ProductDetail
