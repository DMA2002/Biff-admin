import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"
import logo from "../../Images/logo.png"


const Sidebar = () => {
  return (
    <div>
        <nav>
        <div className='parent'>
            <div className='enfant1'>
                <img src={logo} alt="" />
            </div>
            <div className='enfant2'>
                <div className='recherche'>
                    <input type="Search" className='input' />
                    <button className='recher'>Recherche</button>
                </div>
                <div>
                    <button className='deco'>Se deconnecter</button>
                </div>
            </div>
        </div>
        
        <div className='menu2'>
            <div >
                <Link className='items' to="/list">Articles</Link>
            </div>
            <div>
                <Link className='items' to="/categorie">Categories</Link>
            </div>
            <div>
                <Link className='items' to="/client">Clients</Link>
            </div>
            <div>
                <Link className='items' to="/commande"> Commandes</Link>
            </div>
            
        </div>
        </nav>
    </div>
  )
}

export default Sidebar