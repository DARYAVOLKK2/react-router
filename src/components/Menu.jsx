import React from 'react'
import {NavLink} from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <NavLink
        className={({isActive}) => (isActive ? 'activeLink' : 'link')}
        to="/"
        end
      >
        Home
      </NavLink>
      <NavLink
        to="/coursers"
        className={({isActive}) => (isActive ? 'activeLink' : 'link')}
      >
        {' '}
        Coursers
      </NavLink>
      <NavLink
        to="/about"
        className={({isActive}) => (isActive ? 'activeLink' : 'link')}
      >
        About
      </NavLink>
      <NavLink
        to="/contacts"
        className={({isActive}) => (isActive ? 'activeLink' : 'link')}
      >
        Contacts
      </NavLink>
    </nav>
  )
}

export default Menu
