import React, { Component } from 'react';
import PinDropIcon from '@material-ui/icons/PinDrop';
import { Card, ListItem } from '@material-ui/core';
import NoteIconOpration from '../components/NoteIconOpration'
import CropPortraitIcon from '@material-ui/icons/CropPortrait';
class DisplayUnpinNotes extends Component {
    render() {
        return (
            <div className="displayNote" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}  >
                <ListItem>notes</ListItem>
            {this.props.noteData.map(o => (
               
                <Card style = {{ "margin": '5px'}} >
                     <div className='singleNoteDisplay'  style = {{"backgroundColor":o.backgroundColor}} >
                     <div  className = "pinNotes" style = {{ 'backgroundImage':'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg==)'}}>
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

export default DisplayUnpinNotes;