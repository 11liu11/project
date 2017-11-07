import {createStore} from "redux";

export const actionType = {
    ADD:"add",
    nowDate:null
}

let now = new Date(),
    year = now.getFullYear(),
    mon = now.getMonth()+1,
    day = now.getDate();

const initState = {
    num:0,
    year,
    mon,
    day
}

const reducer = (state=initState,action)=>{
    const {type,arg,text,t} = action;
    switch(type){
        case actionType.ADD : {
            const newNum = state[arg] + (text=="+1"?+1:-1);
            return {
                ...state,
                [arg]:newNum
            }
        }
        break;
        case actionType.YEAR : {
            return {
                ...state,
                [arg]:text
            }
        }
        break;
        case actionType.MON : {
            return {
                ...state,
                [arg]:text
            }
        }
        break;
        default : {
            return state;
        }
    }
}

export const actions = {
    [actionType.ADD](i){
        return {
            type:actionType.ADD,
            arg:"num",
            text:i
        }
    },
    [actionType.YEAR](i){
        return {
            type:actionType.YEAR,
            arg:"year",
            text:i
        }
    },
    [actionType.MON](i){
        return {
            type:actionType.MON,
            arg:"mon",
            text:i
        }
    },
}

export const store = new createStore(reducer)