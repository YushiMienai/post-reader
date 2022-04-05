import React, {useEffect} from 'react'
import {RootStateOrAny, useSelector} from 'react-redux'
// @ts-ignore
import {getToken} from '@actions/register'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import * as Views from './views'
import './App.css'
import 'semantic-ui-css/semantic.min.css'

function App() {
  const register = useSelector((state: RootStateOrAny) => state.register)

  useEffect(() => {
    getToken()
  }, [])

  return (
    <>
      {register.sl_token ?
        <Router>
          <Routes>
            <Route path='/' element={<Views.Posts/>}/>
          </Routes>
        </Router>
        :
        <Views.Login/>}
    </>
  )
}

export default App
