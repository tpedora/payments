import React from 'react';
import './Open.css';
import { Jumbotron, Table } from 'react-bootstrap';

class Open extends React.Component {
  constructor(props) {
    super(props);
    this.handleMargin = this.handleMargin.bind(this);
    this.handleBill = this.handleBill.bind(this);
    this.handlePayMarkup = this.handlePayMarkup.bind(this);
    this.handlePayRate = this.handlePayRate.bind(this);
    this.handleTermMarginMarkup = this.handleTermMarginMarkup.bind(this);
    this.handleTermRate = this.handleTermRate.bind(this);
  }

//Methods to extract Bill Focus Values
  handleMargin(e) {
    let value = parseFloat(e.target.value).toFixed(2);
    let valNum = parseFloat(value);
    let margin = (100 - valNum) / 100;
    this.props.billFocusMargin(margin);
  }

  handleBill(e) {
    let value = parseFloat(e.target.value).toFixed(2);
    let billRate = parseFloat(value);
    this.props.billFocusBill(billRate);
  }

//Methods to extract Pay Focused Values

  handlePayMarkup(e) {
    if (e.target.value === '18') {
      this.props.payMarkup(1.220);
    } else if (e.target.value === '20') {
      this.props.payMarkup(1.250);
    } else if (e.target.value === '22') {
      this.props.payMarkup(1.282);
    } else if (e.target.value === '25') {
      this.props.payMarkup(1.333);
    }
  }

  handlePayRate(e) {
    let value = parseFloat(e.target.value).toFixed(2);
    let payRate = parseFloat(value);
    this.props.payFocusPay(payRate);
  }

// Methods to extract Term Focused Values
  handleTermMarginMarkup(e) {
    if (e.target.value === '18') {
      this.props.termMarkup(1.220);
    } else if (e.target.value === '20') {
      this.props.termMarkup(1.250);
    } else if (e.target.value === '22') {
      this.props.termMarkup(1.282);
    } else if (e.target.value === '25') {
      this.props.termMarkup(1.333);
    }
  }

  handleTermRate(e) {
    let value = parseFloat(e.target.value).toFixed(2);
    let termRate = parseFloat(value);
    this.props.termFocusTerm(termRate);
  }

  render() {
    return (
      <Jumbotron className="jumbo-open">
        <h2 className="open-docs">
        Open Pricing Accounts <small>For usage on accounts with open pricing</small>
        </h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Focus</th>
              <th>Bill Rate</th>
              <th>Pay Rate</th>
              <th>Term Rate</th>
              <th>Margin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
{/* Bill Rate Focused*/}
              <td>Bill Rate Focus</td>
              <td>
                <input type="text" placeholder="Bill Rate" onChange={this.handleBill}/></td>
              <td>{this.props.billFocusPay}</td>
              <td>{this.props.billFocusTerm}</td>
              <td>
                <select name="margin" onChange={this.handleMargin}>
                  <option selected disabled>Margin</option>
                  <option value="18">18%</option>
                  <option value="20">20%</option>
                  <option value="22">22%</option>
                  <option value="25">25%</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Pay Rate Focus</td>
              <td>{this.props.payFocusBill}</td>
              <td>
                <input type="text" placeholder="Pay Rate" onChange={this.handlePayRate}/></td>
              <td>{this.props.payFocusTerm}</td>
              <td>
                  <select name="margin" onChange={this.handlePayMarkup}>
                  <option selected disabled>Margin</option>
                  <option value="18">18%</option>
                  <option value="20">20%</option>
                  <option value="22">22%</option>
                  <option value="25">25%</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Term Rate Focus</td>
              <td>{this.props.termFocusBill}</td>
              <td>{this.props.termFocusPay}</td>
              <td>
                <input type="text" placeholder="Term Rate" onChange={this.handleTermRate}/></td>
              <td>
                <select name="margin" onChange={this.handleTermMarginMarkup}>
                  <option selected disabled>Margin</option>
                  <option value="18">18%</option>
                  <option value="20">20%</option>
                  <option value="22">22%</option>
                  <option value="25">25%</option>
                </select>
              </td>
            </tr>
          </tbody>
        </Table>
      </Jumbotron>
    )
  }
}

export default Open;
