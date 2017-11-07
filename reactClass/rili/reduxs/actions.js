import {CHANGEDATE,HIDEDATA,CHANGENOWDATE,SHOWDATE,CHANGEMON} from "./actionType"

export default {
    [CHANGEDATE](text){
      return {
        type:CHANGEDATE,
        arg:"resultDate",
        text:text
      }
    },
    [HIDEDATA](text){
      return {
        type:HIDEDATA,
        arg:"popupState",
        text:text
      }
    },
    [CHANGENOWDATE](text){
      console.log(text)
      return {
        type:CHANGENOWDATE,
        arg:"nowDate",
        text:text
      }
    }, 
    [SHOWDATE](text){
   
      return {
        type:SHOWDATE,
        arg:"showDate",
        text:text
      }
    },
    [CHANGEMON](text){
      
         return {
           type:CHANGEMON,
           arg:"num",
           text:text
         }
       },
}