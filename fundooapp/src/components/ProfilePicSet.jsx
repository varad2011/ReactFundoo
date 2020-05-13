import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import { AppBar, Button, Toolbar, IconButton, ListItemIcon } from '@material-ui/core';
import { setprofilePic } from '../components/Service';
import { updateLoginUserProfilePic } from '../components/Service';

class ProfilePicSet extends Component {
  state = {
    anchorEl: null,
    file: null,
    profilePic: ''
  }

  componentDidMount() {
    this.setprofileUpload();
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }
  onFileChange = event => {
    this.setState({ file: event.target.files[0] });
    console.log("file", this.state.selectedFile)
  }

  saveImage = () => {
    const formData = new FormData();
    formData.append('file', this.state.file);
    setprofilePic(formData).then(Response => {
      this.setprofileUpload();
      this.handleClose();
    })
      .catch((error) => {
        alert(error.response.message)
      })
  }

  setprofileUpload = () => {
    updateLoginUserProfilePic().then(Response => {
      this.setState({
        profilePic: Response.data.data
      })
    })
      .catch((error) => {
        alert(error.response.message)
      })
  }

  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <Avatar
          onClick={this.handleClick}
          alt="Remy Sharp"
          src={this.state.profilePic} >
        </Avatar>
        <Menu
          // style = {{ "width":'140px'}}
          id="iconNotes"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose} >
          <MenuItem>
            <Input type="file" name="file" onChange={this.onFileChange} />
          </MenuItem>
          <MenuItem>
            <Button onClick={this.saveImage}>save</Button>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default ProfilePicSet;