import React, { Component } from 'react';

class TakeoffEditRow extends Component {
  static defaultProps = { takeoff: {} };
  createChangeHandler(fn, subject, key, name){
    return (event) => {
      fn(subject, key, name, event.target.value)
    };
  }
  render() {
    const {takeoff, domProps, changes, onChange} = this.props;

    return (
      <tr {...domProps}>
        <td>
          <div className="ui fluid input">
            <input type="text"
              placeholder="123"
              value={changes.lineNumber || takeoff.lineNumber}
              onChange={this.createChangeHandler(onChange, 'takeoffs', takeoff.id, 'lineNumber')} />
          </div>
        </td>
        <td>
          <div className="ui fluid input">
            <input type="text"
              placeholder="123"
              value={changes.sheetNumber || takeoff.sheetNumber}
              onChange={this.createChangeHandler(onChange, 'takeoffs', takeoff.id, 'sheetNumber')} />
          </div>
        </td>
        <td>
          <div className="ui fluid input">
            <input type="text"
              placeholder="123"
              value={changes.revisionNumber || takeoff.revisionNumber}
              onChange={this.createChangeHandler(onChange, 'takeoffs', takeoff.id, 'revisionNumber')} />
          </div>
        </td>
        <td>
          <div className="ui fluid input">
            <input type="text"
              placeholder="123"
              value={changes.customerSpecId || takeoff.customerSpecId}
              onChange={this.createChangeHandler(onChange, 'takeoffs', takeoff.id, 'customerSpecId')} />
          </div>
        </td>
        <td>
          <div className="ui fluid input">
            <input type="text"
              placeholder="123"
              value={changes.size || takeoff.size}
              onChange={this.createChangeHandler(onChange, 'takeoffs', takeoff.id, 'size')} />
          </div>
        </td>
        <td>
          <div className="ui fluid input">
            <input type="text"
              placeholder="123"
              value={changes.projectAbbreviationId || takeoff.projectAbbreviationId}
              onChange={this.createChangeHandler(onChange, 'takeoffs', takeoff.id, 'projectAbbreviationId')} />
          </div>
        </td>
        <td>
          <div className="ui fluid input">
            <input type="text"
              placeholder="123"
              value={changes.quantity || takeoff.quantity}
              onChange={this.createChangeHandler(onChange, 'takeoffs', takeoff.id, 'quantity')} />
          </div>
        </td>
        <td colSpan="3"></td>
      </tr>
    );
  }
}

export default TakeoffEditRow;
