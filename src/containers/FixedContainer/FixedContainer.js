import React from 'react';
import Fixed from '../../components/Fixed/Fixed';
import Rates from '../../data/TermFees.json';

class FixedContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
/* Bill Focus Values */
      bMargin: 0,
      bBill: 0,
/* Pay Focus Values */
      pMarkup: 0,
      pMarkupPercent: 0,
      pPay: 0,
/* Term Focus Values IMPORTANT termMarkup is the Margins Markup, NOT related to term fee's */
      tMarkup: 0,
      tMarkupPercent: 0,
      tRate: 0
    }
    this.updatebMargin = this.updatebMargin.bind(this);
    this.updatebBill = this.updatebBill.bind(this);
    this.updatepMarkup = this.updatepMarkup.bind(this);
    this.updatepPay = this.updatepPay.bind(this);
    this.updatetMarkup = this.updatetMarkup.bind(this);
    this.updatetRate = this.updatetRate.bind(this);
  }
//Methods to update Bill Focus Inputs
  updatebMargin(num) {
    this.setState({bMargin: num});
  }

  updatebBill(num) {
    this.setState({bBill: num});
  }

//Methods to update Pay Focus Inputs
  updatepMarkup(num) {
    const markupPercent = num * 100 - 100;
    this.setState({pMarkup: num, pMarkupPercent: markupPercent});
  }

  updatepPay(num) {
    this.setState({pPay: num});
  }

//Methods to update Term Focus Inputs
  updatetMarkup(num) {
    const markupPercent = num * 100 - 100;
    this.setState({tMarkup: num, tMarkupPercent: markupPercent});
  }

  updatetRate(num) {
    this.setState({tRate: num});
  }

  render() {
// Variables to perform calculations on Bill Focused Values 
    const bPay = parseFloat(this.state.bBill * this.state.bMargin).toFixed(2);
    const bTerm = parseFloat(this.state.bBill * this.state.bMargin * Rates["tMargin"]).toFixed(2);

// Variables to perform calculations on Pay Focused Values
    const pBill = parseFloat(this.state.pPay * this.state.pMarkup).toFixed(2);
    const pTerm = parseFloat(this.state.pPay * Rates["tMargin"]).toFixed(2);
    const pPercent = parseFloat(this.state.pMarkupPercent).toFixed(2);

// Variables to perform calculations on Term Focused Values
    const tPay = parseFloat(this.state.tRate * Rates["tMarkup"]).toFixed(2);
    const tBill = parseFloat(tPay * this.state.tMarkup).toFixed(2);
    const tPercent = parseFloat(this.state.tMarkupPercent).toFixed(2);

    return (
      <div className="fixed-container">
        <Fixed
        updatebMargin={this.updatebMargin}
        updatebBill={this.updatebBill}
        billFocusPay={`$${bPay}`}
        billFocusTerm={`$${bTerm}`}
        updatepMarkup={this.updatepMarkup}
        updatepPay={this.updatepPay}
        payFocusBill={`$${pBill}`}
        payFocusTerm={`$${pTerm}`}
        payFocusMarkup={this.state.pMarkup}
        payFocusMarkupPercentage={`${pPercent}%`}
        updatetMarkup={this.updatetMarkup}
        updatetRate={this.updatetRate}
        termFocusPay={`$${tPay}`}
        termFocusBill={`$${tBill}`}
        termFocusMarkup={this.state.tMarkup}
        termFocusMarkupPercent={`${tPercent}%`} />
      </div>
    )
  }
}

export default FixedContainer;
