import { createStore, combineReducers } from 'redux';

import stateTree from './stories/state-tree.js';

export function mutationIntent(subject, key, property, value){
    return {
        type: 'MUTATION_INTENT',
        payload: {
            subject,
            key,
            property,
            value
        }
    }
}

export function changeEditedTakeoff(id){
    return {
        type: 'CHANGE_EDITED_TAKEOFF',
        payload: {
            id
        }
    }
}


const bigReducer = (state = stateTree, action) => {
  console.log('action', action);
  let mutation;
  switch (action.type) {
    case 'MUTATION_INTENT':
      const mutationSubject = state.mutationIntent[action.payload.subject];
      mutation = {
        mutationIntent: {
          ...state.mutationIntent,
          [action.payload.subject]: {
            id:action.payload.key,
            changes: {
              ...mutationSubject.changes,
              [action.payload.property]: action.payload.value
            }
          }
        }
      };
      return {...state, ...mutation};
    case 'CHANGE_EDITED_TAKEOFF':
      const id = state.mutationIntent.takeoffs.id;
      const original = state.takeoffs[id];
      const takeoffs = {
        ...state.takeoffs,
        [id]: {...original, ...state.mutationIntent.takeoffs.changes}
      };
      
      mutation = {
        mutationIntent: {
          ...state.mutationIntent,
          takeoffs: {
            id: action.payload.id,
            changes: {}
          }
        }
      };
      return {...state, ...{takeoffs}, ...mutation}
    default:
      return state
  }
}

const store = createStore(combineReducers({bigReducer}));
export default store;
