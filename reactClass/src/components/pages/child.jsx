import React, { Component } from 'react'

class Child extends Component{

    constructor(props){
      super(props)
      
      this.state={
        statenum:1
      }
      setTimeout(()=>{
        this.setState({
          statenum:2
        })
      },3000)
    }

    componentWillMount(){
      // console.log("componentWillMount2")
    }
    render(){
      console.log("render2")

      return (<div>这里是子组件{this.state.statenum}</div>)
    }
    componentDidMount(){
      // console.log("componentDidMount2")

    } 
    // componentWillReceiveProps(news){
    //   console.log(this.props.num)
    //   console.log(news)
    //   if(news.num==this.props.num){
    //     return false
    //   }
    // }
    shouldComponentUpdate(nextProps,nextState){
      console.log(nextProps,nextState)
      if(nextProps.num===this.props.num&&nextState.statenum===this.state.statenum){
        return false
      }
      
      return true
    }
}


export default Child