import { handleActions } from "redux-actions";
import produce from "immer";

// 액션 타입 정의
const INCREMENT = 'counter/INCREMENT' ;
const DECREMENT = 'counter/DECREMENT' ;

// 액션 생성 함수 정의
export const increment = () => ({ type: INCREMENT }) ;
export const decrement = () => ({ type: DECREMENT }) ;

// 초기 상태 정의
const initialState = {
    number: 0
} ;

export default handleActions({
    [INCREMENT] : (state,actions) => produce(state,draft => {
        draft.number = state.number + 1
    }),
    [DECREMENT] : (state,actions) => produce(state,draft => {
        draft.number = state.number - 1
    }),
},initialState);
