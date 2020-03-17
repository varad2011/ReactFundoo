import React, { Component } from 'react';
import { TextField, Container } from '@material-ui/core';
import { pinUnpin } from '../components/Service';
import NoteIconOpration from '../components/NoteIconOpration';
import PinDropIcon from '@material-ui/icons/PinDrop';
import { createNote } from '../components/Service'
class NoteCreate extends Component {
    constructor(props) {
        super()
        this.state = {
            title: '',
            content: '',
            noteOpen: false
        }
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
                {/*                 
            //     <div >
            //      <TextField placeholder = "noteName" name ="title" onChange = {this.handlChange} ></TextField>
            // </div> */}


                <div className="createNote" >

                    <Container>

                        <div>
                            <TextField placeholder="noteName" name="title" onChange={this.handlChange} onClick={this.changeNoteOpenToFalse}></TextField>
                            {this.state.noteOpen ? <PinDropIcon className="pin"  /> :null}
                        </div>

                        {this.state.noteOpen ?
                            <div>
                                <TextField placeholder="Description" name="content" onChange={this.handlChange}
                                ></TextField>
                                <NoteIconOpration />

                            </div> : null}
                        {this.state.noteOpen ?
                            <div>
                                <button onClick={this.newNotecreate}>saveNote</button>
                            </div> : null}
                    </Container>
                    <div>

                    </div>

                </div>
            </div>

        );
    }
}

export default NoteCreate;