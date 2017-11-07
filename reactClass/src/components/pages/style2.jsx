import React, { Component } from 'react'
import style from "../../style/style2.css"
import stylejs from "../../style/style.js"

class Child extends Component{

    constructor(props){
      super(props)
     
    }   
    render(){
    

      return (<div className={style.style1red}>这里是子组件style2 <p style={{color:"blue"},stylejs.haha} >哈哈</p></div>)
    }
   
}


export default Child