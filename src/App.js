import React, { Component } from 'react';
import logo from './logo.svg';
//import Customer from './components/Customer'
import styled from 'styled-components';
import Menu from './components/Menu';
import CustomerList from './components/CustomerList';

const Header = styled.header`
  background-color: #282c34;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  `
  const Div = styled.div`
    background-color: #4680d6;
    text-align: center;
    height: 100vh;
  `

  const Img = styled.img`
    height: 20vmin;
    pointer-events: none;
  `

  const pRoute = [{id: 1, name: 'Glenn Hotel'}];

  const tRoute = [{id: 2, name: 'Watkins Funeral'}];


export default class App extends Component {
  constructor(props){
    super(props);
    this.showRouteCustomers = this.showRouteCustomers.bind(this);
    this.state = {
      customerData:[
        {
          id: 1,
          name: 'Glenn Hotel'
        }, 
        {
          id: 2,
          name: 'Watkins Funeral'
        }
      ],
      routeList: [
      {
        name: 'P'
      },
      {
        name: 'Q'
      },
      {
        name: 'R'
      },
      {
        name: 'S'
      },
      {
        name: 'T'
      },
      {
        name: 'U'
      },
      {
        name: 'V'
      },
      {
        name: 'W'
      },
    ]
  }
  };

  showRouteCustomers(routeName) {
      if(routeName === "P"){
      this.setState({customerData : pRoute})};
      if(routeName === "T"){
      this.setState({customerData : tRoute});
    }
  };

  render(){
  return (
    <Div>
      <Header>
        <Img src={logo} alt="logo" />
      </Header>
        <h1>Select Route</h1>
        <Menu routeList={this.state.routeList} showRouteCustomers={this.showRouteCustomers}/>
        <h1>Customers</h1>
        <CustomerList customerData={this.state.customerData} />
    </Div>
  );
  };
}
