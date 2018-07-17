import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  LOAD_MORE_PRODUCTS_START,
  LOAD_MORE_PRODUCTS_SUCCESS,
  LOAD_MORE_PRODUCTS_FAILURE,
  FETCH_PRODUCT_BY_ID_START,
  FETCH_PRODUCT_BY_ID_SUCCESS,
  FETCH_PRODUCT_BY_ID_FAILURE,
  ADD_PRODUCT_TO_CART,
  SEARCH_PRODUCT,
  FETCH_FAMILIES_START,
  FETCH_FAMILIES_SUCCESS,
  FETCH_FAMILIES_FAILURE,
  REMOVE_PRODUCT_FROM_CART,
  CLEAN_CART  
} from '../actionTypes';
import {getRenderedProductsLength} from '../selectors';
import {
  fetchProducts as fetchProductsApi,
  loadMoreProducts as loadMoreProductsApi,
  fetchProductById as fetchProductByIdApi,
  fetchFamilies as fetchFamiliesApi,
} from '../api';

export const fetchProducts = () => async dispatch => {
  dispatch({type: FETCH_PRODUCTS_START})

  try {
    const products = await fetchProductsApi()
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: products
    });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: err,
      error: true
    });
  }
}

export const loadMoreProducts = () => async (dispatch, getState) => {
  const offset = getRenderedProductsLength(getState());

  dispatch({type: LOAD_MORE_PRODUCTS_START});

  try {
    const products = await loadMoreProductsApi({offset});
    dispatch({
      type: LOAD_MORE_PRODUCTS_SUCCESS,
      payload: products
    });
  } catch (err) {
    dispatch({
      type: LOAD_MORE_PRODUCTS_FAILURE,
      payload: err,
      error: true
    });
  }
}

export const fetchProductById = (ref) => async dispatch => {
  dispatch({type: FETCH_PRODUCT_BY_ID_START});

  try {
    const product = await fetchProductByIdApi(ref);
    dispatch({
      type: FETCH_PRODUCT_BY_ID_SUCCESS,
      payload: product
    });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCT_BY_ID_FAILURE,
      payload: err,
      error: true
    });
  }
}

export const addProductToBasket = id => dispatch => {
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: id
  });
}

export const searchProduct = (text) => dispatch => {
  dispatch({
    type: SEARCH_PRODUCT,
    payload: text
  });
}

export const fetchFamilies = () => async dispatch => {
  dispatch({type: FETCH_FAMILIES_START});

  try {
    const products = await fetchFamiliesApi()
    dispatch({
      type: FETCH_FAMILIES_SUCCESS,
      payload: products
    });
  } catch (err) {
    dispatch({
      type: FETCH_FAMILIES_FAILURE,
      payload: err,
      error: true
    });
  }
}

export const removeProductFromCart = id => async dispatch => {
  dispatch({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: id
  });
}

export const cleanCart = () => dispatch => {
  dispatch({
    type: CLEAN_CART
  });
}


export const cartCheckout = products => () => {
  alert(JSON.stringify(products));
}