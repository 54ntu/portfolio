import { useState } from 'react'
import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Appcomponent from './Appcomponent1';
import AdminDashboard from './Admin/AdminDashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Appcomponent/> }/>
        <Route path='/admin' element={ <AdminDashboard/> }/>
       
      </Routes>
    </Router>
  );
}

export default App
