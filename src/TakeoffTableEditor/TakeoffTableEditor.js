import React, { Component } from 'react';
import { connect } from 'react-redux';

import TakeoffRow from './TakeoffRow.js';
import TakeoffEditRow from './TakeoffEditRow.js';

import {mutationIntent, changeEditedTakeoff} from '../store.js';

import '../../node_modules/semantic-ui-css/semantic.css'

const mapObject = (obj) =>
  Object.keys(obj).map(key => obj[key]);

const EMPTY_ROW_STYLE = {
  height: '51px',
  background: '#fcf3a0'
};

const DOM_PROPS = {
  style: EMPTY_ROW_STYLE
};

const mapStateToProps = (state) => {
  const {bigReducer: {takeoffs, mutationIntent}} = state;
  return {
    takeoffs,
    editTakeoffId: mutationIntent.takeoffs.id,
    changes: mutationIntent.takeoffs.changes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (...args) => {
      dispatch(mutationIntent(...args))
    },
    onViewRowClick: (id) => dispatch(changeEditedTakeoff(id))
  }
}

class TakeoffTableEditor extends Component {
  static defaultProps = { takeoffs: [] };
  renderTakeoffRow(t){
    const {editTakeoffId, changes, onChange, onViewRowClick} = this.props;
    return (
      <TakeoffRow
        key={t.id}
        takeoff={t}
        changes={changes}
        onChange={onChange}
        onViewRowClick={onViewRowClick}
        editTakeoffId={editTakeoffId} />
    );
  }
  render() {
    const {takeoffs, changes, onChange, onViewRowClick} = this.props;

    const EMPTY_ROW = (
      <tr {...DOM_PROPS}
        onClick={() => onViewRowClick(0)}>
        <td colSpan="10">&nbsp;</td>
      </tr>
    );

    const NewRow = this.props.editTakeoffId === 0
      ? <TakeoffEditRow
          domProps={DOM_PROPS}
          takeoff={takeoffs[0]}
          changes={changes}
          onChange={onChange} />
      : EMPTY_ROW;

    return (
      <div className="ui padded grid">
        <div className="sixteen wide column">
          <table className="ui compact table unstackable">
            <thead>
              <tr>
                <th>Line No</th>
                <th>Sheet</th>
                <th>Rev</th>
                <th>Spec</th>
                <th width="80">Size</th>
                <th>Abbr</th>
                <th width="80">Qty</th>
                <th width="50">LF</th>
                <th width="50">M/H</th>
                <th width="50"></th>
              </tr>
            </thead>
            <tbody>
              {NewRow}
              {
                mapObject(takeoffs)
                  .filter(t=>!!t.id)
                  .map(t => this.renderTakeoffRow(t))
              }
            </tbody>
            <tfoot>
              <tr>
                <th colSpan="10">
                    <div className="ui left floated pagination menu">
                      <a className="icon item">
                        <i className="left chevron icon"></i>
                      </a>
                      <a className="item">1</a>
                      <a className="item">2</a>
                      <a className="item">3</a>
                      <a className="item">4</a>
                      <a className="icon item">
                        <i className="right chevron icon"></i>
                      </a>
                    </div>
                  </th>
                </tr>
              </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TakeoffTableEditor);

export {TakeoffTableEditor};
