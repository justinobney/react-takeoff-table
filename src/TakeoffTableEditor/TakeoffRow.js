import React, { Component } from 'react';
import TakeoffEditRow from './TakeoffEditRow.js';
import TakeoffViewRow from './TakeoffViewRow.js';

class TakeoffRow extends Component {
  static defaultProps = { takeoff: {} };
  render() {
    const {takeoff, editTakeoffId} = this.props;
    const Component = takeoff.id === editTakeoffId
      ? TakeoffEditRow
      : TakeoffViewRow;

    return <Component takeoff={takeoff} />;
  }
}

export default TakeoffRow;
