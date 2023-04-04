import React, {useState, useCallback} from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Users from './user/pages/Users'
import Auth from './user/pages/Auth'
import NewPlace from './places/pages/NewPlace'
import UserPlaces from './places/pages/UserPlaces.jsx'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import UpdatePlace from './places/pages/UpdatePlace'
import {AuthContext} from './shared/context/auth-context'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(() => {
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false)
  }, [])


  return <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
    <Router>
    <MainNavigation />
    <main>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/:userId/places' element={<UserPlaces />} />
        <Route path='/places/new' element={<NewPlace />} />
        <Route path='/places/:placeId' element={<UpdatePlace />} />
        <Route path='/auth' element={<Auth />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </main>
  </Router>
  </AuthContext.Provider>
};

export default App;
