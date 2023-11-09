import { produce } from 'immer';

import { SET_ADD_ONS, SET_BIODATA, SET_CONFIRMATION, SET_PLAN, SET_STEP_CONTENT } from './constants';

export const initialState = {
  step: 1,
  summary: { addOns: [] },
};
export const storedKey = ['summary', 'step'];
const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_STEP_CONTENT:
        if (action.step === 5) {
          draft.summary = {};
        }
        draft.step = action.step;
        break;
      case SET_BIODATA:
        draft.summary = { ...state.summary, biodata: action.biodata };
        break;
      case SET_PLAN:
        draft.summary = { ...state.summary, plan: action.plan };
        break;
      case SET_ADD_ONS:
        draft.summary = {
          ...state.summary,
          addOns: action.addOns,
        };
        break;
      case SET_CONFIRMATION:
        draft.summary = { ...state.summary, totalPrice: action.price };
        break;
    }
  });

export default homeReducer;
