import React, { Component } from 'react';
import { AppBar, Button, Toolbar, IconButton, ListItemIcon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/core/ListItem'
import SearchIcon from '@material-ui/icons/Search';
import { displayArchievedList } from '../components/Service';
import { displayTrashList } from '../components/Service';
import { sortListByName } from '../components/Service';
import { sortList, getAllReminderNote } from '../components/Service'
import InputBase from '@material-ui/core/InputBase';
import { Card } from '@material-ui/core';
import './CssStyles.css';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

import NoteCreate from '../components/NoteCreate'
import DisplayNotes from '../components/DisplayNotes';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noteName: '',
      open: false,
      store: [],
      store1 : []
    }
    this.ShowListOf = this.ShowListOf.bind(this);
  }
  handleDrawerOpen = () => {
    this.setState({ open: true })
  };

  handleDrawerClose = () => {
    this.setState({ open: false })
  };
  handlChange = (event) => {
    console.log("handlechange methoisd")
    this.setState({
      [event.target.name]: event.target.value
    }, () =>
      console.log(this.state, '---->name'))
  }
  displayNote = () => {
    console.log(this.state.noteName)
    sortListByName(this.state.noteName)
      .then(Response => {
        console.log(Response.data)
        console.log("response", Response)
        alert(Response.data.message)


      })
      .catch((error) => {
        alert(error.response)
        console.log(error)
      });
  }

  ShowListOf = (text) => {

    if (text === 'Archive') {
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

    if (text === 'Trash') {
      
      
      displayTrashList().then(Response => {
        this.setState({
          store:Response.data.data
        })
       console.log("kfjhb",Response.data.data);
       
        alert(Response.data.message)
      })
        .catch((error) => {
          console.log(Response)
          alert(error.response)
        })

    }
    if (text === 'Note') {
      sortList().then(Response => {
        this.setState({
          store: Response.data.data
        })
        alert("note display ")
      })
        .catch((error) => {
          alert(error.response.message)
        })

    }
    if (text === 'Reminders') {
      getAllReminderNote().then(Response => {

        this.setState({
          store: Response.data.data
        })

      })
        .catch((error) => {
          alert(error.response.message)
        })
    }
  }

  render() {
    const { open } = this.state;
    return (
      <div  >
        <AppBar position="static">
          <Toolbar >
            <IconButton edge="start" color="inherit" aria-label="menu"
              onClick={this.handleDrawerOpen}>
              <MenuIcon />
            </IconButton>


            <div className='searchicon'>

              <SearchIcon />

              <InputBase className=''
                placeholder="Search…"
                onChange={this.handlChange}
                //onClick ={this.displayNote}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>

        <div><NoteCreate /></div>

        <div ><DisplayNotes /></div>

        <Drawer open={open} variant = "persistent" >
          <div className="menuButtonCss">
            <MenuIcon onClick={this.handleDrawerClose} />
          </div>

          <Divider />
          <List>
            <div onClick={() => this.ShowListOf('Note')}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText >Note</ListItemText>
            </div>
            <div onClick={() => this.ShowListOf('Reminders')}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText>Reminders</ListItemText>
            </div>
          </List>
          <Divider />
          <List >
            <header className="labelHeader">Labels</header>

          </List>
          <Divider />
          <List  >
            <div onClick={() => this.ShowListOf('Archive')}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText>Archive</ListItemText>
            </div>
            <div onClick={() => this.ShowListOf('Trash')}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText>Trash</ListItemText>
            </div>
          </List>
        </Drawer>
        <div className="displayNote" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}  >
          {this.state.store.map(o => (

            <Card className='singleNoteDisplay'>

              <div>
                {o.title}
              </div>
              <div>
                {o.content}
              </div>
            </Card>

          ))}

        </div>
      </div>

    );
  }
}

export default Dashboard;