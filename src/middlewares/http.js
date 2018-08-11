import axios from 'axios';

function callHook(hookMethod, next, params={}, extraParams={} ){
  if (hookMethod === undefined){
    return
  }
  const res = hookMethod({...params, ...extraParams})
  res && next(res)
}

const httpMiddleware = store => next => action => {

  if (!action.url) {
    return next(action)
  }

  const hookParams = {
    dispatch : store.dispatch,
    getState : store.getState,
  }
  callHook(action.onRequest, next, hookParams)
  return axios(action).then((response) => {
    callHook(action.onSuccess, next, hookParams, {
      data : response.data,
      status : response.status,
    })
  }).catch((error) => {
    if (error.response) {
      callHook(action.onError, next, hookParams, {
        data : error.data,
        status : error.status,
      })
    }
    if (error.request) {
      callHook(action.onError, next, hookParams)
    }
  })
}

export default httpMiddleware
