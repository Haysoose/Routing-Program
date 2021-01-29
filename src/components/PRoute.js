import React, { Component } from 'react'
import styled from 'styled-components';
import Customer from './Customer';

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;  
`

export default class PRoute extends Component {
    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.pRoute.map( value =>
                            <Customer   key={value.id}
                                        id={value.id}
                                        name={value.name} />
                            )
                    }
                </tbody>
            </Table>
        )
    }
}