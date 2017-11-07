import type from "./actionType.js"
const {CHANGECODE,CHANGEPHONE}=type
const initState={
    phone:"",
    phoneCode:""
}

export const reducer = (state =initState , action) => {
  const {type,arg,text}=action
  switch (type) {
    case CHANGECODE:{
        
        return {...state,[arg]:text}
    } break;
    case CHANGEPHONE:{
      return {...state,[arg]:text}
    } break;
    default:
      return state
  }
}