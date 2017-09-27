// function setState(state, newState) {
//   return state.merge(newState);
// }
//
// const initialState = {
//   fetching: false,
//   fetched: false,
//   cleaningHistory: [],
//   error: null
// };
//
// const {fetching} = initialState;
//
// export default function(state = initialState, action) {
//   switch (action.type) {
//     case 'FETCH_CLEANING_HISTORY_PENDING':
//     return Object.assign({}, state, {
//       fetching: true
//     });
//     case 'FETCH_CLEANING_HISTORY_FULFILLED':
//       return Object.assign({}, state,
//         {
//         fetched: true,
//         fetching: false,
//         cleaningHistory: action.payload
//       });
//     case 'FETCH_CLEANING_HISTORY_REJECTED':
//       return Object.assign({}, state,
//         {
//           fetched: true,
//           fetching: false,
//           error: action.payload
//         });
//   default:
//     return state;
//   }
// }
