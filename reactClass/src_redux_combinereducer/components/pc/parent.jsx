import React, { Component } from 'react'
import {Link} from "react-router"



class Index extends Component{

    constructor(props){
      super(props)
      const {num}=this.props.prop
      this.state={
        num,
       
      }
    }
    render(){
     
      return (<div>
        
        <Link to="/pc/child" >子页面路由</Link><br/>
        <p>{this.state.num}</p>
      </div>)
    }
   
    
}


export default Index