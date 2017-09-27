import cookie from 'cookies-js';
import {hashHistory} from 'react-router';

const checkIfTokenExists = store => next => action => {
  if (action.type.substr(0, 1) !== '@') {
    const token = cookie.get('token');
    if (token) {
      next(action);
    } else {
      hashHistory.push('/login');
    }
  } else {
    next(action);
  }
};

export default checkIfTokenExists;