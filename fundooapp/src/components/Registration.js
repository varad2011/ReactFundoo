import React from 'react'
import { registration } from '../components/Service'
import { TextField } from '@material-ui/core'
import './CssStyles.css'
import Button from '@material-ui/core/Button';
class Registration extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            lastName: '',
            mobileNumber: '',
            emailId: '',
            password: '',
            confPassword: ''
        }
    }

    handlChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () =>
            console.log(this.state, '---->name'))
    }

    loginCheck = () => {
        if (this.state.password === this.state.confPassword) {
            console.log("inside logincheck")
            let registrationStore = {};
            registrationStore.userName = this.state.userName;
            registrationStore.lastName = this.state.lastName;
            registrationStore.mobileNumber = this.state.mobileNumber;
            registrationStore.emailId = this.state.emailId;
            registrationStore.password = this.state.password;
            registration(registrationStore)
                .then(Response => {
                    if (Response.data.message === "use Registration success") {
                        console.log(Response.data.message)
                        alert(Response.data.message)
                        this.props.history.push("/login")
                    }
                    alert(Response.data.message)
                })
                .catch((error) => {
                    console.log(Response.data)
                    alert(error.response.data.details)
                })
        } else {
            alert("password not match")
        }
    }

    render() {
        return (
            <div className="registration">
                <div><h3 className="registrationHeader">Registration Page</h3></div>
                <div className="registrationCotent">
                    <label className="registrationFieldName" >User Name</label>
                    <TextField placeholder="enter username" name="userName" value={this.state.userName} onChange={this.handlChange}>
                    </TextField>
                </div>
                <div className="registrationCotent">
                    <label className="registrationFieldName" >Last Name</label>
                    <TextField placeholder="enter lastname" name="lastName" value={this.state.lastName} onChange={this.handlChange}>
                    </TextField>
                </div>
                <div className="registrationCotent">
                    <label className="registrationFieldName" >Mobile Number</label>
                    <TextField placeholder=" enter mobile number" name="mobileNumber" value={this.state.mobileNumber} onChange={this.handlChange}>
                    </TextField>
                </div>
                <div className="registrationCotent">
                    <label className="registrationFieldName"  >EmailId</label>
                    <TextField placeholder="enter loginId" name="emailId" value={this.state.emailId}
                        onChange={this.handlChange}></TextField>
                </div>
                <div className="registrationCotent">
                    <label className="registrationFieldName" >Password</label>
                    <TextField placeholder="enter valid password" name="password" value={this.state.password}
                        onChange={this.handlChange}></TextField>
                </div>
                <div className="registrationCotent">
                    <label className="registrationFieldName" >ReEnter Password</label>
                    <TextField placeholder="enter valid password" name="confPassword" value={this.state.confPassword}
                        onChange={this.handlChange}></TextField>
                </div>
                <div className="registrationCotent" >
                    <Button
                        style={{ "textTransform": 'none',
                        "color": '#f7f7ef',
                        "background-color": 'black' }}
                        color="default"
                        onClick={() => this.props.history.push("/login")}>Login Page</Button>
                    <Button
                        style={{ "textTransform": 'none', "margin-left": '176px',
                        "color": '#f7f7ef',
                        "background-color": 'black' }}
                        color="default"
                        onClick={this.loginCheck} >Save</Button>
                </div>
            </div>
        );
    }
}
export default Registration;