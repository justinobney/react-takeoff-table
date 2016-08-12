import React, { Component } from 'react';

class TakeoffEditorContainer extends Component {
  render() {
    let {editTakeoffId, editTakeoffChanges, takeoffs} = this.props;

    takeoffs = Object.keys(takeoffs || {})
      .map(k=>this.props.takeoffs[k]);

    console.log(editTakeoffChanges);

    return (
      <div className="TakeoffEditorContainer">
        Takeoff Editor Container: {editTakeoffId}
        {takeoffs.map(t=><div key={t.id}>T:{t.id}</div>)}
      </div>
    );
  }
}

export default TakeoffEditorContainer;
