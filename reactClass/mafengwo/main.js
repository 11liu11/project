import React, { Component } from "react"
import { Router, Route, Link , IndexRoute, hashHistory , browserHistory} from 'react-router'
import ReactDom from "react-dom"

import Index from "./components/index.jsx"
import Login from "./components/login.jsx"
import Login_one from "./components/login/login_one.jsx"
import Login_two from "./components/login/login_two.jsx"

import Address from "./components/hotel/address.jsx"
import Hotellist from "./components/hotel/hotellist.jsx"

import "./static/css/reset.css"

import "./static/css/swiper.min.css"
import "./static/css/common.css"
import "./static/css/animate.css"
import "./static/css/style.css"

import axios from 'axios';
import {store} from "./redux"
import {Provider} from "react-redux"

import 'antd-mobile/dist/antd-mobile.css';
// import 'antd/dist/antd.css';
ReactDom.render((
	<Provider store={store}>
		<Router history={hashHistory}>
				<Route path="/" component={Index} ></Route>
				<Route path="/login" component={Login} >
					<Route path="/login_one" component={Login_one} ></Route>
					<Route path="/login_two" component={Login_two} ></Route>
				</Route>
				<Route path="/address" component={Address} ></Route>
				<Route path="/hotellist" component={Hotellist} ></Route>
		</Router>
	</Provider>
	
),document.getElementById("app"));



