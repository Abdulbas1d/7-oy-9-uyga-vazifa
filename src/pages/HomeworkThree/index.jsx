import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './page/Home'
import PostDetails from './page/PostDetails'

function HomeworkThree() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/postDetails/:id' element={<PostDetails />}></Route>
      </Routes>
    </div>
  )
}

export default HomeworkThree