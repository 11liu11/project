import React, { Component } from 'react'
import event from "../../event/event"
class Style extends Component{

    constructor(props){
      super(props)
        this.state={
          num:""
        }
    }

    fn(){
        event.$destroy("num","1")
    }

   
    render(){

        return (
          <div>
            <p>组件3</p>
            <button onClick={()=>{this.fn()}}>卸载</button>
             {this.state.num}
          </div>
        )
    }
    componentDidMount(){
        event.$on("num","1",function(data1,data2){
            console.log(data1+"三")
            console.log(data2+"三")
        })
    }
    
}


export default Style