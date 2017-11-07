import {createStore} from "redux"

export const actionType={
  ADD:"add"
}
// 相当于vuex中的state
const initState={
  num:0
}

const reducer=(state=initState,action)=>{

  const {type,arg,text}=action
  switch(type){
    case actionType.ADD:{
        var data=state[arg]+text
        console.log(data)
        return {...state,[arg]:data}
    }break;
    default:{
      return state
    }
  }
}

export const actions={
  [actionType.ADD](data){
      return {
        type:actionType.ADD,
        arg:"num",
        text:data
      }
  }
}

export const store=new createStore(reducer)

console.log(store)