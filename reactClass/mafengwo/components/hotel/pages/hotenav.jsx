import React,{Component} from 'react';
import { Router, Route, Link , hashHistory} from 'react-router'
import $ from "jquery"
class Hotenav extends Component {
    constructor(props){
        super(props);
        
    }
    hideFn(){
        $('#sort').css({display:'block'});
        $('#mark').css({display:'block'});
    }
    render(){
      
        return(
           
                    <nav>
                        <ul>
                            <li onClick={()=>{this.hideFn()}}>
                                <span><i className="fa fa-long-arrow-down"></i></span>
                                综合排序
                            </li>
                            <li>
                                <span><i className="fa fa-list-ul"></i></span>
                                筛选
                            </li>
                        </ul>
                    </nav>
                
        )
    }
}



export default Hotenav