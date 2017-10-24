import axios from 'axios';

const URL = '/api/set-status';

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function switchLed(arg) {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_SWITCH_STATUS_PENDING',
    });

    return setLedStatus(arg)
      .then(data => {
        dispatch({
          type: 'FETCH_SWITCH_STATUS_FULFILLED',
          payload: arg
        });
      })
  }
}

export function fetchLedStatus() {
  return axios.get(`${URL}?TableName=led`)
}

export function setLedStatus(status) {
  const data = {
    "status": status
  };

  const init = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    url: `${URL}`,
    data: JSON.stringify(data)
  };
  return axios(`${URL}`, init)
}
