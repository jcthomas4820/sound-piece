import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user.slice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root.saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
      user: userReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)
