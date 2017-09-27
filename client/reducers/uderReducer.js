const initialState = {
  fetching: false,
  fetched: false,
  user: {},
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        user: action.user
      });
    default:
      return state;
  }
}
