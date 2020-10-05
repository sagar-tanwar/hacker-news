import React from 'react'
import {ThemeConsumer} from '../contexts/theme'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <ThemeConsumer>
      {({theme, toggleTheme}) => (
        <div className='container p-5 space-between'>
          <nav>
            <NavLink 
              to='/'
              className='nav-link'
              activeStyle={{color: 'rgb(187, 46, 31)'}} 
              exact>
              Top
            </NavLink>
            <NavLink 
              to='/new'
              className='nav-link'
              activeStyle={{color: 'rgb(187, 46, 31)'}} 
              >
              New
            </NavLink>
          </nav>
          <button 
            style={{fontSize: 30}}
            className='btn-clear'
            onClick={ toggleTheme }>
            {theme === 'dark' ? '💡' : '🔦'}
          </button>
        </div>
      )}
    </ThemeConsumer>
  )
}

export default Nav