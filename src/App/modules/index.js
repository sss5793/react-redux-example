// combine reducer - 리듀서를 모두 합친다
import { combineReducers } from "redux";

// reducer
import counter from "./counter";

export default combineReducers({
    counter
})
