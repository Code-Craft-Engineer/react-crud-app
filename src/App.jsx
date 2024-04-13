import React, { useState } from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AddForm from './components/AddForm'
import Table from './components/Table'
import EditUser from './components/EditUser'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className='dark:bg-gray-800 h-screen'>
          <Header />
          <Routes>
            <Route index element={<Table />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/add' element={<AddForm />}></Route>
            <Route path='/edit/:id' element={<EditUser />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
