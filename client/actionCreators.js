import axios from 'axios';

const URL = 'https://s59jp649x3.execute-api.ap-southeast-2.amazonaws.com/dev/led';

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
