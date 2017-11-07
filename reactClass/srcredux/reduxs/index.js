import {createStore} from "redux"

export {default as actionType} from "./actionType"
export {default as actions} from "./actions.js"
import {reducer} from "./state"

export const store=new createStore(reducer)

console.log(store)