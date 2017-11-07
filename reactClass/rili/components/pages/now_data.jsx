import React, { Component } from 'react';
import {actions,store} from "../../reduxs";

class NowData extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            year:store.getState().newDate.getFullYear(),
            mon:store.getState().newDate.getMonth(),
            unsubscribe:store.subscribe(this.change.bind(this))
        }
       
    }
    change(){
            this.setState({
               year:store.getState().newDate.getFullYear(),
                mon:store.getState().newDate.getMonth()
            })
    }
    render() {
        return (
            <h1 className="now-time">
                {this.state.year+"年"+(this.state.mon+1)+"月"}
            </h1>
        );
    }
     componentWillUnmount(){
        this.state.unsubscribe()
    }
}

export default NowData;