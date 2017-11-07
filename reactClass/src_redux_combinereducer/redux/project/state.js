import type from "./actionType.js"
const {CHANGENAME}=type
const initState={
  name:"zhangsan"
}

export const reducer = (state =initState , action) => {
  const {type,arg,text}=action
  switch (type) {
    case CHANGENAME:{
       
        return {...state,[arg]:text}
    }
    default:
      return state
  }
}