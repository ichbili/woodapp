import * as R from 'ramda';

import {
  FETCH_PRODUCTS_SUCCESS,
  LOAD_MORE_PRODUCTS_SUCCESS,
  SEARCH_PRODUCT
} from '../actionTypes';

const initialState = {
  refs: [],
  search: ''
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PRODUCTS_SUCCESS:
      return R.merge(state, {
        refs: R.pluck('ref', payload)
      });
    case LOAD_MORE_PRODUCTS_SUCCESS:
      const refs = R.pluck('ref', payload);
      return R.merge(state, {
        refs: R.concat(refs, state.refs)
      });
    case SEARCH_PRODUCT:
      return R.merge(state, {
        search: payload
      });

    default:
      return state;
  }
}