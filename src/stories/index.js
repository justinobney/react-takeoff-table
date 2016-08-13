import React from 'react';
import { storiesOf } from '@kadira/storybook';

import stateTree from './state-tree.js';
import {TakeoffTableEditor} from '../TakeoffTableEditor/TakeoffTableEditor.js';
import TakeoffRow from '../TakeoffTableEditor/TakeoffRow.js'

storiesOf('TakeoffTableEditor', module)
  .add('Show New Takeoff Row', () => {
    let { takeoffs } = stateTree;

    let state = {
      takeoffs,
      editTakeoffId: 0
    };

    return (
      <TakeoffTableEditor {...state} />
    );
  })
  .add('Edit Takeoff 1', () => {
    let { takeoffs } = stateTree;

    let state = {
      takeoffs,
      editTakeoffId: 1,
    };

    return (
      <TakeoffTableEditor {...state} />
    );
  });

storiesOf('TakeoffRow', module)
  .addDecorator((story) => (
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
            {story()}
          </tbody>
        </table>
      </div>
    </div>
  ))
  .add('View Mode', () => {
    let { takeoffs } = stateTree;

    let state = {
      takeoff: takeoffs[1],
      editTakeoffId: 0,
    };

    return (
      <TakeoffRow {...state} />
    );
  })
  .add('Edit Mode', () => {
    let { takeoffs } = stateTree;

    let state = {
      takeoff: takeoffs[1],
      editTakeoffId: 1,
    };

    return (
      <TakeoffRow {...state} />
    );
  });
