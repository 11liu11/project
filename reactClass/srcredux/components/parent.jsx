import React, { Component } from 'react'
import {Link} from "react-router"
import {store,actionType} from "../reduxs"

import Child2 from "./child2"
class Index extends Component{

    constructor(props){
      super(props)
      this.state={
        num:store.getState().num
      }
      store.subscribe(()=>{
        this.setState({
          num:store.getState().num
        })
      })
    }

    render(){
     
      return (<div>
        <Link to="/child1" >child1</Link><br/>
        <p>{this.state.num}</p>
    
        {this.props.children}
      </div>)
      
    }
   
    
}


export default Index