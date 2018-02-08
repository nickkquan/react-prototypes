import clockReducer from "./clock_reducer"
import {combineReducers} from "redux"

export default combineReducers({
    clock: clockReducer
})