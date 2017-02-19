import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg'
import '../css/style.css'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import auth from './../auth/initAuth'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { isLogin: true }
  }

  _loginSignUpToggle = () => {
    this.setState( { isLogin: !this.state.isLogin } )
  }

  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to a vanilla React with react-router 4</h2>
            <h2>with Auth0 Authentication</h2>
          </div>

          <div className="border color-blue">
              <Link to='/PageOne'>Go to Page One</Link>
          </div>

          <button onClick={ this._loginSignUpToggle }>
            Click to { this.state.isLogin ? "Sign Up" : "Login" }               
          </button>

          { this.state.isLogin ? <Login auth={ auth }/> : <SignUp auth={ auth }/>} 


           {/* Render children here*/}
           {this.props.children} 
        </div>
    );
  }
}

export default App;
