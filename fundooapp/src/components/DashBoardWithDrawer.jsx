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
import { pinUnpin } from '../components/Service';
import { getLabelPinNote } from '../components/Service';
import { getPinReminderNote } from '../components/Service';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
import Link from '@material-ui/core/Link';
import { displaySearchNote } from '../components/Service';
import ProfilePicSet from '../components/ProfilePicSet';
import Login from '../components/Login';
import {reminderCompleteNoteCount} from '../components/Service';
import {GetReminderCompleteNoteList} from '../components/Service';

const styles = {
  drawer: {
    'margin-top': '5%',
    'margin-right': '6%',
    'width': '280px'
  }
}
const WAIT_INTERVAL = 1000;

class DashBoardWithDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noteName: '',
      open: false,
      store: [],
      label: [],
      labelIdStore: '',
      pinNotes: [],
      count: 0,
      searchNotes: '',
      searchNoteList: [],
      BeforeSearchPinNotes: [],
      BeforeSearchUnpinNotes: [],
      createNoteOpen: true,
      pinNoteDisplay: true,
      TrashOpen: false,
      displayNoteType: '',
      searchNoteDisplayFlag: false
    }
  }
  componentDidMount() {
    this.getAllNotes();
    setInterval(this.checkreminderNoteSetTime, 100000);
  }

  componentWillMount() {
    this.timer = null;
  }

  handlChangeSearch = (event) => {
    clearTimeout(this.timer);
    this.setState({
      [event.target.name]: event.target.value
    }, () =>
      console.log(this.state, '---->name'))
    this.timer = setTimeout(this.displaySerachNotes, WAIT_INTERVAL);
  }

  displaySerachNotes = () => {
    this.setState({
      displayNoteType: "searchNotes",
      TrashOpen: false,
      searchNoteDisplayFlag: true
    })
    displaySearchNote(this.state.searchNotes).then(Response => {
      this.setState({
        searchNoteList: Response.data.data
      })
    })
      .catch((error) => {
        alert(error.response.data)
      })
  }

  SessionClear = () => {
    sessionStorage.clear();
    this.props.history.push("/Login")
  }

  openDrawer = () => {
    if (this.state.open === true) {
      this.setState({
        open: false
      })
    } if (this.state.open === false) {
      this.setState({
        open: true
      })
    }
  }

  displayLabel = () => {
    getLabels().then(Response => {
      this.setState({
        label: Response.data.data
      })
    })
      .catch((error) => {
        alert(error.response.data)
      })
  }

  getAllNotes = () => {
    this.setState({
      createNoteOpen: true,
      pinNoteDisplay: true,
      displayNoteType: "note",
      TrashOpen: false,
      searchNoteDisplayFlag: false
    })
    getPinNotes().then(Response => {
      this.setState({
        pinNotes: Response.data.data
      })
    })
      .catch((error) => {
        alert(error.response.message)
      })
    sortList().then(Response => {
      this.setState({
        store: Response.data.data
      })
    })
      .catch((error) => {
        alert(error.response.message)
      })
  }

  getArchieveNotes = () => {
    this.setState({
      displayNoteType: "archiveNote",
      TrashOpen: false,
      searchNoteDisplayFlag: false
    })
    displayArchievedList().then(Response => {
      this.setState({
        store: Response.data.data,
        createNoteOpen: false,
        pinNoteDisplay: false
      })
    })
      .catch((error) => {
        alert(error.response)
      })
  }

  getTrashNotes = () => {
    this.setState({
      displayNoteType: "trashNote",
      TrashOpen: true,
      searchNoteDisplayFlag: false
    })
    displayTrashList().then(Response => {
      this.setState({
        store: Response.data.data,
        createNoteOpen: false,
        pinNoteDisplay: false
      })
    })
      .catch((error) => {
        alert(error.response)
      })
  }

  getReminderNotes = () => {
    this.setState({
      displayNoteType: "reminderNote",
      TrashOpen: false,
      searchNoteDisplayFlag: false
    })
    getAllReminderNote().then(Response => {
      this.setState({
        store: Response.data.data,
        createNoteOpen: true,
        pinNoteDisplay: true
      })
    })
      .catch((error) => {
        alert(error.response.message)
      })
    getPinReminderNote().then(Response => {
      this.setState({
        pinNotes: Response.data.data
      })
    }).catch((error) => {
      alert(error.response.message)
    });

  }

  getlabelNotes = (labelId) => {
    this.setState({
      labelIdStore: labelId,
      displayNoteType: "labelNotes",
      TrashOpen: false,
      searchNoteDisplayFlag: false
    })
    getLabelNote(labelId).then(Response => {
      this.setState({
        store: Response.data.data,
        createNoteOpen: true,
        pinNoteDisplay: true
      })
    }).catch((error) => {
        // alert(error.response.message)
      })
    getLabelPinNote(labelId).then(Response => {
      this.setState({
        pinNotes: Response.data.data
      })
    })
      .catch((error) => {
        alert(error.response.message)
      })
  }

  notePinUnpin = (noteId) => {
    pinUnpin(noteId).then(Response => {
      this.callBackDisplayNotes(this.state.displayNoteType)
      // this.getAllNotes();
    })
      .catch((error) => {
        alert(error.response.message)
      })
  }

  callbackMethods = (noteId) => {
    this.notePinUnpin(noteId);
    // this.getAllNotes();
  }

  checkreminderNoteSetTime = () =>{
    reminderCompleteNoteCount().then(Response => {
      this.setState({
        count : Response.data.data
      })
    }) .catch((error) => {
      alert(error.response.message)
    })
  }

