import React from 'react';
import { storiesOf } from '@kadira/storybook';

import stateTree from './state-tree.js';
import TakeoffEditorContainer from '../TakeoffEditorContainer';
import TakeoffTableEditor from '../TakeoffTableEditor';

storiesOf('TakeoffEditorContainer', module)
  .add('Default View', () => {
    let { mutationIntent: { takeoff: {id, changes}}, takeoffs } = stateTree;

    let state = {
      takeoffs,
      editTakeoffId: id,
      editTakeoffChanges: changes
    };

    return (
      <TakeoffEditorContainer {...state} />
    );
  });

storiesOf('TakeoffTableEditor', module)
  .add('Default View', () => (
    <TakeoffTableEditor />
  ));
