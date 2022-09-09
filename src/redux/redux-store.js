
import { applyMiddleware, combineReducers, legacy_createStore,  } from "redux"
import userReducer from "./users-reducer"
import thunk from 'redux-thunk'

 let reducers = combineReducers({
    users: userReducer
 })
 
 let store = legacy_createStore(reducers,applyMiddleware(thunk) )
 
 window.store = store

 export default store