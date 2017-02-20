import React, { Component } from 'react'
import auth from './../auth/initAuth'

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: null,
            password: null
        }
    }

    
    _handleSubmit = (e, data) => {
        auth.login(this.state.email, this.state.password)
        setTimeout(()=> { window.location.reload() } , 1500);
    }

    _handleEmailChange = (e) => {
        this.setState( {email: e.target.value} )
    }

    _handlePasswordChange = (e) => {
        this.setState( {password: e.target.value} )
    }

    _logout = () => {
        auth.logout()
        this.props._refresh()
    }

    _renderLoginForm = () => {
        return(
            <form className="commentForm" onSubmit={this._handleSubmit}>
                    <input type="email" placeholder="Enter your email" onChange={this._handleEmailChange}/>
                    <input type="password" placeholder="Enter a password" onChange={this._handlePasswordChange}/>
                    <input type="submit" value="Login" />
            </form>
        )
    }

    _renderLogout = () => {
        return(
            <div>
                <button onClick={ this._logout }>You are logged in ! Click to logout !</button>
            </div>
        )
    }

    render(){
        return(
            <div>
                { auth.loggedIn() ? this._renderLogout() : this._renderLoginForm() }
            </div>
        )
    }
}

export default Login
