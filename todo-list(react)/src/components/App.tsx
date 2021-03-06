import React, {useState}from 'react';
import PageTemplate from './pageTemplate';
import TodoInput from './todoInput';
import TodoList, { TodoListData } from './todoList/TodoList';

interface Props { }
interface State {
    input: string;
    todos: Array<TodoListData>;
}

let id: number = 1;
const getId = () => { return ++id; };

const App: React.FC<Props> = () => {
    const [state, setState] = useState<State>({
        input: '',
        todos: [
            { id: 0, text: '아............', done: true },
            { id: 1, text: '왜안되냐........', done: false }
        ]
    });

    const handleChange = (e: React.SyntheticEvent) => {
        const { value } = e.target as HTMLInputElement;
        setState({
            input: value,
            todos: [...state.todos]
        });
    };

    const handleInsert = () => {
        if (state.input === '') return;

        const newTodo: TodoListData = {
            id: getId(),
            text: state.input,
            done: false
        };

        setState({
            input: '',
            todos: [...state.todos, newTodo]
        });
    };
    const handleToggle = (id: number) => {
        const index = state.todos.findIndex(todo => todo.id === id);

        const toggled: TodoListData = {
            ...state.todos[index],
            done: !state.todos[index].done
        };

        setState({
            input: '',
            todos: [
                ...state.todos.slice(0, index),
                toggled,
                ...state.todos.slice(index + 1)
            ]
        });
    };
    const handleRemove = (id: number) => {
        const index = state.todos.findIndex(todo => todo.id === id);
        setState({
            input: '',
            todos: [
                ...state.todos.slice(0, index),
                ...state.todos.slice(index + 1)
            ]
        });
    };

    return (
        <div>
            <PageTemplate>
                <TodoInput
                    onChange={handleChange}
                    onInsert={handleInsert}
                    value={state.input}
                />
                <TodoList
                    todos={state.todos}
                    onToggle={handleToggle}
                    onRemove={handleRemove}
                />
            </PageTemplate>
        </div>
    );
};

export default App;