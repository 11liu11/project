import {createStore,combineReducers} from "redux"
import {pcReducer} from "./pc"
import {proReducer} from "./project"

var allmodule=combineReducers({
  pc:pcReducer,
  pro:proReducer
})
export {pcActions,pcActionsType} from "./pc"
export  {proActions,proActionsType} from "./project"
export const store=new createStore(allmodule)