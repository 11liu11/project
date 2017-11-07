import React, { Component } from "react"
import { Router, Route, Link , hashHistory} from 'react-router'
import {connect} from "react-redux"
import {loginActions,loginActionsType,store} from "../../redux"

class LoginOne extends Component {
	constructor(props){
    	super(props)
    	this.state = {
            data:'LoginOne',
						code:"",
						inputcode:"",
						phone:""
        }
			fetch("/mfw/get_code").then((res)=>{
					return res.json()
			}).then((data)=>{
				console.log(data)
				this.setState({
					code:data.data
				})
			})
	}
	getPhoneCode(){
		var init={ method: 'post',body:JSON.stringify({phone:this.state.phone,code:this.state.inputcode})};
			fetch(`/mfw/get_phonecode?phone=${this.state.phone}&code=${this.state.inputcode}`).then((res)=>{
					return res.json()
			}).then((data)=>{
				console.log(data)
			
			})
	}
	 changeFnAll(e){
      console.log(e.target.checked)
      
      var data=e.target.type=="checkbox"||e.target.type=="radio"?e.target.checked:e.target.value
      this.setState({
        [e.target.name]:data
      })
    }
		
	blurfn(type){
			if(type=="phone"){
					store.dispatch(loginActions[loginActionsType.CHANGEPHONE](this.state.phone))
			}else if(type=="code"){
					store.dispatch(loginActions[loginActionsType.CHANGECODE](this.state.code))
			}
	}	
	render(){
		return (<div className="login_content">
					<p className="phone">
						<input type="text" placeholder="您的手机号" onChange={(e)=>{this.changeFnAll(e)}} onBlur={()=>{this.blurfn("phone")}} name="phone"/>
					</p>
					<p className="yzpwd">
						<input type="text" placeholder="验证码" onChange={(e)=>{this.changeFnAll(e)}} name="inputcode"/>
						<span className="span">{this.state.code}</span>
					</p>
					<p className="dxpwd">
						<input type="text" placeholder="短信验证码" onChange={(e)=>{this.changeFnAll(e)}} name="code" onBlur={()=>{this.blurfn("code")}}/>
						<span className="yzm" onClick={()=>{
							this.getPhoneCode()
						}}>免费获取验证码</span>
					</p>
				</div>)
	}
}

const select=(state)=>{
		console.log(state)
		return {
				login:state.login
		}
}

export default connect(select)(LoginOne)






