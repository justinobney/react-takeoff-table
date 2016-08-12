import React, { Component } from 'react';

class TakeoffViewRow extends Component {
  static defaultProps = { takeoff: {} };
  render() {
    const {takeoff} = this.props;
    return (
      <tr>
        <td>{takeoff.id}</td>
        <td>{takeoff.projectAbbreviationId}</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
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
