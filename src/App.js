import React from "react"
import {Switch, Route} from 'react-router-dom'

import Home from "./components/Home"
import Login from "./components/Login"
import NotFound from './components/NotFound'
import AllBlogs from './components/AllBlogs'
import BlogDetails from './components/BlogDetails'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css';

const App = () =>(
    <Switch>
      <Route exact path="/login" component ={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/blogs" component={AllBlogs} />
      <ProtectedRoute exact path="/blog/:url" component={BlogDetails} />
      <Route component={NotFound} />
    </Switch>
)

export default App;
