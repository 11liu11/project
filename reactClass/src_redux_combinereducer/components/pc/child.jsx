import React, { Component } from 'react'
import {Link} from "react-router"
import {pcActions,store,pcActionsType}  from "../../redux"
class Index extends Component{

    constructor(props){
      super(props)
      this.dispatch=store.dispatch
      console.log(this.props)

    }

    addfn(i){
      console.log(pcActionsType)
      this.dispatch(pcActions[pcActionsType.ADD](i))
    }
    render(){
     
      return (<div>
          <button onClick={()=>{this.addfn(2)}}>点击</button>
      </div>)
      
    }
   
    
}


export default Index