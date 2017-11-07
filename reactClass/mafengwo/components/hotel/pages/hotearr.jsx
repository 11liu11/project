import React,{Component} from 'react';

import { Router, Route, Link , hashHistory} from 'react-router'


class HotelItem extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
      var ele=this.props.prop.hotel.hoteList.map((j,index)=>{
                   var item=(<li key={index}>
                       <dl>
                           <dt><img src={j.left_img} alt=""/></dt>
                           <dd>
                               <p className='text-nobr'>{j.name_tex}</p>
                               <p>{j.Enname_tex}</p>
                               <p>{j.pingjia}{j.pingjia_2}{j.youji}{j.youji_2}</p>
                               <p className="text-nobr1">{j.address_tex} <span>{j.price} <time>起</time></span></p>
                           </dd>
                       </dl>
                   </li>)
            return item
         })
        return(
           
                <div className='lists'>
                    <ul>
                        {ele}
                    </ul>
                </div>
                
        )
    }
}

export default HotelItem