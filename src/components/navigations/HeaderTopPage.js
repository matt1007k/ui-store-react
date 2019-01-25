import React, { Component } from 'react'

class HeaderTopPage extends Component {
    render() {
        return (
            <div className="flex-c-m size22 bg0 s-text21 pos-relative">
                20% off everything!
                <a href="product.html" className="s-text22 hov6 p-l-5">
                    Shop Now
                </a>

                <button className="flex-c-m pos2 size23 colorwhite eff3 trans-0-4 btn-romove-top-noti">
                    <i className="fa fa-remove fs-13" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}

export default HeaderTopPage;