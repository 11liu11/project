import React, { Component } from 'react'

import event from "../../event/event"


class Style extends Component{

    constructor(props){
      super(props)
        this.state={
          num:1,
          name:"zhangsan"
        }
    }

    fn(){
        event.$emit("num",this.state.num,this.state.name)
    }

   
    render(){

        return (
          <div>
             <button onClick={(e)=>{this.fn(e)}}>点击</button>
          </div>
        )
    }
    
    
}


export default Style