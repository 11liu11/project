import React, { Component } from 'react'
import SlotChild from "./slotChild"
import SlotChild2 from "./slotChild2"
class Style extends Component{

    constructor(props){
      super(props)
    }

  

    render(){
      // return (<div>
      //     <SlotChild>
      //         <p>父组件的东西</p>
      //         <p>父组件的东西22</p>
      //     </SlotChild>
      
      // </div>)
      var one=<p>这里有故事</p>


       return (<div>

          <SlotChild2 one={one} two></SlotChild2>
            
      </div>)
    }
    
    
}


export default Style