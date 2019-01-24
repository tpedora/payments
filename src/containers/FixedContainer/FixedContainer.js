import React from 'react';
import Fixed from '../../components/Fixed/Fixed';

class FixedContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
/* Term Fee's Calculations, both Markup and Margin*/
      tMarkup: 1.205,
      tBill: 0.83,
/* Bill Focus Values*/
      bMargin: 0,
      bBill: 0,
/* Pay Focus Values*/
      pMarkup: 0,
      pMarkupPercent: 0,
      pPay: 0,
/* Term Focus Values IMPORTANT termMarkup is the Margins Markup, NOT related to term fee's*/
      termMarkup: 0,
      termMarkupPercent: 0,
      termRate: 0
    }
    this.billFocusMargin = this.billFocusMargin.bind(this);
    this.billFocusBill = this.billFocusBill.bind(this);
    this.payMarkup = this.payMarkup.bind(this);
    this.payFocusPay = this.payFocusPay.bind(this);
    this.termMarkup = this.termMarkup.bind(this);
    this.termRate = this.termRate.bind(this);
  }
//Methods to update Bill Focus Inputs
  billFocusMargin(num) {
    this.setState({bMargin: num});
  }

  billFocusBill(num) {
    this.setState({bBill: num});
  }

//Methods to update Pay Focus Inputs
  payMarkup(num) {
    const markupPercent = num * 100 - 100;
    this.setState({pMarkup: num, pMarkupPercent: markupPercent});
  }

  payFocusPay(num) {
    this.setState({pPay: num});
  }

//Methods to update Term Focus Inputs
  termMarkup(num) {
    const markupPercent = num * 100 - 100;
    this.setState({termMarkup: num, termMarkupPercent: markupPercent});
  }

  termRate(num) {
    this.setState({termRate: num});
  }

  render() {
    return (
      <div className="fixed-container">
        <Fixed
        billFocusMargin={this.billFocusMargin}
        billFocusBill={this.billFocusBill}
        billFocusPay={`$${parseFloat(this.state.bBill * this.state.bMargin).toFixed(2)}`}
        billFocusTerm={`$${parseFloat(this.state.bBill * this.state.bMargin * this.state.tBill).toFixed(2)}`}
        payMarkup={this.payMarkup}
        payFocusPay={this.payFocusPay}
        payFocusBill={`$${parseFloat(this.state.pPay * this.state.pMarkup).toFixed(2)}`}
        payFocusTerm={`$${parseFloat(this.state.pPay * this.state.tBill).toFixed(2)}`}
        payFocusMarkup={this.state.pMarkup}
        payFocusMarkupPercentage={`${parseFloat(this.state.pMarkupPercent).toFixed(2)}%`}
        termMarkup={this.termMarkup}
        termFocusTerm={this.termRate}
        termFocusPay={`$${parseFloat(this.state.termRate * this.state.tMarkup).toFixed(2)}`}
        termFocusBill={`$${parseFloat(this.state.termRate * this.state.tMarkup * this.state.termMarkup).toFixed(2)}`}
        termFocusMarkup={this.state.termMarkup}
        termFocusMarkupPercent={`${parseFloat(this.state.termMarkupPercent).toFixed(2)}%`} />
      </div>
    )
  }
}

export default FixedContainer;
