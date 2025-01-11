import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import HomeworkOne from './pages/HomeworkOne'
import HomeworkTwo from './pages/HomeworkTwo'
import HomeworkThree from './pages/HomeworkThree'

function App() {
  return (
    <div>
      <Routes>
        <Route index element = {<MainLayout><HomeworkOne /></MainLayout>} />
        <Route path='/homeworkTwo' element = {<MainLayout><HomeworkTwo /></MainLayout>} />
        <Route path='/homeworkThree' element = {<MainLayout><HomeworkThree /></MainLayout>} />
      </Routes>
    </div>
  )
}

export default App
