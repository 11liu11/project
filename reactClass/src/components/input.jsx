import React, { Component } from 'react'

class Style extends Component{

    constructor(props){
      super(props)
      this.state={
          textinput:"tn",
          textval:"",
          name:"",
          enname:"",
          cnname:"",
          text:"",
          checkbox:"",
          radio:"",
          textarea:""
      }
      
    }

    changefn(e){
      console.log(e)
      this.setState({
        textinput:e.target.value.toUpperCase()
      })
    }
    changeFnSelect(e){
      // console.log(eval("("+e.target.value+")"))
      console.log(eval("("+e.target.value+")"))
      var obj=eval("("+e.target.value+")")
      this.setState({
        enname:obj.enname,
        cnname:obj.cnname,
        name:e.target.value
      })
     
    }
    gethtmlfn(e){
      console.log(e)
         this.setState({
            cnname:e.target.innerHTML
        })
    }

    changeFnAll(e){
      console.log(e.target.checked)
      
      var data=e.target.type=="checkbox"||e.target.type=="radio"?e.target.checked:e.target.value
      this.setState({
        [e.target.name]:data
      })
    }
    render(){

        //  return (
        //    <div>
        //        <input type="text" value={this.state.textinput} onChange={(event)=>{this.changefn(event)}} onBlur={()=>{this.setState({textval:this.state.textinput.toUpperCase()})}}/>
        //         {/* <p>{this.state.textval}</p> */}
        //    </div>
          
        //  )
        // return (
        //   <div>
        //         <select value={this.state.name} onChange={(e)=>{this.changeFnSelect(e)}}>
        //             <option value='{"enname":"one","cnname":"第一"}'>第一</option>
        //             <option value='{"enname":"two","cnname":"第二"}'>第二</option>
        //             <option value='{enname:"three",cnname:"第三"}'>第三</option>
        //         </select>
        //         <p>{this.state.enname}</p>
        //         <p>{this.state.cnname}</p>
        //   </div>
        // )

        return (
           <div>
                <p>表单</p>    
                <input type="checkbox" value={this.state.checkbox} onChange={(e)=>{this.changeFnAll(e)}} name="checkbox"/>
                <input type="radio" value={this.state.radio} onChange={(e)=>{this.changeFnAll(e)}} name="radio"/>

                <input type="text" value={this.state.text} onChange={(e)=>{this.changeFnAll(e)}}  name="text"/>

                
                <textarea name="" id="" cols="30" rows="10" value={this.state.textarea} onChange={(e)=>{this.changeFnAll(e)}}        name="textarea"></textarea>
                <p>{this.state.checkbox.toString()}</p>
                <p>{this.state.radio.toString()}</p>

                <p>{this.state.text}</p>
                <p>{this.state.textarea}</p>
            </div> 

        )

    }
    
    
}


export default Style