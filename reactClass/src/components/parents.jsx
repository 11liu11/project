import React, { Component } from 'react'
import Brother1 from "./pages/brother1"
import Brother2 from "./pages/brother2"
import Brother3 from "./pages/brother3"
class Style extends Component{

    constructor(props){
      super(props)
      
    }

    

   
    render(){

        return (
          <div>
              <Brother1></Brother1>
              <Brother2></Brother2>
              <Brother3></Brother3>
          </div>
        )
    }
    
    
}


export default Style