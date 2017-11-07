import React, { Component } from 'react'
import {Link} from "react-router"
import {actions,store,actionType}  from "../reduxs"
class Index extends Component{

    constructor(props){
      super(props)
      this.dispatch=store.dispatch
      

    }

    addfn(i){
      console.log(actions)
      console.log(actions[actionType.ADD])
      this.dispatch(actions[actionType.ADD](i))
    }
    render(){
     
      return (<div>
          <button onClick={()=>{this.addfn(2)}}>点击</button>
      </div>)
      
    }
   
    
}


export default Index