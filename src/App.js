import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import ListTopicsPage from './components/ListTopicsPage'
import Navbar from './components/Navbar'
import './App.css'
import PrivateRoute from './components/PrivateRoute'
import TopicForm from './components/TopicForm'
import TopicPage from './components/TopicPage'
import Logout from './components/Users/Logout'
import AddReplyPage from './components/Replies/AddReplyPage'
import Api from './services/Api'
import Auth from './services/Auth'
import SettingsMenu from './components/SettingsMenu'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      theme: 'default'
    }
  }

  componentDidMount () {
    this.initUserTheme();
  }

  initUserTheme = () => {
    if (Auth.isAuthenticate()) {
      Api.setInterseptor(this.props)
      .getUser()
      .then((response) => {
        console.log('usertheme', response)
        let theme = response.data.theme;
        this.setState({
          theme: theme
        });
      })
    }
  }

  changeTheme  = (theme) => {
    console.log('theme: ',theme)
    if (Auth.isAuthenticate()) {
      Api.setInterseptor(this.props)
      .changeUserTheme(theme)
      .then((response) => {
        console.log('change theme:', response, theme);
        this.setState({
          theme: theme
        });
      })
    } else {
      this.setState({
        theme: theme
      });
    }
  }
  
  render () {
    return (
      <div>
        <SettingsMenu changeTheme={this.changeTheme} theme={this.state.theme}/>
        <Navbar theme={this.state.theme}/>
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/home' component={Home} />
            <PrivateRoute path='/logout' exact component={Logout} />
            <PrivateRoute path='/topics' exact component={ListTopicsPage} />
            <PrivateRoute path='/settingsMenu' exact component={SettingsMenu} />
            <PrivateRoute path='/topics/add' exact component={TopicForm} />
            <PrivateRoute path='/topics/:topicId' exact component={TopicPage} />
            <PrivateRoute path='/topics/:topicId/add' exact component={AddReplyPage} />
          </Switch>
        </div>
      </div>
    )
  }
}
