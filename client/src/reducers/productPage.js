import * as R from 'ramda';

// import {
//   FETCH_PRODUCT_BY_ID_SUCCESS
// } from '../actionTypes';

const initialState = {
  ref: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    // case FETCH_PRODUCT_BY_ID_SUCCESS:
    //   return R.merge(state, {
    //     ref: R.prop('ref', payload)
    //   });
    default:
      return state;
  }
}