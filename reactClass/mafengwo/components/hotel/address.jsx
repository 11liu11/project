import React, { Component } from 'react';
import { Router, Route, Link , hashHistory} from 'react-router'
import { DatePicker,List } from 'antd-mobile';
import {store,hotelActions,hotelActionsType} from "../../redux"
class Address extends Component{
    constructor(props){
        super(props)
        const nowTimeStamp = Date.now();
        const twoTimeStamp=nowTimeStamp+(1000*60*60*24*2)

        const now = new Date(nowTimeStamp);
        const end=new Date(twoTimeStamp)
        this.state={
            address:"上海",
            date:now,
            startdate:now,
            enddate:end,
            startobjdate:null,
            endobjdate:null
        }
        // 改变redux中的数据
        var obj={
                address:this.state.address,
                startdate:this.formatDate(now) ,
                enddate:this.formatDate(end)
            }
             store.dispatch(hotelActions[hotelActionsType.CHANGEINFO](obj))

    }
    // 格式化日期
   formatDate(date) {
        var newdate=new Date(date)
        
        var year=newdate.getFullYear()
        var month=newdate.getMonth()+1
        var day=newdate.getDate()
        console.log(year,month,day)
      
        return {
            year,
            month,
            day
        };
    }
    changedate(type,date){
        console.log(date)
        if(type=="start"){
            
            var data=this.formatDate(date) 
            console.log(data)

            this.setState({
                startdate:date,
                startobjdate:data
            })
           
             var obj={
                address:this.state.address,
                startdate:data,
                enddate:this.state.endobjdate
            }
        }else{
             var data=this.formatDate(date)
                this.setState({
                    enddate:date,
                    endobjdate:data
                })
              var obj={
                address:this.state.address,
                startdate:this.state.startobjdate,
                enddate:data
            }
        }
       
        store.dispatch(hotelActions[hotelActionsType.CHANGEINFO](obj))
    }
    render(){
        return (<div className='address'>
                   <div className='address_header'>
                        <img src="images/jl/logo.png" alt=""/>
                        <ul>
                            <li>官网首页</li>
                            <li><i className="fa fa-search"></i></li>
                        </ul>
                   </div>
                   <div className='address_main'>
                        <div className='am_top'>
                            <span>目的地/酒店</span>
                            <h5>上海<i className="fa fa-angle-right"></i></h5>
                            <dl onClick={()=>{this.get_address()}}>
                                <dt><i className="fa fa-map-marker"></i></dt>
                                <dd>我的位置</dd>
                            </dl>
                        </div>
                        <div className='am_main'>
                            <ul>
                                <li>
                                     <DatePicker
                                        mode="date"
                                        title="开始"
                                        extra="Optional"
                                        value={this.state.startdate}
                                        onChange={(date)=>{this.changedate("start",date)}}
                                        >
                                        <List.Item arrow="horizontal">开始</List.Item>
                                    </DatePicker>
                                    <span>入住时间</span>
                                    <h5><span>11日</span>
                                    <i className="fa fa-angle-right"></i>
                                        <p>
                                            <time>12月</time>
                                            <b>周日</b>
                                        </p>

                                    </h5>
                                </li>
                                <li>
                                    <DatePicker
                                        mode="date"
                                        title="结束"
                                        extra="Optional"
                                        value={this.state.enddate}
                                        onChange={(date)=>{this.changedate("end",date)}}
                                        >
                                        <List.Item arrow="horizontal">结束</List.Item>
                                    </DatePicker>
                                    <span>离开时间</span>
                                    <h5><span>11日</span>
                                        <p>
                                            <time>12月</time>
                                            <b>周日</b>
                                        </p>
                                     </h5>
                                </li>
                            </ul>
                            <Link to='/Hotellist'>
                                <button>查看</button>
                            </Link>
                        </div>
                   </div>



                   <div className='address_footer'>
                        <ul className='af_ul'>
                            <li>
                                <i className="fa fa-folder-open"></i><span>我的收藏</span>
                            </li>
                            <li>
                                <i className="fa fa-file-text-o"></i><span>订单管理</span>
                            </li>
                        </ul>
                   </div>
            </div>)
    }

}
export default Address;