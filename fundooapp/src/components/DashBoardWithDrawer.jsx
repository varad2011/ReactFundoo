import React, { Component } from 'react';
import { AppBar, Button, Toolbar, IconButton, ListItemIcon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/core/ListItem'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { displayArchievedList } from '../components/Service';
import { getLabelNote } from '../components/Service';
import { getLabels } from '../components/Service';
import { displayTrashList } from '../components/Service';
import { getPinNotes } from '../components/Service';
import { sortList, getAllReminderNote } from '../components/Service'
import DisplayUnpinNotes from '../components/DisplayUnpinNotes'
import { Card } from '@material-ui/core';
import './CssStyles.css';
import MenuItem from '@material-ui/core/MenuItem';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles'
import ListItemText from '@material-ui/core/ListItemText';
import LabelCreate from '../components/LabelCreate';
import NoteCreate from '../components/NoteCreate'
import DisplayPinNotes from '../components/DisplayPinNotes';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import {pinUnpin} from '../components/Service';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
const styles = {
  drawer: {
    'margin-top': '5%',
    'margin-right': '6%',
    'width': '280px'
  }
}
class DashBoardWithDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noteName: '',
      open: false,
      store: [],
      label: [],
      pinNotes: [],
      count:1
    }
  }
  componentDidMount() {
    this.getAllNotes()
  }
  SessionClear = () => {
    sessionStorage.clear();
  }

  openDrawer = () => {
    if (this.state.open === true) {
      this.setState({
        open: false
      })
      console.log(this.state.open)
    } if (this.state.open === false) {
      this.setState({
        open: true
      })
      console.log(this.state.open)
    }
  }
  displayLabel = () => {
    getLabels().then(Response => {
      this.setState({
        label: Response.data.data
      })
      console.log(Response)
    })
      .catch((error) => {
        console.log(error.response)
        alert(error.response.data)
      })
  }
  getAllNotes = () => {
    getPinNotes().then(Response => {
      this.setState({
        pinNotes: Response.data.data
      })
      console.log("4");
    })
      .catch((error) => {
        alert(error.response.message)
      })
    sortList().then(Response => {
      this.setState({
        store: Response.data.data
      })
      console.log("5");
    })
      .catch((error) => {
        alert(error.response.message)
      })
  }

  getArchieveNotes = () => {
    displayArchievedList().then(Response => {
      this.setState({
        store: Response.data.data
      })
      alert("note display ")
    })
      .catch((error) => {
        alert(error.response)
      })
  }

  getTrashNotes = () => {
    displayTrashList().then(Response => {
      this.setState({
        store: Response.data.data
      })
      console.log("kfjhb", Response.data.data);

      alert(Response.data.message)
    })
      .catch((error) => {
        console.log(Response)
        alert(error.response)
      })
  }

  getReminderNotes = () => {
    getAllReminderNote().then(Response => {
      this.setState({
        store: Response.data.data
      })

    })
      .catch((error) => {
        alert(error.response.message)
      })
  }

  getlabelNotes = (labelId) => {
    getLabelNote(labelId).then(Response => {
      this.setState({
        store: Response.data.data
      })
      console.log(Response.data.data)
    })
      .catch((error) => {
        console.log(this.state.store)
        alert(error.response.message)
      })
  }

  notePinUnpin = (noteId) => {
    pinUnpin(noteId).then(Response => {
        console.log(Response.data.message)
        console.log("2");
        this.getAllNotes();
    })
        .catch((error) => {
            console.log(this.state.store)
            alert(error.response.message)
        })
};

callbackMethods = (noteId) =>{
  console.log("1");
  this.notePinUnpin(noteId);
  // console.log("3");
  // this.getAllNotes();
};
  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" style={{ 'backgroundColor': "white" }}>
          <Toolbar >
            <IconButton style={{ "margin-left": '10px' }} edge="start" aria-label="menu" onClick={() => { this.openDrawer(); this.displayLabel(); }}
            >
              <MenuIcon />
            </IconButton>
            <div className='searchicon'>
              <SearchIcon color="primary" className="searchIcon" />
              <InputBase className="searchBar"
                placeholder="Search…"
                //onClick ={this.displayNote}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <Badge style = {{ "color": '#e02a2a',"margin-left": '-40px',"margin-right": '27px'}} badgeContent={this.state.count}>
            <NotificationsNoneOutlinedIcon />
            </Badge>
            <Button color="primary" style={{ "margin-right": '25px' }} onClick={() => { this.SessionClear(); }}>Logout</Button>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Toolbar>
        </AppBar>
        <Drawer open={open} variant="persistent" classes={{ paper: classes.drawer }}>
          <List>
            <MenuItem onClick={() => this.getAllNotes()} style={{ "border-bottom-right-radius": '140px' }}>
              <ListItemIcon><EmojiObjectsOutlinedIcon /></ListItemIcon>
              <ListItemText >Note</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => this.getReminderNotes()}>
              <ListItemIcon><NotificationsNoneOutlinedIcon /></ListItemIcon>
              <ListItemText>Reminders</ListItemText>
            </MenuItem>
            {this.state.label.map(o =>
              <MenuItem onClick={() => this.getlabelNotes()}>
                <ListItemIcon><LabelOutlinedIcon /></ListItemIcon>
                <ListItemText onClick={() => { this.getlabelNotes(o.labelId) }}>{o.labelName}</ListItemText>
              </MenuItem>
            )}

            <LabelCreate listOfLabel={this.state.label}></LabelCreate>
            <MenuItem onClick={() => this.getArchieveNotes()}>
              <ListItemIcon><ArchiveOutlinedIcon /></ListItemIcon>
              <ListItemText>Archieve</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => this.getTrashNotes()}>
              <ListItemIcon><DeleteOutlineOutlinedIcon /></ListItemIcon>
              <ListItemText>Trash</ListItemText>
            </MenuItem>
            <div>
            </div>
          </List>
        </Drawer>
        <  NoteCreate></NoteCreate>
        <DisplayPinNotes pinNoteData={this.state.pinNotes}  pinUnpinNote = {this.callbackMethods} ></DisplayPinNotes>
        <DisplayUnpinNotes noteData={this.state.store} pinUnpinNote = {this.callbackMethods}></DisplayUnpinNotes>
      </div>
    );
  }
}

export default withStyles(styles)(DashBoardWithDrawer);