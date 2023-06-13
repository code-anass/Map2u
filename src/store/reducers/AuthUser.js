import * as ACTION_TYPES from '../types';
import {AuthUser} from '../models';

export default (state = AuthUser, action) => {
  const {type, payload, error} = action;
  switch (type) {
    case ACTION_TYPES.AUTH:
      return {
        ...state,
        auth: {
          ...payload,
          canCreateWO: payload?.permissions?.includes?.(
            'workorder_create_medical',
            'workorder_create_nonmedical',
          ),
        },
        loading: false,
      };
    case ACTION_TYPES.ON_BOARD:
      return {
        ...state,
        onBoarding: payload,
        loading: false,
      };
    default:
      return state;
  }
};
