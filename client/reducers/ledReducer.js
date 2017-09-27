const initialState = {
  fetching: false,
  fetched: false,
  status: 'off',
  error: null
};

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case 'FETCH_SWITCH_STATUS_PENDING':
      return Object.assign({}, state, {
        fetching: true
      });
    case 'FETCH_STATUS_PENDING':
      return Object.assign({}, state, {
        fetching: true
      });
    case 'FETCH_STATUS_FULFILLED':
      return Object.assign({}, state, {
        fetched: true,
        fetching: false,
        status: action.payload
      });
    case 'FETCH_SWITCH_STATUS_FULFILLED':
      return Object.assign({}, state,
        {
          fetched: true,
          fetching: false,
          status: action.payload
        });
    case 'FETCH_SWITCH_STATUS_REJECTED':
      return Object.assign({}, state,
        {
          fetched: true,
          fetching: false,
          error: action.payload
        });
    default:
      return state;
  }
}
