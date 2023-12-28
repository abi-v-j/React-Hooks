import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UseStateHook from './UseStateHook'
import UseEffectHook from './UseEffectHook'
import UseRefHook from './UseRefHook'
import Parent from './UseContext/Parent'
import UseReducerHook from './UseReducer'
import UseCallBackHook from './UseCallBackHook'
import UseMemoHook from './UseMemoHook'
import ParentComponent from './UseImperativeHandle'


const App = () => {
  return (
    <Routes>
      <Route path='/UseStateHook' element={<UseStateHook/>}/>
      <Route path='/UseEffectHook' element={<UseEffectHook/>}/>
      <Route path='/UseRefHook' element={<UseRefHook/>}/>
      <Route path='/Parent' element={<Parent/>}/>
      <Route path='/UseReducerHook' element={<UseReducerHook/>}/>
      <Route path='/UseCallBackHook' element={<UseCallBackHook/>}/>
      <Route path='/UseMemoHook' element={<UseMemoHook/>}/>
      <Route path='/UseImperativeHandle' element={<ParentComponent/>}/>
    </Routes>
  )
}

export default App