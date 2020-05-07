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
class LabelCreate extends Component {
    constructor(props){
        super(props);
        this.state ={
            open : false,
            handleClose:false
        };
    }
    openDilogbox =()=>{
this.setState({
    open:true
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
    render() {
        const { onClose } = this.props;
        return (
            <div>
                <MenuItem onClick={() => this.openDilogbox()}>
                 <ListItemIcon><EditOutlinedIcon /></ListItemIcon>
                 <ListItemText  onClick = {()=>{ this.openDilogbox()}}>Create Label</ListItemText>
               </MenuItem>
               <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.open} >
                   <DialogTitle>Create Label</DialogTitle>
                   <List>
                   {this.props.listOfLabel.map((o) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar >
                <LabelOutlinedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={o.labelName} />
          </ListItem>
        ))}
                   </List>
               </Dialog>
            </div>
        );
    }
}

export default LabelCreate;