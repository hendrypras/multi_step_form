import { SET_ADD_ONS, SET_BIODATA, SET_CONFIRMATION, SET_PLAN, SET_STEP_CONTENT } from './constants';

export const setStep = (step) => ({
  type: SET_STEP_CONTENT,
  step,
});
export const setBiodata = (biodata) => ({
  type: SET_BIODATA,
  biodata,
});
export const setPlan = (plan) => ({
  type: SET_PLAN,
  plan,
});
export const setAddOns = (addOns) => ({
  type: SET_ADD_ONS,
  addOns,
});
export const setConfirmation = (price) => ({
  type: SET_CONFIRMATION,
  price,
});
