import React from 'react'
import { TextField } from '@material-ui/core';
import { loginUser } from '../components/Service'
import { Container } from '@material-ui/core';
import './CssStyles.css'
//import Clickfunction from './components/clickfunction'
class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            emailId: '',
            password: '',
            count1: 0
        }
    }

    handlChange = (event) => {
        console.log("handlechange methoisd")
        this.setState({
            [event.target.name]: event.target.value
        }, () =>
            console.log(this.state, '---->name'))

    }
    loginCheck = (event) => {
        console.log("coun")
        event.preventDefault();
        if (this.state.count1 < 3) {
            let user = {};
            user.emailId = this.state.emailId
            user.password = this.state.password

            loginUser(user)
                .then(Response => {
                    if (Response.data.message === "password Wrong") {
                        this.setState({
                            count1: this.state.count1 + 1

                        });
                        alert(Response.data.message)

                    } else {
                        this.setState.count1 = 0;
                        sessionStorage.setItem("token", Response.data.data)
                        alert(Response.data.message)
                        this.props.history.push("/dashboard")

                    }

                })
                .catch((error) => {
                    console.log(error.response.data.message)
                    alert(error.response.data.message)
                })
        } else {
            alert("due to 3 wrong password attempt password is reset ")
            this.props.history.push("/forgetPassword")
        }


    }
    render() {
        return (
            <div className="header" >

                <Container >
                    <div>
                        <h1 className = "headerName">Login Page </h1>
                    </div>
                    <div className="userids" >
                        <text className = "loginEmailIdText">EmailId</text>
                       <div><TextField placeholder="EmailId" name="emailId" value={this.state.emailId}
                            onChange={this.handlChange}></TextField></div> 
                    </div>
                    <div className="password" >
                    <text className = "loginEmailIdPassword">Password</text>
                    <div>
                    <TextField placeholder="Passsword" name="password" value={this.state.password}
                            onChange={this.handlChange}></TextField>
                    </div>
                       
                    </div>
                    <div className = "loginButton">
                    <div className = "registrationClickButton" >
                        <button onClick={() => this.props.history.push("/registration")}>Registartion</button>
                    </div>

                    <div className = "loginClickButton">
                        <button
                            onClick={this.loginCheck}>
                            Login
                        </button>

                    </div>
                   
                    </div>
                    
                </Container>



            </div>
        );
    }
}
export default Login;
