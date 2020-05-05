import { InputAction } from './action';

//redux만들기

//1. state 정의
export type InputState = {
    /** 
    todo input value
    */
    readonly value: string;
}

//2. reducer 작성
/** 
todoInputReducer
* @param state todo input state
* @param action todo input action
*/

const inputReducer = (state: InputState = { value: '' }, action: InputAction) => {
    switch (action.type) {
        case 'INPUT':
            return { value: action.payload.value };
        default:
            return state;
    }
};


export default inputReducer;