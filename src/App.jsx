import React, { useEffect } from 'react'
import Layout from './componenets/layout/Layout'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './componenets/pages/Home/Home'
import Login from './componenets/Auth/Login'
import { useDispatch, useSelector } from 'react-redux'
import ProtectedRoute from './componenets/Auth/ProtectedRoute'
import Trading from './componenets/pages/Trading/Trading'
import { useGetCurrentUserQuery } from './redux/api'
import { setUser } from './redux/authSlice'

const App = () => {
  const { showLogin } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data } = useGetCurrentUserQuery()

  useEffect(() => {
    if (data?.success) {
      dispatch(setUser(data.name));
    }
  }, [data, dispatch]);
  useEffect(() => {
    if (showLogin) {
      navigate('/')
    }
  }, [showLogin, navigate])
  return (
    <>
      {showLogin && <Login />}

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Protected Route */}
        <Route element=<ProtectedRoute />>
          <Route path='/trading' element=<Trading /> />
        </Route>
      </Routes>

    </>
  )
}

export default App
