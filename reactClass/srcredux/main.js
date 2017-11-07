import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { Router, Route, Link ,IndexRoute,hashHistory,browserHistory} from 'react-router'
import Parent from "./components/parent.jsx"
import Child1 from "./components/child1.jsx"
import Child2 from "./components/child2.jsx"


import "./style/reset.css"
ReactDOM.render((
  <Router history={hashHistory}>
    {/* <IndexRoute component={ Index }/> */}
    <Route path="/" component={Parent} >
        <Route path="child1" component={Child1}>
        </Route>
       
         
        <Route path="Child2" component={Child2} >
          
        </Route> 
    </Route>
  </Router>
), document.getElementById('app'))

// const routes = {
//   path: '/',
//   component: Index,
//   childRoutes: [
//     { 
//       path: 'data', 
//       component: Data, 
//       childRoutes: [
//         { path: 'datachild', component: DataChild },
//       ]
//     },
//     { 
//       path: 'More', 
//       getComponent:(location,cb)=>{
//         require.ensure([],(require)=>{
//             cb(null,require("./components/more.jsx").default)
//         },"More")
//       } , 
     
//     }
//   ]
// }

// ReactDOM.render((
//   <Router history={hashHistory} routes={routes}>
    
//   </Router>
// ), document.getElementById('app'))


