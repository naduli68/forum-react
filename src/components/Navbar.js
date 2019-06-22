import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../services/Auth'


class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  getThemeClass = () => {
    console.log('theme', this.props.theme);
    switch(this.props.theme) {
      case 'blue':
          return 'blue-theme'
      case 'green':
          return 'green-theme'
      case 'red':
          return 'red-theme'
          case 'yellow':
          return 'yellow-theme'
      default:
        return 'default-theme'
    }
  }

  render () {
    return (
      <div className={this.getThemeClass()}>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <button className='navbar-toggler' type='nav-link' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/home'>Home</Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/topics'>Topic</Link>
            </li>
              {Auth.isAuthenticate() && <li className='nav-item'>
              <Link className='nav-link' to='/logout'>Logout</Link>
            </li>}
          </ul>
        </div>
      </nav>
      </div>
    )
  }
}

export default Navbar
