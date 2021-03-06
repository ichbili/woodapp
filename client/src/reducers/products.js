import * as R from 'ramda';

import {
  FETCH_PRODUCTS_SUCCESS,
  LOAD_MORE_PRODUCTS_SUCCESS
} from '../actionTypes';

const initialState = {};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      const newValues = R.indexBy(R.prop('ref'), payload);
      return R.merge(state, newValues);
    case LOAD_MORE_PRODUCTS_SUCCESS:
      const moreValues = R.indexBy(R.prop('ref'), payload);
      return R.merge(state, moreValues);
    default:
      return state;
  }
}