import React, { Component } from 'react'
import {Link} from "react-router"
import {store,proActions} from "../../redux"

class Index extends Component{

    constructor(props){
      super(props)
     
      this.state={
        name:store.getState().pro.name,
        unsubscribe:store.subscribe(()=>{
          this.setState({
            name:store.getState().pro.name
          })
        })
      }
      
    }
    componentWillUnmount(){
      this.state.unsubscribe()
    }
    render(){
     
      return (<div>
        <h2>二级路由</h2>
        <Link to="/pro/child" >子页面路由</Link><br/>
        <p>{this.state.name}</p>
    
        {this.props.children}
      </div>)
      
    }
   
    
}


export default Index