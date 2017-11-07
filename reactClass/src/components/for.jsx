import React, { Component } from 'react'

class Style extends Component{

    constructor(props){
      super(props)
      this.state={
        // list:[1,2,3,4,5],
        list:[
          {id:1,val:"a"},
          {id:2,val:"b"},
          {id:3,val:"c"},
          {id:4,val:"d"},
          {id:5,val:"e"}
        ]
      }
      
    }

    fn(){
      this.setState({
        // list:this.state.list.sort(()=>{
        //   return Math.random()>0.5?1:-1
        // // })
        // list:[,1,3,5,4]
      list:[
         
          {id:2,val:"b"},
           {id:1,val:"a"},
          {id:3,val:"c"},
         
          {id:5,val:"e"},
           {id:4,val:"d"}
        ]
      })
    }
    render(){
          var ele=null;
          ele=this.state.list.map((i,index)=>{
              return <li key={index}>{i.val}</li>
          })
         return (<ul>
          {ele}
          <button onClick={()=>{this.fn()}}>点击</button>
        </ul>)

    }
    
    
}


export default Style