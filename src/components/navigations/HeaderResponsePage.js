import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class HeaderResponsePage extends Component {

    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            hrefBool: 'http://facebook.com'
        }
        
    }

    render() {
        const { hrefBool } = this.state;
        const { openCart, onClick } = this.props;
        return (
            <header className="header2">
                {/*  Header desktop */ }
                <div className="container-menu-header-v2 p-t-26">
                    <div className="topbar2">
                        <div className="topbar-social">
                            <a href={hrefBool} className="topbar-social-item fa fa-facebook"></a>
                            <a href={hrefBool} className="topbar-social-item fa fa-instagram"></a>
                            <a href={hrefBool} className="topbar-social-item fa fa-pinterest-p"></a>
                            <a href={hrefBool} className="topbar-social-item fa fa-snapchat-ghost"></a>
                            <a href={hrefBool} className="topbar-social-item fa fa-youtube-play"></a>
                        </div>

                        {/*  Logo2 */ }
                        <Link to="/" className="logo2">
                            <img src={process.env.PUBLIC_URL + '/assets/images/icons/logo.png'} alt="IMG-LOGO" />
                        </Link>

                        <div className="topbar-child2">
                            <span className="topbar-email">
                                fashe@example.com
                            </span>

                            <div className="topbar-language rs1-select2">
                                <select className="selection-1" name="time">
                                    <option>USD</option>
                                    <option>EUR</option>
                                </select>
                            </div>

                            {/*   */ }
                            <a href={hrefBool} className="header-wrapicon1 dis-block m-l-30">
                                <img src={process.env.PUBLIC_URL + '/assets/images/icons/icon-header-01.png'} className="header-icon1" alt="ICON" />
                            </a>

                            <span className="linedivide1"></span>

                            <div className="header-wrapicon2 m-r-13">
                                <img src={process.env.PUBLIC_URL + '/assets/images/icons/icon-header-02.png'}
                                    className="header-icon1 js-show-header-dropdown"
                                    alt="ICON"
                                    onClick={onClick.bind(this, !openCart)}
                                />
                                <span className="header-icons-noti">0</span>

                                {/*  Header cart noti */ }
                                <div className={`header-cart header-dropdown ${openCart ? 'show-header-dropdown' : ''}`}>
                                    <ul className="header-cart-wrapitem">
                                        <li className="header-cart-item">
                                            <div className="header-cart-item-img">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/item-cart-01.jpg'} alt="IMG" />
                                            </div>

                                            <div className="header-cart-item-txt">
                                                <a href={hrefBool} className="header-cart-item-name">
                                                    White Shirt With Pleat Detail Back
                                                </a>

                                                <span className="header-cart-item-info">
                                                    1 x $19.00
                                                </span>
                                            </div>
                                        </li>

                                        <li className="header-cart-item">
                                            <div className="header-cart-item-img">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/item-cart-02.jpg'} alt="IMG" />
                                            </div>

                                            <div className="header-cart-item-txt">
                                                <a href={hrefBool} className="header-cart-item-name">
                                                    Converse All Star Hi Black Canvas
                                                </a>

                                                <span className="header-cart-item-info">
                                                    1 x $39.00
                                                </span>
                                            </div>
                                        </li>

                                        <li className="header-cart-item">
                                            <div className="header-cart-item-img">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/item-cart-03.jpg'} alt="IMG" />
                                            </div>

                                            <div className="header-cart-item-txt">
                                                <a href={hrefBool} className="header-cart-item-name">
                                                    Nixon Porter Leather Watch In Tan
                                                </a>

                                                <span className="header-cart-item-info">
                                                    1 x $17.00
                                                </span>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="header-cart-total">
                                        Total: $75.00
                                    </div>

                                    <div className="header-cart-buttons">
                                        <div className="header-cart-wrapbtn">
                                            {/*  Button */ }
                                            <Link to="/carrito" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                                View Cart
                                            </Link>
                                        </div>

                                        <div className="header-cart-wrapbtn">
                                            {/*  Button */ }
                                            <a href={hrefBool} className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                                Check Out
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wrap_header">

                        {/*  Menu */ }
                        <div className="wrap_menu">
                            <nav className="menu">
                                <ul className="main_menu">
                                    <li className="sale-noti">
                                        <Link to="/">Home</Link>
                                    </li>

                                    <li>
                                        <Link to="/tienda">Shop</Link>
                                    </li>

                                    <li>
                                        <Link to="/nosotros">About</Link>
                                    </li>

                                    <li>
                                        <Link to="/contacto">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        {/*  Header Icon */ }
                        <div className="header-icons">

                        </div>
                    </div>
                </div>

                {/*  Header Mobile */ }
                <div className="wrap_header_mobile">
                    {/*  Logo moblie */ }
                    <Link to="/" className="logo-mobile">
                        <img src={process.env.PUBLIC_URL + '/assets/images/icons/logo.png'} alt="IMG-LOGO" />
                    </Link>

                    {/*  Button show menu */ }
                    <div className="btn-show-menu">
                        {/*  Header Icon mobile */ }
                        <div className="header-icons-mobile">
                            <a href={hrefBool} className="header-wrapicon1 dis-block">
                                <img src={process.env.PUBLIC_URL + '/assets/images/icons/icon-header-01.png'} className="header-icon1" alt="ICON" />
                            </a>

                            <span className="linedivide2"></span>

                            <div className="header-wrapicon2">
                                <img src={process.env.PUBLIC_URL + '/assets/images/icons/icon-header-02.png'}
                                    className="header-icon1 js-show-header-dropdown"
                                    alt="ICON"
                                    onClick={onClick.bind(this, !openCart)}
                                />
                                 <span className="header-icons-noti">0</span>

                                {/*  Header cart noti */ }
                                <div className={`header-cart header-dropdown ${openCart ? 'show-header-dropdown' : ''}`}>
                                    <ul className="header-cart-wrapitem">
                                        <li className="header-cart-item">
                                             <div className="header-cart-item-img">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/item-cart-01.jpg'} alt="IMG" />
                                            </div>

                                            <div className="header-cart-item-txt">
                                                <a href={hrefBool} className="header-cart-item-name">
                                                    White Shirt With Pleat Detail Back
                                                </a>

                                                <span className="header-cart-item-info">
                                                    1 x $19.00
                                                </span>
                                            </div>
                                        </li>

                                        <li className="header-cart-item">
                                            <div className="header-cart-item-img">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/item-cart-02.jpg'} alt="IMG" />
                                            </div>

                                            <div className="header-cart-item-txt">
                                                <a href={hrefBool} className="header-cart-item-name">
                                                    Converse All Star Hi Black Canvas
                                                </a>

                                                <span className="header-cart-item-info">
                                                    1 x $39.00
                                                </span>
                                            </div>
                                        </li>

                                        <li className="header-cart-item">
                                            <div className="header-cart-item-img">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/item-cart-03.jpg'} alt="IMG" />
                                            </div>

                                            <div className="header-cart-item-txt">
                                                <a href={hrefBool} className="header-cart-item-name">
                                                    Nixon Porter Leather Watch In Tan
                                                </a>

                                                <span className="header-cart-item-info">
                                                    1 x $17.00
                                                </span>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="header-cart-total">
                                        Total: $75.00
                                    </div>

                                    <div className="header-cart-buttons">
                                        <div className="header-cart-wrapbtn">
                                            {/*  Button */ }
                                            <a href="cart" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                                View Cart
                                            </a>
                                        </div>

                                        <div className="header-cart-wrapbtn">
                                            {/*  Button */ }
                                            <a href={hrefBool} className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                                Check Out
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </div>
                    </div>
                </div>

                {/*  Menu Mobile */ }
                <div className="wrap-side-menu" >
                    <nav className="side-menu">
                        <ul className="main-menu">
                            <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
                                <span className="topbar-child1">
                                    Free shipping for standard order over $100
                                </span>
                            </li>

                            <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
                                <div className="topbar-child2-mobile">
                                    <span className="topbar-email">
                                        fashe@example.com
                                    </span>

                                    <div className="topbar-language rs1-select2">
                                        <select className="selection-1" name="time">
                                            <option>USD</option>
                                            <option>EUR</option>
                                        </select>
                                    </div>
                                </div>
                            </li>

                            <li className="item-topbar-mobile p-l-10">
                                <div className="topbar-social-mobile">
                                    <a href={hrefBool} className="topbar-social-item fa fa-facebook"></a>
                                    <a href={hrefBool} className="topbar-social-item fa fa-instagram"></a>
                                    <a href={hrefBool} className="topbar-social-item fa fa-pinterest-p"></a>
                                    <a href={hrefBool} className="topbar-social-item fa fa-snapchat-ghost"></a>
                                    <a href={hrefBool} className="topbar-social-item fa fa-youtube-play"></a>
                                </div>
                            </li>

                            <li className="item-menu-mobile">
                                <Link to="/">Home</Link>                                
                            </li>

                            <li className="item-menu-mobile">
                                <Link to="/producttienda">Shop</Link>
                            </li>                            

                            <li className="item-menu-mobile">
                                <Link to="/nosotros">About</Link>
                            </li>

                            <li className="item-menu-mobile">
                                <Link to="/contacto">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default HeaderResponsePage;