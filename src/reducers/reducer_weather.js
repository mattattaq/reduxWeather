import { FETCH_WEATHER } from '../actions/index'

export default function(state=[], action) {
  // console.log("action received", action);
  //return state;

  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([ action.payload.data ]);
      return [ action.payload.data, ...state ];

      default: return state;
  }
}
