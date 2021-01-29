import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
    background-color: #b3c6ff;
    font-size: 16px;
    border-radius: 8px;
    padding: 16px;
`

export default class Routes extends Component {
    constructor(props) {
        super(props);
        this.handleRoute = this.handleRoute.bind(this);
    }

    handleRoute(event){
        event.preventDefault();
        this.props.showRouteCustomers(this.props.name);
    }
    
    render() {
        return (
            <Button name={this.props.name} onClick={this.handleRoute}>{this.props.name}</Button>
        )
    }
}

Routes.propTypes = {
    name: PropTypes.string.isRequired
}