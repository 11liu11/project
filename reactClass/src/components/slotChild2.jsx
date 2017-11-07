import React, { Component } from 'react'

class Style extends Component{

    constructor(props){
       super(props)
       console.log(props===this.props)
       console.log()
    }

   

    render(){
      return (
        <div>
          <p>这里是子组件</p>
          {this.props.one}
          {this.props.two.toString()}
        </div>
      )
    }
    
    
}


export default Style