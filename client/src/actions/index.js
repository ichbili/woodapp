import {
    FETCH_SERVER_START,
    FETCH_SERVER_SUCCESS,
    FETCH_SERVER_FAILURE
} from '../actionTypes';

import {testServer as testServerApi } from '../api';

export const testServer = () => async dispatch => {
    dispatch({type: FETCH_SERVER_START})
  
    try {
      const testResp = await testServerApi()
      dispatch({
        type: FETCH_SERVER_SUCCESS,
        payload: testResp
      })
    } catch (err) {
      dispatch({
        type: FETCH_SERVER_FAILURE,
        payload: err,
        error: true
      })
    }
  }