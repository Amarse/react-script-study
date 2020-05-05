import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoItem-module.scss';

const cx = classNames.bind(styles);

export interface TodoItemProps {
    done: boolean;
    onToggle: () => void; //추가하기
    onRemove: () => void; //지우기
}

const TodoItem: React.FC<TodoItemProps> = ({
    children,
    done,
    onToggle,
    onRemove
}) => {
    return (
        <div className={cx('todo-item')} onClick={onToggle}>
            <input
                className={cx('checkbox')}
                type="checkbox"
                checked={done}
                readOnly
            />
            <div className={cx('todo-item-text', { done })}>{children}</div>
            <div
                className={cx('todo-item-delete')}
                onClick={(e: React.SyntheticEvent) => {
                    e.stopPropagation();
                    onRemove();
                }}
            >
                지우기
            </div>
        </div>
    );
};

export default TodoItem;
