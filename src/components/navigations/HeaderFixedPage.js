import React, { Component } from 'react'

import { Link } from 'react-router-dom'




class HeaderFixedPage extends Component {

    constructor(props) {
        super(props);
    }

    

    render() {
        const { onClick, openCart } = this.props;

        return (            
            <div className="wrap_header fixed-header2 trans-0-4">
                {/*  Logo */ }
                <Link to="/" className="logo">
                    <img src={process.env.PUBLIC_URL + '/assets/images/icons/logo.png'} alt="IMG-LOGO" />
                </Link>
            
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
                    <Link to="#" className="header-wrapicon1 dis-block">
                        <img src={process.env.PUBLIC_URL + '/assets/images/icons/icon-header-01.png'} className="header-icon1" alt="ICON" />
                    </Link>

                    <span className="linedivide1"></span>

                    <div className="header-wrapicon2">
                        <img src={process.env.PUBLIC_URL + '/assets/images/icons/icon-header-02.png'}
                            className="header-icon1 js-show-header-dropdown"
                            alt="ICON"
                            onClick={onClick.bind(this, !openCart)}
                        />
                        <span className="header-icons-noti">0</span>

                        {/*  Header cart noti */ }
                        <div className={`header-cart header-dropdown ${openCart ? 'show-header-dropdown' : ''}`} >
                            <ul className="header-cart-wrapitem">
                                <li className="header-cart-item">
                                    <div className="header-cart-item-img">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/item-cart-01.jpg'} alt="IMG" />
                                    </div>

                                    <div className="header-cart-item-txt">
                                        <Link to="#" className="header-cart-item-name">
                                            White Shirt With Pleat Detail Back
                                        </Link>

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
                                        <Link to="#" className="header-cart-item-name">
                                            Converse All Star Hi Black Canvas
                                        </Link>

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
                                        <Link to="#" className="header-cart-item-name">
                                            Nixon Porter Leather Watch In Tan
                                        </Link>

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
                                    <Link to="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                        Check Out
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderFixedPage;