import React, { Component } from 'react';
import { AppBar, Button, Toolbar, IconButton, ListItemIcon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail'
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { TextField } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import {newLabelCreate} from '../components/Service';
import{labelUpdate}  from '../components/Service';
import {deleteLabel} from '../components/Service';

class LabelCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            handleClose: false,
            labelName: ''
        };
    }
    openDilogbox = () => {
        this.setState({
            open: true
        })
    }
    handleClose = () => {
        this.setState({ open: false });
    };

    // handleClose = ()=>{
    //     this.setState({
    //         open:false
    //     })
    // }
    handlChange = (event) => {
        console.log("handle change")
        this.setState({
            [event.target.name]: event.target.value
        }, () =>
            console.log(this.state, '---->name'))

    }
    createLable = () => {
        let labelModel={};
        labelModel.labelName = this.state.labelName;
        newLabelCreate(labelModel).then(Response => {
            alert(Response.data.message)
            console.log(Response.data)
        })
            .catch((error) => {
                console.log(this.state.store)
                alert(error.response.message)
            })
    };
    updateLabel = (labelId) => {
        let labelModel={};
        labelModel.labelName = this.state.labelName;
        labelModel.labelId = labelId;
        labelUpdate(labelModel).then(Response => {
            alert(Response.data.message)
            console.log(Response.data)
        })
            .catch((error) => {
                console.log(this.state.store)
                alert(error.response.message)
            })
    }
    LabelDelete = (labelId) => {
        let labelModel={};
        labelModel.labelId = labelId;
        deleteLabel(labelModel).then(Response => {
            alert(Response.data.message)
            console.log(Response.data)
        })
            .catch((error) => {
                console.log(this.state.store)
                alert(error.response.message)
            })
    }


    render() {
        const { onClose } = this.props;
        return (
            <div>
                <MenuItem onClick={() => this.openDilogbox()}>
                    <ListItemIcon><EditOutlinedIcon /></ListItemIcon>
                    <ListItemText onClick={() => { this.openDilogbox() }}>Create Label</ListItemText>
                </MenuItem>
                <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.open} >
                    <DialogTitle>Create Label</DialogTitle>

                    <List>

                        <ListItem>
                            <ListItemAvatar>

                                <ClearOutlinedIcon />

                            </ListItemAvatar>
                            <TextField placeholder="create New label" name = "labelName"
                             onChange={this.handlChange}
                                ></TextField>
                            <ListItemAvatar>

                                <DoneIcon  onClick ={()=>{this.createLable();}}/>

                            </ListItemAvatar>
                        </ListItem>
                        {this.props.listOfLabel.map((o) => (
                            <ListItem>
                                <ListItemAvatar>
                                    <DeleteIcon onClick ={() =>{this.LabelDelete(o.labelId)}}></DeleteIcon>
                                    {/* <LabelOutlinedIcon /> */}
                                </ListItemAvatar>
                                <TextField placeholder={o.labelName} name = "labelName"  onChange={this.handlChange}> </TextField>
                                {/* <ListItemText primary={o.labelName} /> */}
                                <ListItemAvatar>
                                    <EditOutlinedIcon onClick = {()=>{this.updateLabel(o.labelId)}} />
                                </ListItemAvatar>
                            </ListItem>
                        ))}
                    </List>
                </Dialog>
            </div>
        );
    }
}

export default LabelCreate;