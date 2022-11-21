import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Component/Sidebar/Sidebar'

const Home = () => {
  return (
    <div>
      <header>

        <Sidebar/>
      </header>
      <main>
        <Outlet />
      
      </main>
    </div>
  )
}

export default Home
