import React, { Component } from "react"
import { Router, Route, Link , hashHistory} from 'react-router'

class Index extends Component {
	constructor(props){
    	super(props)
    	this.state = {
            data:'Index'
        }
				console.log(localStorage.getItem("userId"))
			if(!localStorage.getItem("userId")){
					this.props.history.push("/login")
			}
	}
	render(){
		return (<div className='box'>
				<header>
					<div className="left"><img src="images/jl/logo.png" alt=""/></div>
					<div className="search">
						<input type="text" placeholder="搜索目的地/攻略/游记"/>
						<i className="fa fa-search"></i>
					</div>

					<Link to='/login'>
					<div className="right">
						登录
					</div>
					</Link>

				</header>
				<section>
					<div className="banner">
						<div className="swiper-container">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<img src="images/banner/wKgBZ1n4gtyAGsTHAAbkPH7RlmA37.jpeg" alt=""/>
								</div>
								<div className="swiper-slide">
									<img src="images/banner/wKgBZ1n2-ieAY1LVAAWOqUH3Qoc03.jpeg" alt=""/>
								</div>
								<div className="swiper-slide">
									<img src="images/banner/wKgBZ1n0SUWAMnvPAAZvxW6Q8hI30.jpeg" alt=""/>
								</div>
							</div>
							<div className="swiper-pagination"></div>
						</div>
					</div>
					<div className="banner_list">
						<div className="banner_img gl">
							<p className=""></p>
							<span>找攻略</span>
						</div>
						<div className="banner_img yj">
							<p className=""></p>
							<span>看游记</span>
						</div>
						<div className="banner_img dr">
							<p className=""></p>
							<span>问达人</span>
						</div>
						<div className="banner_img jb">
							<p className=""></p>
							<span>结伴</span>
						</div>


							<div className="banner_img jd">
								<Link to='/Address'>
									<p className=""></p>
									<span>酒店</span>
								</Link>
							</div>

						<div className="banner_img lx">
							<p className=""></p>
							<span>旅行商城</span>
						</div>
						<div className="banner_img jp">
							<p className=""></p>
							<span>机票</span>
						</div>
						<div className="banner_img dd">
							<p className=""></p>
							<span>当地玩乐</span>
						</div>

					</div>
					<div className="tuijian">》  推荐攻略  《</div>
					<div className="main">
						<div className="wrap">
							<div className="tit">秋雨绵绵，此情可待：一段无锡的邂逅之旅
								<img src="images/wKgBs1diFRKAMMptAAAIpExA3RM367.png" alt="" className='first'/>
							</div>
							<dl>
								<dt><img src="images/wKgBZ1n4gt-AZsiSAAMBMDaySb411.jpeg" alt=""/></dt>
								<dd>
									<p>想去无锡，已经是很久以前的事情。刚毕业那会在上海工作，没到周末，同组的师兄都...</p>
									<p><span>5337浏览</span> <span>1024小虎牙</span>
									<img src="images/wKgBZ1nuo0aAJDg8AACepq75XZM53.jpeg" alt=""/></p>
								</dd>
							</dl>
						</div>
						<div className="wrap">
							<div className="tit">秋雨绵绵，此情可待：一段无锡的邂逅之旅
								<img src="images/wKgBs1diFRKAMMptAAAIpExA3RM367.png" alt="" className='first'/>
							</div>
							<dl>
								<dt><img src="images/wKgBZ1n4gt-AZsiSAAMBMDaySb411.jpeg" alt=""/></dt>
								<dd>
									<p>想去无锡，已经是很久以前的事情。刚毕业那会在上海工作，没到周末，同组的师兄都...</p>
									<p><span>5337浏览</span> <span>1024小虎牙</span>
									<img src="images/wKgBZ1nuo0aAJDg8AACepq75XZM53.jpeg" alt=""/></p>
								</dd>
							</dl>
						</div>
					</div>
				</section>
			</div>)
	}
}
export default Index






