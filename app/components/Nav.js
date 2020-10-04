import React from 'react'
import {ThemeConsumer} from '../contexts/theme'

const Nav = () => {
  return (
    <ThemeConsumer>
      {({theme, toggleTheme}) => (
        <div className='container p-5 space-between'>
          <nav>
            <a href='#!'>Top</a>
            <a href='#!'>New</a>
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