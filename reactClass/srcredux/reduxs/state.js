import actionType from "./actionType.js"
const initState={
  num:1
}

export const reducer = (state =initState , action) => {
  const {type,arg,text}=action
  switch (type) {
    case actionType.ADD:{
        var data=state.num+text
        return {...state,[arg]:data}
    }
      
    default:
      return state
  }
}