import { Dispatch } from 'react';
import { AppState } from '../../modules/RootReducer';
import { InputAction, input } from '../../modules/todoInput/input/action';
import { TodoInsertReqAction, todoInsert, todoInsertReq } from '../../modules/todoInput/todo/action';
import { connect } from 'react-redux';
import TodoInput from '../../components/todoInput';

const mapStatetoProps = (state: AppState) => ({
    value: state.inputReducer.value
});

const mapDispatchToProps = (dispatch: Dispatch<InputAction | TodoInsertReqAction>) => ({
    setInput: (value: string) => dispatch(input(value)),
    onInsert: (value: string) => dispatch(todoInsertReq(value))
});

export default connect(mapStatetoProps, mapDispatchToProps)(TodoInput);