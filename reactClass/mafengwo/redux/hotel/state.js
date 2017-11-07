import type from "./actionType.js"
const {CHANGEINFO,GETHOTELDATA,CHANGEPRICE}=type
const initState={
    address:null,
    startdate:null,
    enddate:null,
    hotelDataFetch:[],
    hoteList:[]
}

export const reducer = (state =initState , action) => {
  const {type,arg,text}=action
  switch (type) {
    case CHANGEINFO:{

        return {...state,address:text.address,startdate:text.startdate,enddate:text.enddate}
    } break;
    case GETHOTELDATA:{
                console.log(text)
                return {...state,hotelDataFetch:text[0].arr,hoteList:text[0].arr}
            } break;
    case CHANGEPRICE:{
        var arr=state.hotelDataFetch.sort((a,b)=>{
            return a.price*1<b.price*1
        })
        console.log(arr)
        return {...state,hoteList:arr}
    } break;
    default:
      return state
  }
}