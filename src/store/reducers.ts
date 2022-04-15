import {combineReducers} from "redux";
import {userReducer} from "./usersLayer/userReducer";
import {todoReducer} from "./todoLayer/todoReducer";

export const rootReduccer = combineReducers({
	user: userReducer,
	todo: todoReducer,
})

export type RootState = ReturnType<typeof rootReduccer>