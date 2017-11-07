import React, { Component } from 'react'
import {Link} from "react-router"
import {store,pcActions,ADD} from "../../redux"
import {connect} from "react-redux"
import Parent from "./parent.jsx"


class Index extends Component{

    constructor(props){
      super(props)
     
      console.log(this.props)
    }
  
    render(){
     
      return (<div>
          <Parent prop={this.props}/>
           {this.props.children}
      </div>)
      
    }
   
    
}
var select=(state)=>{
    return state.pc
}

var containerName=connect(select)(Index)

export default containerName