import React, { Component } from 'react'


class SettingsMenu extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  changeTheme  = (theme) => {
    return () => {
      this.props.changeTheme(theme);
    }
  }

  getThemeClass = () => {
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

  render(){
    return (
      <div className={this.getThemeClass()}>
        <div className="settings-section">
          <div className="button-group dropleft">
            <button type="button" className="btn btn-secondary dropdown-toggle" 
              data-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
              
             Settings
            </button>
              <div className="dropdown-menu">
              <div className="theme-section">
              <div className="title-section">Theme</div>
                <ul>
                  <li onClick={this.changeTheme('default')}>white</li>
                  <li onClick={this.changeTheme('blue')}>blue</li>
                  <li onClick={this.changeTheme('green')}>green</li>
                  <li onClick={this.changeTheme('red')}>red</li>
                  <li onClick={this.changeTheme('yellow')}>yellow</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SettingsMenu
