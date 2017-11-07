import React, { Component } from 'react';
import {store,actions,CHANGEMON} from "../../reduxs";

class NextPrev extends Component {
    constructor(props){
        super(props)
    }
    change(type){
        store.dispatch(actions[CHANGEMON](type))
    }
    render() {
        return (
            <div className="button">
                <p onClick={this.change.bind(this,"-")}>
                    上一个月
                </p>
                <p onClick={this.change.bind(this,"+")}>
                    下一个月
                </p>
            </div>
        );
    }
}

export default NextPrev;