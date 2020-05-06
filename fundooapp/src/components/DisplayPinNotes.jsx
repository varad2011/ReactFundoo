import React, { Component } from 'react';
import PinDropIcon from '@material-ui/icons/PinDrop';
import { Card } from '@material-ui/core';
import NoteIconOpration from '../components/NoteIconOpration'
class DisplayPinNotes extends Component {
    render() {
        return (
            <div className="displayNote" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}  >
            {this.props.pinNoteData.map(o => (
                
                <Card className='singleNoteDisplay'>
                    
                    <PinDropIcon style={{ 'margin-left': '200px' }} />
                    <div>
                        {o.title}
                    </div>
                    <div>
                        {o.content}
                    </div>
                    <div>
                        {/* <NoteIconOpration></NoteIconOpration> */}
                    </div>
                   {/* < NoteIconOpration data = {o.noteId}></NoteIconOpration>                       */}
                </Card>
            ))
       }
        </div>
        );
    }
}

export default DisplayPinNotes;