import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import HeaderPage from '../../partials/HeaderPage';
import FooterPage from '../../partials/FooterPage';

import HomePage from './HomePage';
import ShopPage from './ShopPage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import CartPage from './CartPage';
import ProductDetailPage from './ProductDetailPage';

class PagesLayout extends React.Component {

    componentDidMount() {
        
    }

    render() {
        console.log('Frontend');
        
        return (
            <div>
                <HeaderPage />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/tienda" component={ShopPage} />
                    <Route path="/producto/:slug" component={ProductDetailPage} />
                    <Route path="/carrito" component={CartPage} />
                    <Route path="/nosotros" component={AboutPage} />
                    <Route path="/contacto" component={ContactPage} />
                    <Redirect to={{
                        state: { error: true }
                    }} />
                </Switch>
                <FooterPage />
            </div>
        )
    }
}

export default PagesLayout;

