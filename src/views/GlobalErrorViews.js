import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'

import AdminLayout from './admin/AdminLayout';
import PagesLayout from './pages/PagesLayout';
import NoFoundPage from './errors/404';

class GlobalErrorViews extends Component {
    // Anterior localizacion o pagina
    previousLocation = this.props.location;

    componentWillUpdate(nextProps) {
        const { location } = this.props;

        // Comparamos el estado del error y la location actual 
        if (nextProps.history.action !== 'POP' &&
            (!location.state || !location.state.error)) {
            // si hay errores entonces las anterior localizaciones son iguales
            this.previousLocation = this.props.location;
        }

    }

    render() {
        const { location } = this.props;
        const isError = !!(
            location.state &&
            location.state.error &&
            this.previousLocation !== location
        )
        return (
            <div>
                {
                    isError
                    ? <NoFoundPage />
                    : <Switch location={isError ? this.previousLocation : location} >
                        {/*Primero se renderisan las rutas del admin para que las reconozcan el router */}
                        <Route path="/admin" component={AdminLayout} />                            
                        <Route path="/" component={PagesLayout} />
                    </Switch>
                }
            </div>
        )
    }
}

export default GlobalErrorViews;