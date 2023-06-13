import * as ACTION_TYPES from '../types';

export const setAuth = payload => ({
  type: ACTION_TYPES.AUTH,
  payload: payload,
});

export const setOnBoard = payload => ({
  type: ACTION_TYPES.ON_BOARD,
  payload: payload,
});
