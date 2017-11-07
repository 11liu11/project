import React,{Component} from 'react';
import hoteldata from '../../data/data_addtess.js';
import { Router, Route, Link , hashHistory} from 'react-router'
import {store,hotelActions,hotelActionsType} from "../../redux"
import {connect} from "react-redux"
import Hotearr from "./pages/hotearr.jsx"
import Hotenav from "./pages/hotenav.jsx"
import Hotefloat from "./pages/hotefloat.jsx"
import $ from 'jquery';
class Hotellist extends Component {
    constructor(props){
        super(props);
      
        const {address,startdate,enddate}=this.props.hotel
        if(!address&&!startdate&&!enddate){
            this.props.history.push("/Address")
        }
     
        this.state={
            address,
            startdate,
            enddate
        }
        store.dispatch(hotelActions[hotelActionsType.FETCHDATA](address,startdate,enddate))
        
    }
    hideFn(){
        $('#sort').css({display:'block'});
        $('#mark').css({display:'block'});
    }
    render(){
      
        return(
            <div className='box'>
                <div className='heads'>

                    <div className='heads_title'>
                        <Link to='/address'>
                            <span className='angle_left'></span>
                        </Link>
                        <dl>
                             <dt>上海</dt>
                             <dd>12月-10日--12月-11日</dd>
                        </dl>

                            <span className='search'></span>

                    </div>
                    <Hotenav />
                </div>
               <Hotearr prop={this.props}/>  
                <Hotefloat />
                <div className='mark' id="mark">

                </div>
            </div>
        )
    }
}

const select=(state)=>{
    return {
        hotel:state.hotel
    }
}

export default connect(select)(Hotellist)