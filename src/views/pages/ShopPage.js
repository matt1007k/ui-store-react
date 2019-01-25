import React from 'react'
import TitlePage from '../../components/TitlePage';
import ProductList from '../../components/shop/ProductList';

class ShopPage extends React.Component {
    state = {
        title: 'Women',
        description: 'New Arrivals Women Collection 2018'
    }
    
    render() {
        const { title, description } = this.state;
        return (
            <div>
                <TitlePage
                    title={title}
                    description={description}    
                /> 
                
                <ProductList />
            </div>
          )
    }
}

export default ShopPage
    