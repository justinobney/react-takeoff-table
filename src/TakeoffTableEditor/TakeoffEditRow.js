import React, { Component } from 'react';

class TakeoffEditRow extends Component {
  static defaultProps = { takeoff: {} };
  createChangeHandler(name){
    return (event) => {
      console.log(name, event.target.value);
    };
  }
  render() {
    const {takeoff, domProps} = this.props;

    return (
      <tr {...domProps}>
        <td>
          <div className="ui fluid input">
            <input type="text"
              placeholder="123"
              value={takeoff.id}
              onChange={this.createChangeHandler('lineNumber')} />
          </div>
        </td>
        <td>
          <div className="ui fluid input">
            <input type="text"
              placeholder="123"
              value={takeoff.id}
              onChange={this.createChangeHandler('sheetNumber')} />
          </div>
        </td>
        <td>
          <div className="ui fluid input">
            <input type="text" placeholder="123" />
          </div>
        </td>
        <td>
          <div className="ui fluid input">
            <input type="text" placeholder="123" />
          </div>
        </td>
        <td>
          <div className="ui fluid input">
            <input type="text" placeholder="123" />
          </div>
        </td>
        <td>
          <div className="ui fluid input">
            <input type="text" placeholder="123" />
          </div>
        </td>
        <td>
          <div className="ui fluid input">
            <input type="text" placeholder="123" />
          </div>
        </td>
        <td colSpan="3"></td>
      </tr>
    );
  }
}

export default TakeoffEditRow;
