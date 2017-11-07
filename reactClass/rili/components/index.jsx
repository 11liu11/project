import React, { Component } from 'react';
import Data from "./pages/data.jsx";
import NextPrev from "./pages/next_prev.jsx";
import NowData from "./pages/now_data.jsx";
import Popup from "./pages/popup.jsx";
import {store,CHANGEDATE,CHANGENOWDATE,actions} from "../reduxs";
console.log(CHANGEDATE)
class Index extends Component {
    constructor(props){
        super(props)
        var date=new Date();
        
       this.state={
           popupState:store.getState().popupState,
           unsubscribe:store.subscribe(this.changefn.bind(this))
       }
        store.dispatch(actions[CHANGENOWDATE](date))
    }
    changefn(){
        this.setState({
           popupState:store.getState().popupState
        })
    }
    componentWillUnmount(){
        this.state.unsubscribe()
    }
    render() {

        return (
            <div className="box">
                <NowData />
                <NextPrev />
                <Data />
                {this.state.popupState?<Popup />:null}
            </div>
        );
    }
}

export default Index;