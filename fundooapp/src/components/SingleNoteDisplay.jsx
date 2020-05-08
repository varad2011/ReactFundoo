import React, { Component } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { TextField, Container } from '@material-ui/core';
import { pinUnpin } from '../components/Service';
import NoteIconOpration from '../components/NoteIconOpration';
import Button from '@material-ui/core/Button';
import { displaySingleNote } from '../components/Service';
class SingleNoteDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            noteData: []
        };
    }
    openDilogbox = () => {
        this.setState({
            open: true
        })
    }
    handleClose = () => {
        // this.setState({ open: false });
        this.props.closeNote();
    };
    displayNoteData = () => {
        displaySingleNote(this.props.noteId).then(Response => {
            this.setState({
                noteData: Response.data.data
            })
            console.log(Response.data.data)
        })
            .catch((error) => {
                console.log(this.state.store)
                alert(error.response.message)
            })
    }
    render() {
        console.log("qqq", this.props.noteData);
        const { noteData } = this.props;
        return (
            <div>
                <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.props.openNote}>
                    {/* <DialogTitle>noteDisplay</DialogTitle> */}
                    <div className="displaySingleNotes" style={{ "backgroundColor": noteData.backgroundColor }}>
                        <div>
                            <TextField placeholder={noteData.title} name="title" onChange={this.handlChange} onClick={this.changeNoteOpenToFalse} style={{ "margin-top": '10px' }}></TextField>
                           {noteData.pinUnpin === false ?
                            <div className="pinNotesInCreate" style={{ 'backgroundImage': 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg==)' }} />
                          :
                          <div className="pinNotesInCreate" style={{ "backgroundImage":'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDRhMiAyIDAgMCAwLTItMkg5Yy0xLjEgMC0yIC45LTIgMnY3bC0yIDN2Mmg2djVsMSAxIDEtMXYtNWg2di0ybC0yLTNWNHoiLz4KPC9zdmc+Cg==)' }} />
                        }
                      
                            </div>

                        <div>
                            <TextField placeholder={noteData.content} name="content" onChange={this.handlChange} style={{ "margin-top": '10px' }}
                            ></TextField>
                            <NoteIconOpration  data = {noteData.noteId} archieve = {noteData.archieve}/>
                        </div>
                        <div className="createNoteButton">
                            <Button onClick={this.saveEditNotes}>saveNote</Button>
                            <Button onClick={this.handleClose}>close</Button>
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default SingleNoteDisplay;