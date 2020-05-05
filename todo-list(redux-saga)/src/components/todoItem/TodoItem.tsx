import React from 'react';


interface TodoItemProps {
    done: boolean;
    onToggle: () => void;
    onRemove: () => void;

}

const TodoItem: React.FC<TodoItemProps> = ({ children, done, onRemove, onToggle }) => {
    return (
        <div className="todo-list">
            <div className="checkbox">
                <label htmlFor="deletebox" className="checkbox">
                    <input type="checkbox" id="deletebox"
                        value="delete" checked={done} />
                    <div className={`text ${done ? 'done' : ''}`}>{children}</div>
                </label>
            </div>
            <div
                className="todo-list-delete"
                onClick={(e: React.SyntheticEvent) => {
                    e.stopPropagation();
                    onRemove();
                }}
            > 지우기
                </div>
        </div >
    );
};

export default TodoItem;
