import axios from 'axios';

const URL = '/api/status';

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function switchLed(arg) {
  return dispatch => {
    dispatch({
      type: 'FETCH_SWITCH_STATUS_PENDING'
    });

    return setLedStatus(arg).then(data => {
      dispatch({
        type: 'FETCH_SWITCH_STATUS_FULFILLED',
        payload: arg
      });
      return dispatch(fetchLedStatus());
    });
  };
}

export function fetchLedStatus() {
  return dispatch => {
    dispatch({
      type: 'FETCH_STATUS_PENDING'
    });

    return fetchStatus().then(response => {
      dispatch(fetchStatusSuccess(response.data.status));
    });
  };
}

export function fetchStatusSuccess(status) {
  return {
    type: 'FETCH_STATUS_FULFILLED',
    payload: status
  };
}

export function fetchStatus() {
  return axios.get(`${URL}?TableName=led`);
}

export function setLedStatus(status) {
  const data = {
    status: status
  };

  const init = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    url: `${URL}`,
    data: JSON.stringify(data)
  };
  return axios(`${URL}`, init);
}

const pollStartAction = () => ({type: 'POLL_START'});
