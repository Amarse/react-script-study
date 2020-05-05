import React from 'react';

interface Props {
    value: string;
    setInput: (value: string) => void;
    onInsert: (value: string) => void;
}

const TodoInput: React.FC<Props> = ({ value, setInput, onInsert }) => {

    const handleOnChange = (e: React.SyntheticEvent) => {
        const { value } = e.target as HTMLInputElement;
        setInput(value);
    };


    const handleKeyPress = (e: React.KeyboardEvent) => {

        if (e.key === 'Enter') {
            onInsert(value);
            setInput('');
        };
    }

    const handleOnClick = () => {
        onInsert(value);
        setInput('');
    };
    return (
        <div className="todo-input">
            <input className="todo-input-box" value={value} onChange={handleOnChange}
                onKeyPress={handleKeyPress} />
            <div onClick={handleOnClick} className="todo-input-add">추가</div>
        </div>
    )
};


export default TodoInput;