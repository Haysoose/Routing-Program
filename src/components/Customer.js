import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Td = styled.td`
    border: 1px solid black;
`

export default class Customer extends Component {
    render() {
        return (
            <tr>
                <Td>{this.props.id}</Td>
                <Td>{this.props.name}</Td>
            </tr>
        )
    }
}

Customer.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}
