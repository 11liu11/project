import actionType from "./actionType"

const {ADD}=actionType
export default {
    [ADD](text){
      return {
        type:ADD,
        arg:"num",
        text:text
      }
    }
}