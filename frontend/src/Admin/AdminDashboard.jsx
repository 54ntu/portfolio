import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import AdminHomepage from './AdminHomepage'
import Navbar from '../Components/Navbar'

const AdminDashboard = () => {
  return (
    <>
        <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<AdminHomepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default AdminDashboard