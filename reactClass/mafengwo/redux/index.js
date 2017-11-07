import {createStore,combineReducers,applyMiddleware } from "redux"
import {loginReducer} from "./login"
import {hotelReducer} from "./hotel"
import thunkMiddleware from 'redux-thunk'
var allmodule=combineReducers({
  login:loginReducer,
  hotel:hotelReducer
})
export {loginActions,loginActionsType} from "./login"
export  {hotelActions,hotelActionsType} from "./hotel"
export const store=new createStore(allmodule,applyMiddleware(thunkMiddleware))