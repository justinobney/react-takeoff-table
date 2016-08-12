import React, { Component } from 'react';
import '../../node_modules/semantic-ui-css/semantic.css'

import TakeoffRow from './TakeoffRow.js';
import TakeoffEditRow from './TakeoffEditRow.js';

const mapObject = (obj, fn) =>
  Object.keys(obj).map(
    key =>
      fn(obj[key], key, obj)
  );

const EMPTY_ROW_STYLE = {
  height: '51px',
  background: '#fcf3a0'
};

const DOM_PROPS = {
  style: EMPTY_ROW_STYLE
};

class TakeoffTableEditor extends Component {
  static defaultProps = { takeoffs: [] };
  render() {
    const {takeoffs, editTakeoffId} = this.props;

    const EMPTY_ROW = (
      <tr {...DOM_PROPS}>
        <td colSpan="10">&nbsp;</td>
      </tr>
    );

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
              {
                this.props.editTakeoffId === 0
                  ? <TakeoffEditRow domProps={DOM_PROPS}
                      takeoff={takeoffs[0]} />
                  : EMPTY_ROW
              }
              {
                mapObject(
                  takeoffs,
                  t => <TakeoffRow key={t.id}
                        takeoff={t}
                        editTakeoffId={editTakeoffId} />
                )
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

export default TakeoffTableEditor;
