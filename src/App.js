import React from 'react'
import './App.css'
import {BrowserRouter  as  Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home'

export default function App() {
  return (
    <div style={{height:'100vh',width:'100vw',background:'linear-gradient(to right, #dc2424, #4a569d)'}}>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
    </div>
  )
}
