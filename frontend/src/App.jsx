import { useState } from 'react'
import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import AdminPanel from './AdminComponent/AdminPanel';
import Appcomponent from './Appcomponent1';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Appcomponent/> }/>
        <Route path='/admin' element={ <AdminPanel/> }/>
       
      </Routes>
    </Router>
  );
}

export default App
