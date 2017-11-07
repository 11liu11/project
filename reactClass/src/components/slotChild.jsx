import React, { Component } from 'react'

class Style extends Component{

    constructor(props){
       super(props)
    }

   

    render(){
      return (
        <div>
          <p>这里是子组件</p>
          {this.props.children}
        </div>
      )
    }
    
    
}


export default Style