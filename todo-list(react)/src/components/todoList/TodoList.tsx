import React from 'react';
import TodoItem from '../todoItem';
export interface TodoListData {
    id: number;
    text: string;
    done: boolean;
}

export interface TodoListProps {
    todos: Array<TodoListData>;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
    const todoList = todos.map((todo: { id: any; done: any; text: any }) => (
        <TodoItem
            key={todo.id}
            done={todo.done}
            onToggle={() => onToggle(todo.id)}
            onRemove={() => onRemove(todo.id)}
        >
            {todo.text}
        </TodoItem>
    ));

    return <div>{todoList}</div>;
};

export default TodoList;
