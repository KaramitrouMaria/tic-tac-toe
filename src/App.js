import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Routes from './components/Routes/Routes';
import RouteNavItem from './components/Routes/RouteNavItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container nav-container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="http://www.niometrics.com/">niometrics</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <RouteNavItem key={1} href="/game">
                Tic Tac Toe
              </RouteNavItem>
              <RouteNavItem key={2} href="/scoreboard">
                Score Board
              </RouteNavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
