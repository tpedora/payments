import React from 'react';
import './Fixed.css';
import { Jumbotron, Table } from 'react-bootstrap';

class Fixed extends React.Component {
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
    if (e.target.value === '11.5') {
      this.props.payMarkup(1.13);
    } else if (e.target.value === '11.9') {
      this.props.payMarkup(1.135);
    } else if (e.target.value === '15') {
      this.props.payMarkup(1.176);
    } else if (e.target.value === '16') {
      this.props.payMarkup(1.190);
    } else if (e.target.value === '18') {
      this.props.payMarkup(1.220);
    }
  }

  handlePayRate(e) {
    let value = parseFloat(e.target.value).toFixed(2);
    let payRate = parseFloat(value);
    this.props.payFocusPay(payRate);
  }

// Methods to extract Term Focused Values
  handleTermMarginMarkup(e) {
    if (e.target.value === '7.7') {
      this.props.termMarkup(1.084)
    } else if (e.target.value === '11.5') {
      this.props.termMarkup(1.13);
    } else if (e.target.value === '11.9') {
      this.props.termMarkup(1.135);
    } else if (e.target.value === '15') {
      this.props.termMarkup(1.176);
    } else if (e.target.value === '16') {
      this.props.termMarkup(1.190);
    } else if (e.target.value === '18') {
      this.props.termMarkup(1.220);
    }
  }

  handleTermRate(e) {
    let value = parseFloat(e.target.value).toFixed(2);
    let termRate = parseFloat(value);
    this.props.termFocusTerm(termRate);
  }

  render() {
    return (
      <Jumbotron className="jumbo-fixed">
        <h2 className="fixed-docs">
        Fixed Pricing Accounts <small>For usage on accounts with set pricing</small>
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
{/* Bill Focus Fields */}
              <td>Bill Rate Focus</td>
              <td>
                <input type="text" placeholder="Bill Rate" onChange={this.handleBill}/>
              </td>
              <td>{this.props.billFocusPay}</td>
              <td>{this.props.billFocusTerm}</td>
              <td>
                <select name="margin" onChange={this.handleMargin}>
                  <option selected disabled>Margin</option>
                  <option value="11.5">11.5%</option>
                  <option value="11.9">11.9%</option>
                  <option value="15">15%</option>
                  <option value="16">16%</option>
                  <option value="18">18%</option>
                </select>
              </td>
            </tr>
            <tr>
{/* Pay Focus Fields */}
              <td>Pay Rate Focus</td>
              <td>{this.props.payFocusBill}</td>
              <td>
                <input type="text" placeholder="Pay Rate" onChange={this.handlePayRate}/>
              </td>
              <td>{this.props.payFocusTerm}</td>
              <td>
                <select name="margin" onChange={this.handlePayMarkup}>
                  <option selected disabled>Margin</option>
                  <option value="11.5">11.5%</option>
                  <option value="11.9">11.9%</option>
                  <option value="15">15%</option>
                  <option value="16">16%</option>
                  <option value="18">18%</option>
                </select>
              </td>
            </tr>
            <tr>
{/* Term Focus Fields */}
              <td>Term Rate Focus</td>
              <td>{this.props.termFocusBill}</td>
              <td>{this.props.termFocusPay}</td>
              <td>
                <input type="text" placeholder="Term Rate" onChange={this.handleTermRate}/>
              </td>
              <td>
                <select name="margin" onChange={this.handleTermMarginMarkup}>
                  <option selected disabled>Margin</option>
                  <option value="7.7">7.7%</option>
                  <option value="11.5">11.5%</option>
                  <option value="11.9">11.9%</option>
                  <option value="15">15%</option>
                  <option value="16">16%</option>
                  <option value="18">18%</option>
                </select>
              </td>
            </tr>
          </tbody>
        </Table>
      </Jumbotron>
    )
  }
}

export default Fixed;
