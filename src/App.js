import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hooks from './Hooks/App'

const App = () => {
  return (
    <Routes>
      <Route path='/Hooks/*' element={<Hooks/>}/>
    </Routes>
  )
}

export default App