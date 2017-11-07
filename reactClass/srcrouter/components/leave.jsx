import React, { Component } from 'react'
import {Link} from "react-router"
import { withRouter } from 'react-router'
class Leave extends Component{

    constructor(props){
      super(props)
      this.state={num:null}
      this.props.router.setRouteLeaveHook(
             this.props.route,
             this.routerWillLeave.bind(this))
         

    }
    routerWillLeave(nextLocation) {
      // 返回 false 会继续停留当前页面，
      // 否则，返回一个字符串，会显示给用户，让其自己决定
      console.log(this)
        var state=false
        if(this.state.num===null){
            setTimeout(()=>{
            this.setState({
                num:1
            })
            this.props.history.push(nextLocation.pathname)
            },2000)
            return state
        }else{
            return true
        }
      
        // return '确认要离开？';
    }
    fn(){
        this.props.history.push("/data")
    }
    render(){
      
      return (<div>这里是页面离开的钩子函数
            <button onClick={()=>{this.fn()}}>点击</button> 
      </div>)
      
    }
   
    
}


export default withRouter(Leave)