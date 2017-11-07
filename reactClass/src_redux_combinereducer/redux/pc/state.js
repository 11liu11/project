import type from "./actionType.js"
const {ADD}=type
const initState={
  num:1,
  age:20
}

export const reducer = (state =initState , action) => {
  const {type,arg,text}=action
  switch (type) {
    case ADD:{
        var data=state.num+text
        return {...state,[arg]:data}
    }
      
    default:
      return state
  }
}