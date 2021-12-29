import {createStore, combineReducers, applyMiddleware} from "redux"
import myReducer from "../Reducer/Storereducer"
import logger from "redux-logger"

        const cb = combineReducers({myReducer})


const mystore = createStore (cb, applyMiddleware(logger))

export default mystore
