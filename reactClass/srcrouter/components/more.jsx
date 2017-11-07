import React, { Component } from 'react'
import {Link} from "react-router"

class Index extends Component{

    constructor(props){
      super(props)
      console.log(this.props)
      
      setTimeout(()=>{
            this.props.history.push("/data")
        },2000)
    }

   
    render(){
      console.log(this.props)
      const {More1,More2}=this.props
      return (<div>这里是数据页面
      {More1}-{More2}
      </div>)
      
    }
   
    
}


export default Index