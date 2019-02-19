import React from 'react';
import { Jumbotron, Table } from 'react-bootstrap';

class OpenSalary extends React.Component {
    render() {

        const billPayMonthly = parseFloat(this.props.billFocusPay * 160).toFixed(2);
        const billPayAnnually = parseFloat(this.props.billFocusPay * 2000).toFixed(2);
        const billTermMonthly = parseFloat(this.props.billFocusTerm * 160).toFixed(2);
        const billTermAnnually = parseFloat(this.props.billFocusTerm * 2000).toFixed(2);

        const payPayMonthly = parseFloat(this.props.payFocusPay * 160).toFixed(2);
        const payPayAnnually = parseFloat(this.props.payFocusPay * 2000).toFixed(2);
        const payTermMonthly = parseFloat(this.props.payFocusTerm * 160).toFixed(2);
        const payTermAnnually = parseFloat(this.props.payFocusTerm * 2000).toFixed(2);

        const termPayMonthly = parseFloat(this.props.termFocusPay * 160).toFixed(2);
        const termPayAnnually = parseFloat(this.props.termFocusPay * 2000).toFixed(2);
        const termTermMonthly = parseFloat(this.props.termFocusTerm * 160).toFixed(2);
        const termTermAnnually = parseFloat(this.props.termFocusTerm * 2000).toFixed(2);

        return (
            <Jumbotron className="jumbo-fixed">
                <h2 className="fixed-docs">
                Annual Salary Projections <small>Forecasting Hourly Rates for Monthly and Annual Salary</small>
                </h2>
                <Table responsive>
                    <thead className="salary">
                        <tr>
                            <th>Category</th>
                            <th>Rate</th>
                            <th>Monthly Salary (160 Hours)</th>
                            <th>Annual Salary (2000 Hours)</th>
                        </tr>
                        <tr>
                            <td>Bill Focused Pay Rate</td>
                            <td>${this.props.billFocusPay} Inc.</td>
                            <td>${billPayMonthly}</td>
                            <td>${billPayAnnually}</td>
                        </tr>
                        <tr>
                            <td>Bill Focused Term Rate</td>
                            <td>${this.props.billFocusTerm} T4</td>
                            <td>${billTermMonthly}</td>
                            <td>${billTermAnnually}</td>
                        </tr>
                        <tr>
                            <td>Pay Focused Pay Rate</td>
                            <td>${this.props.payFocusPay} Inc.</td>
                            <td>${payPayMonthly}</td>
                            <td>${payPayAnnually}</td>
                        </tr>
                        <tr>
                            <td>Pay Focused Term Rate</td>
                            <td>${this.props.payFocusTerm} T4</td>
                            <td>${payTermMonthly}</td>
                            <td>${payTermAnnually}</td>
                        </tr>
                        <tr>
                            <td>Term Focused Pay Rate</td>
                            <td>${this.props.termFocusPay} Inc.</td>
                            <td>${termPayMonthly}</td>
                            <td>${termPayAnnually}</td>
                        </tr>
                        <tr>
                            <td>Term Focused Term Rate</td>
                            <td>${this.props.termFocusTerm} T4</td>
                            <td>${termTermMonthly}</td>
                            <td>${termTermAnnually}</td>
                        </tr>
                        
                    </thead>
                </Table>
            </Jumbotron>
        )
    }
}

export default OpenSalary;