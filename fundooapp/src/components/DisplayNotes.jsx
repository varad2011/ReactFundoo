import React, { Component } from 'react';
import { sortList } from '../components/Service'
import { Card } from '@material-ui/core';
import { Container } from '@material-ui/core';
import PinDropIcon from '@material-ui/icons/PinDrop';
import NoteIconOpration from '../components/NoteIconOpration'
import { pinUnpin } from '../components/Service';
class DisplayNotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // title : '',
            // content : '',
            // trash : false,
            // pinUnpin : false,
            // archieve : false,
            // localdate :'',
            store:[]
        };
    }
    componentDidMount() {
        this.getNotesData()
    }

    getNotesData = () => {
     sortList().then(Response => {
            this.setState({
                store: Response.data.data
            })
    console.log("data" ,Response.data.data )
        })
            .catch((error) => {
                alert(error.response)
            })
    }
    setPinToNote = (id) => {
       
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
        return (
            // style = {{display :'flex', flexDirection :'row', flexWrap : 'wrap'}} 
            <div className="displayNote" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}  >
                {this.state.store.map(o => (

                    <Card className='singleNoteDisplay'>
                        <div style = {{'backgroundImage':'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDRhMiAyIDAgMCAwLTItMkg5Yy0xLjEgMC0yIC45LTIgMnY3bC0yIDN2Mmg2djVsMSAxIDEtMXYtNWg2di0ybC0yLTNWNHoiLz4KPC9zdmc+Cg==)'}}></div>
                        <PinDropIcon style={{ 'margin-left': '200px' }}  onClick={()=>this.setPinToNote(this.data.noteId)}/>
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
        )
    }
}

export default DisplayNotes;