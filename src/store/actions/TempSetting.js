import * as ACTION_TYPES from '../types';

export const setOnBoarding = payload => ({
  type: ACTION_TYPES.SET_ON_BOARDING,
  payload: payload,
});

export const setFilterWorkOrder = payload => ({
  type: ACTION_TYPES.SET_FILTER_WORKORDER,
  payload: payload,
});


