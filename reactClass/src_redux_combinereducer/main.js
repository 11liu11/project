import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { Router, Route, Link ,IndexRoute,hashHistory,browserHistory} from 'react-router'

import Index from "./components/index.jsx"
import pcParent from "./components/pc/index.jsx"
import pcChild from "./components/pc/child.jsx"
import proParent from "./components/pro/parent.jsx"
import proChild from "./components/pro/child.jsx"
import {store} from "./redux"
import {Provider} from "react-redux"

import "./style/reset.css"
ReactDOM.render((
  <Provider store = { store }>
      <Router history={hashHistory}>
        {/* <IndexRoute component={ Index }/> */}
        <Route path="/" component={Index} >
            <Route path="pc" component={pcParent}>
              <Route path="child" component={pcChild}>

              </Route>
            </Route>
            <Route path="pro" component={proParent}>
              <Route path="child" component={proChild}>

              </Route>
            </Route>
            
            
        </Route>
      </Router>

  </Provider>
  
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


