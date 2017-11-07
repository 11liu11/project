import React,{Component} from 'react';
import { Router, Route, Link , hashHistory} from 'react-router'
import {store,hotelActions,hotelActionsType} from "../../../redux"
import $ from 'jquery';
class Hotefloat extends Component {
    constructor(props){
        super(props);
       
    }
    changeFn(){
         $('#sort').css({display:'none'});
        $('#mark').css({display:'none'});
        store.dispatch(hotelActions[hotelActionsType.CHANGEPRICE]())
    }
    render(){
      
        return(
                <div className='sort' id="sort">
                    <ul>
                        <li onClick={()=>{this.changeFn()}}>价格排序</li>
                        <li>销量排序</li>
                        <li>销量排序</li>
                        <li>销量排序</li>
                    </ul>
                </div>
        )
    }
}


export default Hotefloat