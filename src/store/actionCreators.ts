import * as TodoActionCreators from "./todoLayer/actions"
import * as UserActionCreators from "./usersLayer/actions"

export default {
	...TodoActionCreators,
	...UserActionCreators,
}