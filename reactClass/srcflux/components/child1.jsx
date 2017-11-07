import React, { Component } from 'react'
import {Link} from "react-router"
import {actions}  from "../flux/actions"
class Index extends Component{

    constructor(props){
      super(props)
    

    }

   
    render(){
     
      return (<div>
          <button onClick={()=>{actions.addNum(1)}}>点击</button>
      </div>)
      
    }
   
    
}


export default Index