getReminderCompleteNote = () =>{
  this.setState({
    displayNoteType: "reminderCompleteNote",
    TrashOpen: false,
    searchNoteDisplayFlag: true
  })
  GetReminderCompleteNoteList().then(Response => {
    this.setState({
      searchNoteList: Response.data.data
    })
  }) .catch((error) => {
    alert(error.response.message)
  })
}

  callBackDisplayNotes = () => {
    if (this.state.displayNoteType === "note") {
      this.getAllNotes();
    }
    if (this.state.displayNoteType === "reminderNote") {
      this.getReminderNotes();
    }
    if (this.state.displayNoteType === "archiveNote") {
      this.getArchieveNotes();
    }
    if (this.state.displayNoteType === "trashNote") {
      this.getTrashNotes();
    }
    if (this.state.displayNoteType === "labelNotes") {
      this.getlabelNotes(this.state.labelIdStore);
    }
    if (this.state.displayNoteType === "searchNotes") {
      this.displaySerachNotes();
    }
    if (this.state.displayNoteType === "reminderCompleteNote") {
      this.getReminderCompleteNote();
    }
  }
  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" style={{ 'backgroundColor': "white" }}>
          <Toolbar >
            <IconButton style={{ "margin-left": '10px' }} edge="start" aria-label="menu" onClick={() => { this.openDrawer(); this.displayLabel(); }}>
              <MenuIcon />
            </IconButton>
            <div className='searchicon'>
              <SearchIcon color="primary" className="searchIcon" />
              <InputBase className="searchBar"
                placeholder="Search…" name="searchNotes"
                onChange={this.handlChangeSearch}
                // onKeyDown={this.displaySerachNotes}
                //onClick ={this.displayNote}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <Badge style={{ "color": '#e02a2a', "margin-left": '-40px', "margin-right": '27px' }} 
            badgeContent={this.state.count}
            onClick = {this.getReminderCompleteNote}>
              <NotificationsNoneOutlinedIcon />
            </Badge>
            <Button color="primary" style={{ "margin-right": '25px', "textTransform": 'none' }} onClick={() => { this.SessionClear(); }}>Logout</Button>
            <ProfilePicSet></ProfilePicSet>
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
              <MenuItem onClick={() => { this.getlabelNotes(o.labelId) }}>
                <ListItemIcon><LabelOutlinedIcon /></ListItemIcon>
                <ListItemText
                // onClick={() => { this.getlabelNotes(o.labelId) }}
                >{o.labelName}</ListItemText>
              </MenuItem>
            )}
            <LabelCreate listOfLabel={this.state.label} callBackLabelList={this.displayLabel}></LabelCreate>
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
        {this.state.createNoteOpen === true ? < NoteCreate></NoteCreate> : null}
        {this.state.searchNoteDisplayFlag === true ?
          <DisplayUnpinNotes noteData={this.state.searchNoteList} pinUnpinNote={this.callbackMethods}></DisplayUnpinNotes>
          : <div>
            {this.state.pinNoteDisplay === true ?
              <DisplayUnpinNotes noteData={this.state.pinNotes}
                pinUnpinNote={this.callbackMethods}
                callBackDisplayNotes={this.callBackDisplayNotes}></DisplayUnpinNotes>
              : null}
            {this.state.TrashOpen === true ?
              <div className="trashBin" >Notes in Trash are deleted after 7 days.<Link className="trashLink" component="button" >Empty bin</Link></div>
              : null}
            <DisplayUnpinNotes noteData={this.state.store}
              pinUnpinNote={this.callbackMethods}
              callBackDisplayNotes={this.callBackDisplayNotes}></DisplayUnpinNotes>
          </div>}
      </div>
    );
  }
}

export default withStyles(styles)(DashBoardWithDrawer);