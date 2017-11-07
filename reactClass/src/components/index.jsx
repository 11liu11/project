import React, { Component } from 'react'
import {Link} from "react-router"
// import Child from "./pages/child.jsx"
class Index extends Component{

    constructor(props){
      super(props)
      // this.props.num=this.props.num+1
      // this.state={
      //     type:true,
      //     num:parseInt(this.props.num)+1
      // }
      // setTimeout(()=>{
      //   this.setState({
      //     num:this.state.num+1
      //   })
      // },1000)

      // console.log(this.props)

    }

    componentWillMount(){
      // console.log("componentWillMount")
    }
    render(){
      // console.log("render")

      return (<div>这里是首页
        <Link to="/data">数据传递</Link>
      
      </div>)
      // return (<div>这里是首页{this.state.num}</div>)
    }
    componentDidMount(){
      // console.log("componentDidMount")
    } 
    
}


export default Index