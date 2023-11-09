import { createSelector } from 'reselect';

import { initialState } from '@pages/Home/reducer';

const selectHomeState = (state) => state.home || initialState;

export const selectStep = createSelector(selectHomeState, (state) => state.step);
export const selectSummary = createSelector(selectHomeState, (state) => state.summary);
