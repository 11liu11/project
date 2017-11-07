import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { Router, Route, Link ,IndexRoute,hashHistory,browserHistory} from 'react-router'
import Index from "./components/index.jsx"
import Data from "./components/data.jsx"
import DataChild from "./components/dataChild.jsx"
import DataChild2 from "./components/dataChild2.jsx"
// import More from "./components/more.jsx"
import More1 from "./components/more1.jsx"
import More2 from "./components/more2.jsx"
import Leave from "./components/leave.jsx"

import "./style/reset.css"
ReactDOM.render((
  <Router history={hashHistory}>
    {/* <IndexRoute component={ Index }/> */}
    <Route path="/" component={Index} >
        <Route path="data" component={Data}>
            <Route path="datachild/:id/:idd" component={DataChild} />
            <Route path="datachild2" component={DataChild2}  onEnter={(nextState, replaceState, callback)=>{
          console.log(nextState)
        }}/>
        </Route>
        <Route path="more" getComponent={(location,cb)=>{
            require.ensure([],(require)=>{
                cb(null,require("./components/more.jsx").default)
            },"More")
        }} >
          <Route path="morechild"  component={{More1:More1,More2:More2}}/>
        </Route> 
        <Route path="leave" component={Leave} >
          
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


