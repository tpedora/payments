import React from 'react';
import './Docs.css';
import { Jumbotron, PageHeader, Table } from 'react-bootstrap';

class Docs extends React.Component {
  render() {
    return (
      <Jumbotron className="jumbo-docs">
        <h2 className="header-docs">
        Documentation <small>Information on pricing polices, and set margins</small>
        </h2>
        <p className="content-docs">This page was setup to allow for quick calculations for
           employees to use to ballpark pricing on positions. There are
           3 fields. One to base pricing off of a bill rate, pay rate, or
           a term rate. Below is also a table to show which major accounts
           have set pricing, and what that pricing is. The open margin tab
           has also been setup to cutoff at XYZ% percent, which is the
           internal pricing policy.</p>
        <Table className="table-docs">
          <thead>
            <tr>
              <th>Client</th>
              <th>Margin</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>XYZ</td>
            <td>XYZ%</td>
          </tr>
          <tr>
            <td>XYZ</td>
            <td>YXZ%</td>
          </tr>
          <tr>
            <td>XYZ</td>
            <td>XYZ%</td>
          </tr>
          <tr>
            <td>XYZ</td>
            <td>XYZ%</td>
          </tr>
          <tr>
            <td>XYZ</td>
            <td>XYZ%</td>
          </tr>
          </tbody>
        </Table>
      </Jumbotron>
    )
  }
}

export default Docs;
