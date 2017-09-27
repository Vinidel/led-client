import { combineReducers } from 'redux';
import user from './uderReducer';
import led from './ledReducer';
import { reducer as form } from 'redux-form';
import {routerReducer} from 'react-router-redux'

export default combineReducers({
  user,
  led,
  form,
  router: routerReducer
})