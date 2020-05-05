import React from 'react';
import './Style.scss';
import PageTemplate from './pageTemplate';
import TodoInputContainer from '../containers/todoInput/TodoInputContainer';
import TodoListContainer from '../containers/todoList/TodoListContainer';



const App: React.FC = () => {


    return (
        <div>
            <PageTemplate>
                <TodoInputContainer />
                <TodoListContainer />
            </PageTemplate>
        </div>
    );
}

export default App;
