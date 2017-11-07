import React, { Component } from "react"
import { Router, Route, Link , hashHistory} from 'react-router'
import {connect} from "react-redux"
class Login extends Component {
	constructor(props){
    	super(props)
			console.log(this.props)
    	this.state = {
            data:'Login'
        }
	}
	loginfn(){
		console.log(this.props.login)
		const {phone,phoneCode}=this.props.login
		const {history}=this.props
		fetch(`/mfw/login_code?phone=${phone}&phoneCode=${phoneCode}`).then((res)=>{
				return res.json()
		}).then((data)=>{
				console.log(data)
				localStorage.setItem("userId",data.data)
				history.push("/")
		})	
	}
	render(){
		return (<div className='login'>
				<header className="login_header">
					<Link to='/'>
						<img src="images/jl/logo200x54.png" alt=""/>
					</Link>
				</header>
				<section>
					<ul className="login_list">
						<Link to='/login_one' activeClassName="bg">
							<li>普通登录</li>
						</Link>

						<Link to='/login_two' activeClassName="bg">
							<li>短信验证码登录</li>
						</Link>

					</ul>

					<div className="login_container">
						{this.props.children}
						<p className="tishi"><span>忘记密码?</span></p>
						<div className="login_button">
							<button className="login" onClick={()=>{this.loginfn()}}>登录</button>
							<button className="btn">快速注册</button>
						</div>

					</div>
				</section>


				<div className="long_footer">
					<div className="tit">
						<span>使用第三方账号登录</span>
					</div>
					<ul className="foot">
						<li>
							<p className='xl'></p>
							<span>新浪微博</span>
						</li>
						<li>
							<p className='qq'></p>
							<span>QQ登录</span>
						</li>
					</ul>
				</div>



			</div>)
	}
}

const select=(state)=>{
		console.log(state)
		return {
				login:state.login
		}
}


export default connect(select)(Login)






