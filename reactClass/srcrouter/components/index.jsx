import React, { Component } from 'react'
import {Link} from "react-router"
import style from "../style/style.css"
class Index extends Component{

    constructor(props){
      super(props)
    }

    render(){
     
      return (<div>这里是首页
          
          <Link to="data">数据跳转父</Link><br/>
          <Link to="data/datachild/1/2" activeClassName={style.current}>数据跳转子</Link><br/>
          <Link to="data/datachild2" query={{name:1}} activeClassName={style.current}>数据跳转子query</Link><br/>
          <Link to="more/morechild" >多路由视图显示</Link><br/>
           {this.props.children}
      </div>) 
    }
}


export default Index