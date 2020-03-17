import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { forgetUserPassword } from '../components/Service'
class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailId: '',
            password: '',
            confpassword: ''
        }

    }
    handlChange = (event) => {
        console.log("handlechange methoisd")
        this.setState({
            [event.target.name]: event.target.value
        }, () =>
            console.log(this.state, '---->name'))
    }

    resetPassword = () => {
        if (this.state.password === this.state.confpassword) {
            let resetpass = {};
            resetpass.emailId = this.state.emailId
            resetpass.password = this.state.password
            forgetUserPassword(resetpass)
                .then(Response => {
                    console.log(Response.data.message)
                    alert(Response.data.message)
                })
                .catch((error) => {

                    console.log(error.response)
                    alert(error.response)
                })
        } else {
            alert(" password not match")
        }


    }
    render() {
        return (
            <div>
                <div >
                    <label >emailId</label>
                    <TextField placeholder="enter loginId" name="emailId" value={this.state.emailId}
                        onChange={this.handlChange}></TextField>
                </div>
                <div>
                    <label >password</label>
                    <TextField placeholder="enter new password" name="password" value={this.state.password}
                        onChange={this.handlChange}></TextField>
                </div>
                <div>
                    <label >confPassword</label>
                    <TextField placeholder="enter password" name="confpassword" value={this.state.Confpassword}
                        onChange={this.handlChange}></TextField>
                </div>
                <div>
                    <button onClick={this.resetPassword}>ResetPassword</button>
                </div>
            </div>
        );
    }
}

export default ResetPassword;