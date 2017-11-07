import type from "./actionType"
const {CHANGEINFO,GETHOTELDATA,FETCHDATA,CHANGEPRICE}=type
let action={
    [CHANGEINFO](text){
      return {
        type:CHANGEINFO,
        text:text
      }
    },
    // 数据请求
    [FETCHDATA](address,startdate,enddate){
      return function(dispatch){
           
          // return new Promise((resolve,reject)=>{
                    fetch(`/mfw/get_hotel?address=${address}&startDate=${startdate}&endDate=${enddate}`).then((res)=>{
                        return res.json()
                    }).then((data)=>{
                      console.log(data)
                      // console.log(action[GETHOTELDATA])
                      dispatch(action[GETHOTELDATA](data))
                    })
                // }) 
      }
       
    },
    // 数据更该
    [GETHOTELDATA](text){
      return {
        type:GETHOTELDATA,
        text:text
      }
    },
    
    // 根据价格排序
    [CHANGEPRICE](text){
      return {
        type:CHANGEPRICE,
        text:text
      }
    },
}

export default action