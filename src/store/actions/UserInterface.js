import * as ACTION_TYPES from '../types';

export const setThemeColor = payload => ({
  type: ACTION_TYPES.SET_THEME_COLOR,
  payload: payload,
});

export const setColors = payload => ({
  type: ACTION_TYPES.SET_COLORS,
  payload: payload,
});
