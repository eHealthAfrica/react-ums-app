import { createStore, applyMiddleware } from 'redux';
import clientMiddleware from './middleware/clientMiddleware';
import reducers from './reducers';

export default () => {
  const middleware = [clientMiddleware];
  const store = createStore(reducers, applyMiddleware(...middleware));

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers')); // eslint-disable-line global-require
    });
  }
  return store;
};
