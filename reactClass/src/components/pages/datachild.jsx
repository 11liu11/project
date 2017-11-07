import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Child extends Component{

    constructor(props){
    
      super(props)
   

      const {fn}=this.props
        
      this.fn=fn
      this.state={
        statenum:1
      }
     
    }

    
    render(){
     
      return (<div>这里是子组件
      
        <button onClick={()=>{this.fn(this.state.statenum)}}>点击</button>

      </div>)
    }
  
}

Child.propTypes = {
  fn:PropTypes.string
}


export default Child