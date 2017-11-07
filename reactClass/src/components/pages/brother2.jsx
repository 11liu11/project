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

    }

   
    render(){

        return (
          <div>
          <p>组件2</p>
             {this.state.num}
          </div>
        )
    }
    componentDidMount(){
        event.$on("num",function(data1,data2){
            console.log(data1+"二")
            console.log(data2+"二")
        })
    }
    
}


export default Style