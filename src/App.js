import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import {News} from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 20;
  render() {
    return (
      <>
      <Router>
        <div>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<News key="general" pagesize={this.pageSize} country='in' category='general'/>}></Route>
          <Route exact path='/sports' element={<News key="sports" pagesize={this.pageSize} country='in' category='sports'/>}/>
          <Route exact path='/health' element={<News key="health" pagesize={this.pageSize} country='in' category='health'/>}/>
          <Route exact path='/science' element={<News key="science" pagesize={this.pageSize} country='in' category='science'/>}/>
          <Route exact path='/technology' element={<News key="technology" pagesize={this.pageSize} country='in' category='technology'/>}/>
          <Route exact path='/business' element={<News key="business" pagesize={this.pageSize} country='in' category='business'/>}/>
          <Route exact path='/entertainment' element={<News key="entertainment" pagesize={this.pageSize} country='in' category='entertainment'/>}/>
          <Route exact path='/general' element={<News key="general" pagesize={this.pageSize} country='in' category='general'/>}/>
        </Routes>        
        </div>
        
      </Router>
      </>
    )
  }
}
