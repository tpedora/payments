import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Tabs, Tab } from 'react-bootstrap';
import FixedContainer from './containers/FixedContainer/FixedContainer';
import OpenContainer from './containers/OpenContainer/OpenContainer';
import Docs from './components/Docs/Docs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 0
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    this.setState({ key });
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header pullLeft>
            <Navbar.Brand>
              <i className="fas fa-calculator icon"></i>
              <a className="title" href="https://friendly-clarke-0f858b.netlify.com">Bill/Pay Rate Calculator</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Tabs
        activeKey={this.state.key}
        onSelect={this.handleSelect}
        id="controlled-tab"
      >
        <Tab eventKey={1} title="Fixed Margin">
          <FixedContainer />
        </Tab>
        <Tab eventKey={2} title="Open Margin">
          <OpenContainer />
        </Tab>
        <Tab eventKey={3} title="Documentation">
          <Docs />
        </Tab>
      </Tabs>
      </div>
    );
  }
}

export default App;
