import type from "./actionType"
const {CHANGENAME}=type
export default {
    [CHANGENAME](text){
      return {
        type:CHANGENAME,
        arg:"name",
        text:text
      }
    }
}