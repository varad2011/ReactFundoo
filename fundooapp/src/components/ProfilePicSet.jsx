import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import { AppBar, Button, Toolbar, IconButton, ListItemIcon } from '@material-ui/core';

class ProfilePicSet extends Component {
    state = {
        anchorEl: null,
    }
    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    }

    handleClose = () => {
        this.setState({ anchorEl: null });
    }

    render() {
        const { anchorEl} = this.state;
        return (
            <div>
                <Avatar  
                 onClick={this.handleClick}
                type="file" alt="Remy Sharp" src="/static/images/avatar/1.jpg" ></Avatar>
                <Menu
                  // style = {{ "width":'140px'}}
                  id="iconNotes"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                    <MenuItem>                 
                  <Input type="file" /> 
                  </MenuItem>   
                  <MenuItem>             
                  <Button>save</Button>                  
                    </MenuItem>                 
                </Menu>
            </div>
        );
    }
}

export default ProfilePicSet;