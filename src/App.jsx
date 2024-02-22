import React from 'react'
import FindCoder from './Compenets/FindCoder'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import MenuBlock from './Compenets/MenuBlock'
import Explore from './Compenets/Explore'
import Hire from './Compenets/Hire'
import Dev from './Compenets/Dev'
import Challenges from './Compenets/Challenges'
import Home from './CRUD/Home'
import CreateUser from './CRUD/CreateUser'
import User from './CRUD/User'
import EditUser from './CRUD/EditUser'

function App() {
  return (
    <div>
      {/* <BrowserRouter>
      <FindCoder/>
      <Routes>
        <Route element={<Explore/>}path='/explore'></Route>
        <Route element={<Hire/>}path='/hire'></Route>
        <Route element={<Dev/>}path='/dev'></Route>
        <Route element={<Challenges/>}path='/challenges'></Route>

      </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
      <Home/>
      <Routes>
        
        <Route element={<CreateUser/>} path='/'></Route>
        <Route element={<EditUser/>} path='/edit/:abc'></Route>
        <Route element={<User/>} path='/user'></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
