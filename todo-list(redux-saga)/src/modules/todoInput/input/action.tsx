//redux 만들기 



//1. type 정의
export const INPUT = 'INPUT';

//2. action 정의
export interface InputAction {
    type: typeof INPUT;
    payload: { value: string; };
}


export const input = (value: string): InputAction => ({
    type: INPUT,
    payload: { value: value }
});