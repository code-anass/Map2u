import { combineReducers } from 'redux';
import tempSetting from './TempSetting';
import userInterface from './UserInterface';
import authUser from './AuthUser';

export default combineReducers({
  authUser,
  tempSetting,
  userInterface,
});
