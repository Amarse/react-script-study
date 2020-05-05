import { combineReducers } from 'redux';
import inputReducer from './todoInput/input/reducer';
import todoReducer from './todoInput/todo/reducer';
//reucer 등록하기
const rootReducer = combineReducers({
    inputReducer,
    todoReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;