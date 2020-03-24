import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import persistedReducers from './persistReducers';

import createStore from './createStore';
import rootReducer from './Modules/rootReducer';
import rootSaga from './Modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistedReducers(rootReducer), middlewares);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
