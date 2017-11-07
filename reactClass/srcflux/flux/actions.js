import {dispatch} from "./dispatch"
export var actions = {
    addNum(text) {
        dispatch({
            type: "addNum",
            text: text
        })
    }
}
