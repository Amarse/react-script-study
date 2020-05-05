import { List, Record } from 'immutable';
import { TodoAction } from './action';

export interface TodoState {
    readonly id: number;
    readonly text: string;
    readonly done: boolean;
}

export type TodoListState = List<TodoState>;

const TodoStateFactory = Record<TodoState>({ id: 0, text: '', done: false });

const initialState: TodoListState = List([
    TodoStateFactory({ id: 0, text: '호호할머니', done: true }),
    TodoStateFactory({ id: 1, text: '길을 비켜라', done: false })
]);

let id: number = 1;
const getId = () => { return ++id; };

const todoReducer = (state: TodoListState = initialState, action: TodoAction): TodoListState => {
    // console.log('todoReducer');
    switch (action.type) {
        case 'TODO_INSERT': {
            const newTodo = { id: getId(), text: action.payload.value, done: false };
            return state.push(TodoStateFactory(newTodo));
        }
        case 'TODO_TOGGLE': {
            const index = state.findIndex(todo => todo.id === id);
            return state.updateIn([index, 'done'], done => !done);
        }
        case 'TODO_REMOVE': {
            const index = state.findIndex(todo => todo.id === id);
            return state.delete(index);
        }
        default:
            return state;
    }
};

export default todoReducer;