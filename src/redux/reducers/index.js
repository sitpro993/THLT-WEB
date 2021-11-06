import { combineReducers } from "redux";
import courseReducer from "./courses";
import teacher from "./teachers"

const myReducers = combineReducers({
courseReducer,
teacher
});

export default myReducers;