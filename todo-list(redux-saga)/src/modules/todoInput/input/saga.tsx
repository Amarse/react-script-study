
import { takeEvery, all } from 'redux-saga/effects';
import { InputAction, INPUT } from './action';

//saga 작성
//saga 코루틴 작성
export default function* inputSaga() {
    yield all([
        takeEvery(INPUT, input$)
    ]);
}


//요건 모르겠넹.....
//비동기 처리할 행동있음 정의
function* input$(action: InputAction) {
    const { type, payload } = action;
    console.log(type);
    console.log(payload);
}