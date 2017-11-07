import React, { Component } from "react"
import { Router, Route, Link , hashHistory} from 'react-router'

class LoginTwo extends Component {
	constructor(props){
    	super(props)
    	this.state = {
            data:'LoginTwo'
        }
	}
	render(){
		return (<div className="login_content">
					<p className="emali">
						<input type="text" placeholder="您的邮箱/手机号"/>
					</p>
					<p className="pwd">
						<input type="text" placeholder="您的密码"/>
					</p>
				</div>)
	}
}
export default LoginTwo






