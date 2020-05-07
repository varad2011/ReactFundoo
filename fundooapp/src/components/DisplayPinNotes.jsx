import React, { Component } from 'react';
import PinDropIcon from '@material-ui/icons/PinDrop';
import { Card, ListItem } from '@material-ui/core';
import NoteIconOpration from '../components/NoteIconOpration';
import CropPortraitIcon from '@material-ui/icons/CropPortrait';
class DisplayPinNotes extends Component {
    render() {
        return (
            <div className="displayNote" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}  >
             <ListItem>Pin Notes</ListItem>
            {this.props.pinNoteData.map(o => (
               
                <Card   style = {{ "margin": '5px'}} >
                   <div className='singleNoteDisplay'  style = {{"backgroundColor":o.backgroundColor}}>
                    <div className = "pinNotes" style = {{ 
                        "backgroundImage":'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDRhMiAyIDAgMCAwLTItMkg5Yy0xLjEgMC0yIC45LTIgMnY3bC0yIDN2Mmg2djVsMSAxIDEtMXYtNWg2di0ybC0yLTNWNHoiLz4KPC9zdmc+Cg==)'}}>
                    {/* <div >pin</div> */}
                    <CropPortraitIcon />
                    </div>
                  
                    <div className = "displayNoteText">
                        {o.title}
                    </div>
                    <div className = "displayNoteText">
                        {o.content}
                    </div>
                    <div>
                        {/* <NoteIconOpration></NoteIconOpration> */}
                    </div>
                   < NoteIconOpration data = {o.noteId}></NoteIconOpration>      
                   </div>                
                </Card>
            ))
       }
        </div>
        );
    }
}

export default DisplayPinNotes;