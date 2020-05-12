import React, { Component } from 'react';
import PinDropIcon from '@material-ui/icons/PinDrop';
import { Card, ListItem } from '@material-ui/core';
import NoteIconOpration from '../components/NoteIconOpration';
import TrashIcons from '../components/TrashIcons';
import CropPortraitIcon from '@material-ui/icons/CropPortrait';
import SingleNoteDisplay from '../components/SingleNoteDisplay';
import { displaySingleNote } from '../components/Service';
import MenuItem from '@material-ui/core/MenuItem';
import { AppBar, Button, Toolbar, IconButton, ListItemIcon } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { SvgIcon } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import {removeReminderToNote} from '../components/Service';
import {removeLabelFromNotes} from '../components/Service';

class DisplayUnpinNotes extends Component {
    constructor(props) {
        super()
        this.state = {
            displaySingleNote: false,
            noteData: []
        }
    }
    openNoteDilogbox = () => {
        this.setState({
            displaySingleNote: true
        })
    }
    handleCloseNoteDilogbox = () => {
        this.setState({ displaySingleNote: false });
    }

    displayNoteData = (noteId) => {
        displaySingleNote(noteId).then(Response => {
            this.setState({
                noteData: Response.data.data
            })
            console.log(Response.data.data)
        })
            .catch((error) => {
                console.log(this.state.store)
                alert(error.response.message)
            })
    };

removeAddedReminder = (noteId) => {
    removeReminderToNote(noteId).then(Response => {
        alert(Response.data.message)
        console.log(Response.data.message)
        this.callBackParentData();
    })
        .catch((error) => {
            console.log(this.state.store)
            alert(error.response.message)
        })
}
    // notePinUnpin = (noteId) => {
    //     pinUnpin(noteId).then(Response => {
    //         console.log(Response.data.message)
    //     })
    //         .catch((error) => {
    //             console.log(this.state.store)
    //             alert(error.response.message)
    //         })
    // };

    removeLabel = (labelId,noteId) =>{
        removeLabelFromNotes(labelId, noteId ).then(Response => {
            alert(Response.data.message)
            console.log(Response.data.message)
            this.callBackParentData();
        })
            .catch((error) => {
                console.log(this.state.store)
                alert(error.response.message)
            }) 
    }
callBackParentData =() =>{
    this.props.callBackDisplayNotes();
}
    render() {
        return (
            <div className="displayNote" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}  >
                {/* <ListItem>notes</ListItem> */}
                {this.props.noteData.map(o => (
                    <Card style={{ "margin": '5px', "height": 'fit-content', "border-radius": '14px' }} >
                        <div className='singleNoteDisplay' style={{ "backgroundColor": o.backgroundColor }} >
                            {(o.trash === false) ?
                           <div>
                                  { o.pinUnpin  ?
                                   <div className="pinNotes" 
                                   style={{ 
                                       "backgroundImage":'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDRhMiAyIDAgMCAwLTItMkg5Yy0xLjEgMC0yIC45LTIgMnY3bC0yIDN2Mmg2djVsMSAxIDEtMXYtNWg2di0ybC0yLTNWNHoiLz4KPC9zdmc+Cg==)'}}
                                   onClick = {()=>{this.props.pinUnpinNote(o.noteId);}}
                                   >
                                   </div>
                                   :
                                   <div className="pinNotes" 
                                   style={{ 
                                       'backgroundImage': 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg==)' }}
                                   onClick = {()=>{this.props.pinUnpinNote(o.noteId);}}
                                   >
                                   </div> }
                           </div>
                                : null}
                            <div className="displayNoteText" onClick={() => { this.displayNoteData(o.noteId); this.openNoteDilogbox(); }}>
                                {o.title}
                            </div>
                            <div className="displayNoteText">
                                {o.content}
                            </div>
                            <div className="reminderDiv" >
                                {o.noteReminder === true ?
                                    <MenuItem style={{ "borderRadius": '40px', "fontSize": 'smaller' }}>
                                        <div  style={{ "padding-top": '4px' }}> <AccessTimeIcon fontSize="small" /> </div>
                                        <div>  {o.reminderDatTime.substring(11, 16)}</div>
                                        <div>
                                            <CancelOutlinedIcon  style={{  "fontSize": '20px' }} onClick = {() =>{this.removeAddedReminder(o.noteId);}} />
                                        </div>
                                    </MenuItem>
                                    : null}
                                {o.labelModel.map(label => (
                                    < MenuItem style={{ "borderRadius": '40px', "fontSize": 'smaller' ,"padding-right": '0px' }}>
                                    <div>  {label.labelName}</div>
                                    <div>
                                    <CancelOutlinedIcon  style={{  "fontSize": '20px' }}  onClick = {() =>{this.removeLabel(label.labelId, o.noteId);}}/>
                                    </div>
                                    </MenuItem>                                  
                                ))}
                            </div>
                            {(o.trash === true) ?
                                <TrashIcons
                                callBackParentData = {this.callBackParentData}
                                    noteId={o.noteId}
                                ></TrashIcons>
                                :
                                < NoteIconOpration data={o.noteId}
                                callBackParentData = {this.callBackParentData}
                                 archieve={o.archieve}></NoteIconOpration>
                            }
                            {/* < TrashIcons noteId = {o.noteId}></TrashIcons>
                    < NoteIconOpration data = {o.noteId}></NoteIconOpration>  */}
                        </div>
                    </Card>
                ))
                }
                <SingleNoteDisplay
                    noteData={this.state.noteData}
                    //    noteId = {o.noteId}
                    //    title = {o.title}
                    openNote={this.state.displaySingleNote}
                    closeNote={this.handleCloseNoteDilogbox}>
                </SingleNoteDisplay>
            </div>
        );
    }
}

export default DisplayUnpinNotes;