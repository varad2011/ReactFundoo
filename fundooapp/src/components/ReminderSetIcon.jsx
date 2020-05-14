import React, { Component } from 'react';
import { addReminderToNote } from '../components/Service';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import ListItem from '@material-ui/core/ListItem';

class ReminderSetIcon extends Component {
    state = {
        anchorEl4: false,
        time: '',
        date: '',
        setTime: ''
    };

    openReminder = () => {
        this.setState({ anchorEl4: true })
    }

    closeReminderPicker = () => {
        this.setState({
            anchorEl4: false
        })
    }

    handlChange = (event) => {
        console.log("handlechange")
        this.setState({
            [event.target.name]: event.target.value
        }, () =>
            console.log(this.state, '---->name'))
    }

    setReminder = (id) => {
        addReminderToNote(id, this.state.date.concat(' ' + this.state.time)).then(Response => {
            this.callBackData();

        }).catch((error) => {
            alert(error.response.data.message)
        })
    }

    callBackData = () => {
        this.props.callBackData();
        this.closeReminderPicker();
    }
    render() {
        const { anchorEl4 } = this.state;
        return (
            <div className="iconNotes">
                <AddAlertOutlinedIcon onClick={() => this.openReminder()} />
                <div style={{ "position": 'absolute' }} >
                    <Popper style={{ "width": '200px', "paddingLeft": '10px' }}
                        anchorEl={anchorEl4}
                        open={Boolean(anchorEl4)}
                        role={undefined} transition disablePortal
                        onClose={this.closeReminderPicker}
                    >
                        <Paper>
                            <MenuList
                                autoFocusItem={Boolean(anchorEl4)}
                            >
                                <MenuItem>
                                    <ArrowBackOutlinedIcon onClick={this.closeReminderPicker}></ArrowBackOutlinedIcon>
                                    <text> Pick date & time</text>
                                </MenuItem>
                                <MenuItem>
                                    <TextField
                                        name="time"
                                        id="time"
                                        label="Alarm clock"
                                        type="time"
                                        defaultValue="07:30"
                                        //  className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            step: 300, // 5 min
                                        }}
                                        onChange={this.handlChange}
                                    />
                                </MenuItem>
                                <MenuItem>
                                    <TextField
                                        name="date"
                                        id="date"
                                        label="Birthday"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        // className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.handlChange}
                                    />
                                </MenuItem>
                                <ListItem>
                                    <ListItem autoFocus button onClick={() => { this.setReminder(this.props.data) }}>save</ListItem>
                                </ListItem>
                            </MenuList>
                        </Paper>
                    </Popper>
                </div>
            </div>
        );
    }
}

export default ReminderSetIcon;