import React, { Component } from 'react'
import {Link} from "react-router"

class Index extends Component{

    constructor(props){
      super(props)
     

    }

  
    render(){
     
      return (<div>
        <h2>一级路由</h2>
         <Link to="/pc">pc功能块</Link> 
         <Link to="/pro">pro功能块</Link> 
         {this.props.children}
      </div>)
      
    }
   
    
}


export default Index