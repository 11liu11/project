import React, { Component } from 'react'
import {Link} from "react-router"

class Index extends Component{

    constructor(props){
      super(props)
    

    }

   
    render(){
     
      return (<div>
          {this.props.num}
      </div>)
      
    }
   
    
}


export default Index