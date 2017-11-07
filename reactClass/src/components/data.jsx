import React, { Component } from 'react'

import DataChild from "./pages/datachild.jsx"
class Data extends Component{

    constructor(props){
      super(props)
      this.state={
        num:""
      }
      this.fn=this.fn.bind(this)
    }

    fn(data){
        console.log(this)
        this.setState({
          num:data
        })
    }

    render(){
      return (<div>这里是数据操作{this.state.num}<DataChild fn={this.fn}/> <button onClick={()=>{this.fn()}}>父按钮</button></div>)
    }
    
    
}


export default Data