import React from 'react';
import './Fixed.css';
import Rates from '../../data/FixedRates.json';
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
    this.props.updatebMargin(margin);
  }

  handleBill(e) {
    let value = parseFloat(e.target.value).toFixed(2);
    let billRate = parseFloat(value);
    this.props.updatebBill(billRate);
  }

//Methods to extract Pay Focused Values

  handlePayMarkup(e) {
    this.props.updatepMarkup(Rates[e.target.value]);
  }

  handlePayRate(e) {
    let value = parseFloat(e.target.value).toFixed(2);
    let payRate = parseFloat(value);
    this.props.updatepPay(payRate);
  }

// Methods to extract Term Focused Values
  handleTermMarginMarkup(e) {
    this.props.updatetMarkup(Rates[e.target.value]);
  }

  handleTermRate(e) {
    let value = parseFloat(e.target.value).toFixed(2);
    let termRate = parseFloat(value);
    this.props.updatetRate(termRate);
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
              <th>Markup</th>
              <th>Markup Multiplier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
{/* Bill Focus Fields */}
              <td>Bill Rate Focus</td>
              <td>
                <input type="text" placeholder="Enter Bill Rate" onChange={this.handleBill}/>
              </td>
              <td>{this.props.billFocusPay}</td>
              <td>{this.props.billFocusTerm}</td>
              <td>
                <select name="margin" onChange={this.handleMargin}>
                  <option selected disabled>Margin</option>
                  <option value="7.7">7.7%</option>
                  <option value="11.5">11.5%</option>
                  <option value="11.9">11.9%</option>
                  <option value="15">15%</option>
                  <option value="16">16%</option>
                  <option value="18">18%</option>
                </select>
              </td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
            <tr>
{/* Pay Focus Fields */}
              <td>Pay Rate Focus</td>
              <td>{this.props.payFocusBill}</td>
              <td>
                <input type="text" placeholder="Enter Pay Rate" onChange={this.handlePayRate}/>
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
              <td className="margin">{this.props.payFocusMarkupPercentage}</td>
              <td className="margin-multi">{this.props.payFocusMarkup}</td>
            </tr>
            <tr>
{/* Term Focus Fields */}
              <td>Term Rate Focus</td>
              <td>{this.props.termFocusBill}</td>
              <td>{this.props.termFocusPay}</td>
              <td>
                <input type="text" placeholder="Enter Term Rate" onChange={this.handleTermRate}/>
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
              <td className="margin">{this.props.termFocusMarkupPercent}</td>
              <td className="margin-multi">{this.props.termFocusMarkup}</td>
            </tr>
          </tbody>
        </Table>
      </Jumbotron>
    )
  }
}

export default Fixed;
