import React, { Component } from 'react';
import { AppBar, Button, Toolbar, IconButton, ListItemIcon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/core/ListItem'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { displayArchievedList } from '../components/Service';
import {getLabelNote} from '../components/Service';
import { getLabels } from '../components/Service';
import { displayTrashList } from '../components/Service';
import { sortListByName } from '../components/Service';
import { sortList, getAllReminderNote } from '../components/Service'
import { Card } from '@material-ui/core';
import './CssStyles.css';
import MenuItem from '@material-ui/core/MenuItem';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {withStyles} from '@material-ui/core/styles'
import ListItemText from '@material-ui/core/ListItemText';

import NoteCreate from '../components/NoteCreate'
import DisplayNotes from '../components/DisplayNotes';
const styles = {
  drawer:{
        'margin-top':'5%',
    'margin-right':'6%',
    'width':'280px'
}}
class DashBoardWithDrawer extends Component {
    constructor(props) {
        super(props)
        this.state = {
          noteName: '',
          open: false,
          store: [],
          label: []     
        }
    } 

    SessionClear =()=>{
        sessionStorage.clear();
    }

    openDrawer = () =>{
        if(this.state.open === true){
            this.setState ({
                open : false
            })
            console.log(this.state.open)
        }if(this.state.open === false){
            this.setState ({
                open : true
            })
            console.log(this.state.open)
        }
    }
 displayLabel = () =>{
    getLabels().then(Response => {
        this.setState ({
            label:Response.data.data   
        })
        console.log(Response)
    })
    .catch((error) => {
         console.log(error.response)
        alert(error.response.data)
    })
 }
 getAllNotes =()=>{
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

 getArchieveNotes =()=>{
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

 getTrashNotes =() =>{
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

 getReminderNotes = () =>{
    getAllReminderNote().then(Response => {
        this.setState({
          store: Response.data.data
        })

      })
        .catch((error) => {
          alert(error.response.message)
        })
 }

 getlabelNotes =(labelId) =>{
    getLabelNote(labelId).then(Response => {
        this.setState({
         store : Response.data.data
        })
        console.log(this.state.store)
      })
        .catch((error) => {
            console.log(this.state.store)  
          alert(error.response.message)
        })
 }

    render() {
        const {open }= this.state;
        const{classes} =this.props;
        return (
            <div>
              <AppBar position="static" style = {{'backgroundColor':"white"}}>
        <Toolbar >
          <IconButton edge="start"  aria-label="menu"  onClick = {()=>{this.openDrawer();this.displayLabel();}}
          >
            <MenuIcon />
          </IconButton>
          <div className='searchicon'>
            <SearchIcon />
            <InputBase className=''
              placeholder="Search…"               
              //onClick ={this.displayNote}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Button color="inherit" onClick = {()=>{this.SessionClear();}}>Logout</Button>
        </Toolbar>
      </AppBar> 
      <Drawer open={open} variant = "persistent" classes ={{paper:classes.drawer}}>
      <List>
            <MenuItem onClick={() => this.getAllNotes()}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText >Note</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => this.getReminderNotes()}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText>Reminders</ListItemText>
            </MenuItem>
            {this.state.label.map( o => 
                 <MenuItem onClick={() => this.getlabelNotes()}>
                 <ListItemIcon><MailIcon /></ListItemIcon>
                 <ListItemText onClick ={()=>{this.getlabelNotes(o.labelId)}}>{o.labelName}</ListItemText>
               </MenuItem>
                )}
            <MenuItem onClick={() => this.getArchieveNotes()}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText>Archieve</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => this.getTrashNotes()}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText>Trash</ListItemText>
            </MenuItem>
          </List>
          </Drawer>
            </div>
        );
    }
}

export default withStyles(styles)(DashBoardWithDrawer);