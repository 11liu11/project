import React, { Component } from 'react'
import {Link} from "react-router"
import {proActions,store,proActionsType}  from "../../redux"
class Index extends Component{

    constructor(props){
      super(props)
      this.dispatch=store.dispatch
      

    }

    addfn(i){
        console.log(proActionsType)
      this.dispatch(proActions[proActionsType.CHANGENAME](i))
    }
    render(){
     
      return (<div>
          <button onClick={()=>{this.addfn("LISI")}}>子页面点击</button>
      </div>)
      
    }
   
    
}


export default Index