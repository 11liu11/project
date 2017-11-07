import React, { Component } from 'react';
import {store,actions,HIDEDATA} from "../../reduxs";

class Popup extends Component {
    constructor(props){
        super(props)
       
        this.state={
            resultDate:store.getState().showDate,
            unsubscribe:store.subscribe(this.change.bind(this))
        }
    }
    change(type){
        this.setState({
            resultDate:store.getState().showDate
        })
    }
    hidefn(e){
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
     
        store.dispatch(actions[HIDEDATA](false))
    }
    componentWillUnmount(){
        this.state.unsubscribe()
    }
    render() {
        return (
            <div className="popup">
               {this.state.resultDate}
               <button onClick={(e)=>{this.hidefn(e)}}>取消</button>
            </div>
        );
    }
}

export default Popup;