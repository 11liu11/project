import React, { Component } from 'react'
import {Link} from "react-router"

class Index extends Component{

    constructor(props){
      super(props)
    

    }

   
    render(){
     
      return (<div>这里是数据页面
      {this.props.children}
      </div>)
      
    }
   
    
}


export default Index