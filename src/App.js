import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import AddUser from './pages/addUser';
import EditUser from './pages/editUser';
import ManageUsers from './pages/manageUsers';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/manage" element={<ManageUsers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
