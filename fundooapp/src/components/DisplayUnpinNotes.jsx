import React, { Component } from 'react';
import PinDropIcon from '@material-ui/icons/PinDrop';
import { Card, ListItem } from '@material-ui/core';
import NoteIconOpration from '../components/NoteIconOpration';
import TrashIcons from '../components/TrashIcons';
import CropPortraitIcon from '@material-ui/icons/CropPortrait';
import SingleNoteDisplay from '../components/SingleNoteDisplay';
import {displaySingleNote} from '../components/Service';
class DisplayUnpinNotes extends Component {
    constructor(props) {
        super()
        this.state = {
            displaySingleNote : false,
            noteData :[]
        }
    }
    openNoteDilogbox = () => {
        this.setState({
            displaySingleNote: true
        })
    }
    handleCloseNoteDilogbox = () => {
        this.setState({ displaySingleNote: false });
    };

    displayNoteData =(noteId)=>{
        displaySingleNote(noteId).then(Response => {
            this.setState({
                noteData : Response.data.data
            })
            console.log(Response.data.data)
          })
            .catch((error) => {
                console.log(this.state.store)  
              alert(error.response.message)
            })
        };

    render() {
        return (
            <div className="displayNote" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}  >
                {/* <ListItem>notes</ListItem> */}
            {this.props.noteData.map(o => (
               
                <Card style = {{ "margin": '5px', "height": 'fit-content'}} >
                     <div className='singleNoteDisplay'  style = {{"backgroundColor":o.backgroundColor}} >
                     {(o.trash === false )? 
                     <div  className = "pinNotes" style = {{ 'backgroundImage':'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg==)'}}>                   
                     {/* <CropPortraitIcon /> */}
                     </div>
                      : null}
                    <div className = "displayNoteText" onClick ={()=>{ this.displayNoteData(o.noteId); this.openNoteDilogbox(); }}>
                        {o.title}
                    </div>
                    <div className = "displayNoteText">
                        {o.content}
                    </div>
                    <div className = "reminderDiv" >
                    {o.noteReminder === true ? 
                    <div>{o.reminderDatTime}</div> 
                    : null }           
                       
                    </div>
                    {(o.trash === true )? 
                    <TrashIcons
                      noteId = {o.noteId} 
                     ></TrashIcons>
                    :
                    < NoteIconOpration data = {o.noteId} archieve = {o.archieve}></NoteIconOpration> 
                    }
                    {/* < TrashIcons noteId = {o.noteId}></TrashIcons>
                    < NoteIconOpration data = {o.noteId}></NoteIconOpration>  */}
                   </div>   
                               
                </Card>
              
            ))
          
       }
      <SingleNoteDisplay 
                    noteData = {this.state.noteData}
                //    noteId = {o.noteId}
                //    title = {o.title}
                    openNote = {this.state.displaySingleNote} 
                   closeNote = {this.handleCloseNoteDilogbox}>
                       </SingleNoteDisplay>      
        </div>
        );
    }
}

export default DisplayUnpinNotes;