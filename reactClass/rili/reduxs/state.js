import {CHANGEDATE,HIDEDATA,CHANGENOWDATE,SHOWDATE,CHANGEMON} from "./actionType.js"
const initState={
  resultDate:null,
  popupState:false,
  nowDate:null,
  num:0,
  showDate:null,
  newDate:null
}
export const reducer = (state =initState , action) => {
  const {type,arg,text}=action
  switch (type) {
    case CHANGEDATE:{
        return {...state,[arg]:text}
    } break;
    case HIDEDATA:{
      return {...state,[arg]:text}
  } break;
  
  case CHANGENOWDATE:{
    
    return {...state,[arg]:text,newDate:text}
  } break;
  case SHOWDATE:{
    
    return {...state,[arg]:text}
  } break;
  case CHANGEMON:{
    if(text=="+"){
      var num=state.num+1
    }else{
      var num=state.num-1
    }
    var now=state.nowDate
    var inityear=now.getFullYear()
    var initMon=now.getMonth()
    var newDate=new Date(inityear,initMon+num,1)
   
    return {...state,[arg]:num,newDate:newDate}
  } break;
    default:
      return state
  }
}