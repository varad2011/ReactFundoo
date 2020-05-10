import React, { Component } from 'react';
import { TextField, Container } from '@material-ui/core';
import { pinUnpin } from '../components/Service';
import NoteIconOpration from '../components/NoteIconOpration';
import PinDropIcon from '@material-ui/icons/PinDrop';
import { createNote } from '../components/Service'
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
class NoteCreate extends Component {
    constructor(props) {
        super()
        this.state = {
            title: '',
            content: '',
            noteOpen: false
        }
    }
    closeCreateNote = () => {
        this.setState({
            noteOpen: false
        });
    }
    changeNoteOpenToFalse = () => {
        this.setState({
            noteOpen: true
        });
    }

    // changeNoteOpenTotrue = () =>{
    //     this.setState({
    //         noteOpen : false
    //     });
    // }

    handlChange = (event) => {
        console.log("handlechange methoisd")
        this.setState({
            [event.target.name]: event.target.value
        }, () =>
            console.log(this.state, '---->name'))
    }

    newNotecreate = () => {
        let newNote = {};
        newNote.title = this.state.title;
        newNote.content = this.state.content;
        console.log(newNote)
        createNote(newNote).then(Response => {
            alert(Response.data.message);
            console.log(Response.data.message)
        }).catch((error) => {
            console.log(error.response)
            alert(error.response)
        })
    }

    setPinToNote = (id) => {
        console.log(id)
        pinUnpin(id)
            .then(Response => {
                console.log(Response)
                alert(Response.data.message)
            })
            .catch((error) => {
                console.log(error.response)
                alert(error.response.data)
            })
    }
    render() {
        //    const noteOpenToCreate = ({this.openFlag})=>(
        //    <div>{openFlag?}</div>
        //    );
        return (
            <div>
                <div className="createNote" >
                    <Container >
                        <div>
                            {this.state.noteOpen ?
                                <div>
                                    <div>
                                        <TextField placeholder="title" name="title" onChange={this.handlChange} onClick={this.changeNoteOpenToFalse} style={{ "margin-top": '10px' }}></TextField>
                                        <div className="pinNotesInCreate" style={{ 'backgroundImage': 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg==)' }} />
                                    </div>

                                    <div>
                                        <TextField placeholder="Description" name="content" onChange={this.handlChange} style={{ "margin-top": '10px' }}
                                        ></TextField>
                                        <NoteIconOpration />
                                    </div>
                                    <div className="createNoteButton">
                                        <Button onClick={this.newNotecreate}>saveNote</Button>
                                        <Button onClick={this.closeCreateNote}>close</Button>
                                    </div>
                                </div>
                                :
                                <InputBase placeholder="take Note" onChange={this.handlChange} onClick={this.changeNoteOpenToFalse} style={{ "margin-top": '10px' }}></InputBase>
                            }
                        </div>
                    </Container>

                </div>
                {/* <div className="createNote" >
                    <Container >
                        <div>
                            <TextField placeholder="take Note" name="title" onChange={this.handlChange} onClick={this.changeNoteOpenToFalse} style={{ "margin-top": '10px' }}></TextField>
                            {this.state.noteOpen ? <div className="pinNotesInCreate" style={{ 'backgroundImage': 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg==)' }} /> : null}
                        </div>
                        {this.state.noteOpen ?
                            <div>
                                <TextField placeholder="Description" name="content" onChange={this.handlChange} style={{ "margin-top": '10px' }}
                                ></TextField>
                                <NoteIconOpration />
                            </div> : null}
                        {this.state.noteOpen ?
                            <div className = "createNoteButton">
                                <Button onClick={this.newNotecreate}>saveNote</Button>
                                <Button>close</Button>
                            </div> : null}
                    </Container>
                    <div>
                    </div>
                </div> */}
            </div>
        );
    }
}
export default NoteCreate;