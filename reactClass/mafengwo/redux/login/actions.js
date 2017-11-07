import type from "./actionType"

const {CHANGECODE,CHANGEPHONE}=type
export default {
    [CHANGEPHONE](text){
      return {
        type:CHANGEPHONE,
        arg:"phone",
        text:text
      }
    },
    [CHANGECODE](text){
      return {
        type:CHANGECODE,
        arg:"phoneCode",
        text:text
      }
    }
}