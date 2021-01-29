import React, { Component } from 'react';
import Routes from './Routes';


export default class Menu extends Component {
    render() {
        return (
            <div>
                {
                this.props.routeList.map(value =>

                    <Routes key={value.name}
                            showRouteCustomers={this.props.showRouteCustomers} 
                            name={value.name} />

                    )
                }
            </div>
        )
    }
}

