
//기본값 
export const TODO_INSERT_REQUEST = 'TODO_INSERT_REQUEST';

export interface TodoInsertReqAction {
    type: typeof TODO_INSERT_REQUEST;
    payload: { value: string; };
}

export const todoInsertReq = (value: string): TodoInsertReqAction => ({
    type: TODO_INSERT_REQUEST,
    payload: { value: value }
});

//작성

export const TODO_INSERT = 'TODO_INSERT';

export interface TodoInsertAction {
    type: typeof TODO_INSERT;
    payload: { value: string; };
}

export const todoInsert = (value: string): TodoInsertAction => ({
    type: TODO_INSERT,
    payload: { value: value }
});

//추가

export const TODO_TOGGLE = 'TODO_TOGGLE';

export interface TodoToggleAction {
    type: typeof TODO_TOGGLE;
    payload: { id: number; };
}

export const todoToggle = (id: number): TodoToggleAction => ({
    type: TODO_TOGGLE,
    payload: { id: id }
});

export const TODO_REMOVE = 'TODO_REMOVE';

export interface TodoRemoveAction {
    type: typeof TODO_REMOVE;
    payload: { id: number; };
}

export const todoRemove = (id: number): TodoRemoveAction => ({
    type: TODO_REMOVE,
    payload: { id: id }
});


export type TodoAction = TodoInsertReqAction | TodoInsertAction | TodoToggleAction | TodoRemoveAction;