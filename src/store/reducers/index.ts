import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {TodoReducer} from "./todoReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: TodoReducer
})

export type RootState = ReturnType<typeof rootReducer>;