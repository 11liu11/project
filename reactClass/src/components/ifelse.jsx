import React, { Component } from 'react'

class Style extends Component{

    constructor(props){
      super(props)
      this.state={
        state:true,
      }
      
    }

    fn(){
      this.setState({
        state:!this.state.state
      })
    }

    render(){
        var ele=null;
        if(this.state.state){
          ele=<p>哈哈</p>
        }else{
          ele=<p>嘿嘿</p>
        }

      // return (<div>
      //   {ele}
      //   <button onClick={()=>{this.fn()}}>点击</button>
      // </div>)

        // return (<div>
        //     {this.state.state?<p>哈哈</p>:<p>嘿嘿</p>}
        //     <button onClick={()=>{this.fn()}}>点击</button>
        // </div>)

         return (<div>
            {this.state.state&&<p>哈哈</p>}
            <button onClick={()=>{this.fn()}}>点击</button>
        </div>)

    }
    
    
}


export default Style