import React, { Component } from 'react'
import style from  "../../style/style1.css"
class Child extends Component{

    constructor(props){
      super(props)
     
    }

   
    render(){
    

      return (<div className={style.style1red}>这里是子组件style1</div>)
    }
   
}


export default Child