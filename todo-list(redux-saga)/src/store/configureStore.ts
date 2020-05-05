import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';


import rootReducer from '../modules/RootReducer';
import rootSaga from '../modules/RootSaga';


const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({ collapsed: true });

const composeEnhancer: typeof compose = (window as any)
    .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
        rootReducer,
        composeEnhancer(
            applyMiddleware(
                sagaMiddleware,
                logger,
                routerMiddleware(history),
            ),
        ),
    );

    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;