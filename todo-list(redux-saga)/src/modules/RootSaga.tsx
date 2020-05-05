import { all, fork } from 'redux-saga/effects';
import inputSaga from './todoInput/input/saga';
import todoSaga from './todoInput/todo/saga';


export default function* rootSaga() {
    yield all([
        fork(inputSaga),
        fork(todoSaga)
    ]);
}