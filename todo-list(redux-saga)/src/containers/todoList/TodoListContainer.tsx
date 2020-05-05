import { AppState } from "../../modules/RootReducer";
import { Dispatch } from 'react';
import { TodoAction, todoToggle, todoRemove } from '../../modules/todoInput/todo/action';
import { connect } from "react-redux";
import TodoList from '../../components/todoList';

const mapStateToProps = (state: AppState) => ({
    todos: state.todoReducer
});

const mapDispatchToProps = (dispatch: Dispatch<TodoAction>) => ({
    onToggle: (id: number) => dispatch(todoToggle(id)),
    onRemove: (id: number) => dispatch(todoRemove(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);