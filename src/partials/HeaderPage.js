import React, { Component } from 'react'
import HeaderFixedPage from '../components/navigations/HeaderFixedPage';
import HeaderTopPage from '../components/navigations/HeaderTopPage';
import HeaderResponsePage from '../components/navigations/HeaderResponsePage';

class HeaderPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openCart: false
        }
    }

    handleOpenCart(openChild) {
        this.setState({openCart: openChild})        
    }

    render() {
        return (
            <div>
                {/* header fixed */ }
                <HeaderFixedPage 
                    openCart={this.state.openCart}
                    onClick={this.handleOpenCart.bind(this)} 
                />

                {/* header top */}
                <HeaderTopPage />

                {/* header response or mobile */ }
                <HeaderResponsePage 
                    openCart={this.state.openCart}
                    onClick={this.handleOpenCart.bind(this)} 
                />
            </div>
        )
    }
}

export default HeaderPage;