
import state from "./state.js"
import {event} from "./event"
export var dispatch = function(actions) {
     var writerFn=function(){
        for(var i in state){
            
            if(typeof(state[i])!="function"){
                Object.defineProperty(state,i,{writable:true})
            }
        }
     }
  
      switch (actions.type) {
          case "addNum":
              {
                    writerFn()
                  state.addNum(actions.text)
              }
      }
      event.$emit("change")
}
  