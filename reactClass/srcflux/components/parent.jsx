import React, { Component } from 'react'
import {Link} from "react-router"
import state from "../flux/state"
import {event} from "../flux/event"
import Child2 from "./child2"
class Index extends Component{

    constructor(props){
      super(props)
      this.state={
        num:state.num
      }
      setInterval(()=>{
          state.num=3
      },2000)
      setInterval(()=>{
         this.setState({
          num:state.num
        })
      },3000)
      event.$on("change",()=>{
        this.setState({
          num:state.num
        })
      })

    }

   
    render(){
     
      return (<div>
        <Link to="/child1" >child1</Link><br/>
        // <Link to="/child2" >child2</Link>
        <p>{this.state.num}</p>
        <Child2 num={this.state.num}></Child2>  
        {this.props.children}
      </div>)
      
    }
   
    
}


export default Index