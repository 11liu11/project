import React, { Component } from 'react'
import Style1 from "./pages/style1"
import Style2 from "./pages/style2"
class Style extends Component{

    constructor(props){
      super(props)
      this.state={
        num:""
      }
      this.fn=this.fn.bind(this)
    }

    fn(data){
        console.log(this)
        this.setState({
          num:data
        })
    }

    render(){
      return (<div><Style1></Style1>  <Style2></Style2></div>)
    }
    
    
}


export default Style