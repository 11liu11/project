import type from "./actionType"

const {ADD}=type
export default {
    [ADD](text){
      return {
        type:ADD,
        arg:"num",
        text:text
      }
    }
}