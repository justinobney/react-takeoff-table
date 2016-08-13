import React, { Component } from 'react';

class TakeoffViewRow extends Component {
  static defaultProps = { takeoff: {} };
  render() {
    const {takeoff, onViewRowClick} = this.props;
    return (
      <tr onClick={() => onViewRowClick(takeoff.id)}>
        <td>{takeoff.lineNumber}</td>
        <td>{takeoff.sheetNumber}</td>
        <td>{takeoff.revisionNumber}</td>
        <td>{takeoff.customerSpecId}</td>
        <td>{takeoff.size}</td>
        <td>{takeoff.projectAbbreviationId}</td>
        <td>{takeoff.quantity}</td>
        <td>{takeoff.laborFactor}</td>
        <td>{takeoff.manHours}</td>
        <td>
          <button className="ui icon button">
            <i className="ellipsis vertical icon"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default TakeoffViewRow;
