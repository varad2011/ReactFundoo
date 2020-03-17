import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { linksendToResetPassword } from '../components/Service'
import './CssStyles.css'
class ForgetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailId: ''
        }
    }
    handlChange = (event) => {
        console.log("handlechange methoisd")
        this.setState({
            [event.target.name]: event.target.value
        }, () =>
            console.log(this.state, '---->name'))
    }
    senMailToUser = () => {
        let userEmailId = {};
        userEmailId.emailId = this.state.emailId
        linksendToResetPassword(userEmailId)
            .then(Response => {
                console.log(Response.data.message)
                alert(Response.data.message)
            })
            .catch((error) => {

                console.log(error.response.details)
                alert(error.response.details)
            })

    }
    render() {
        return (
            <div className="header">
                <div>
                    <label>emailId</label>
                    <TextField placeholder="enter emailId" name="emailId" value={this.state.emailId} onChange={this.handlChange}></TextField>
                </div>
                <div>
                    <button onClick={this.senMailToUser}>forgetpassword</button>
                </div>
            </div>
        );
    }
}

export default ForgetPassword;