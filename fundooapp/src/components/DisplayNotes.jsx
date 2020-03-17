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
            store: []
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
    console.log(Response.data.data)
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
                       < NoteIconOpration data = {o.noteId}></NoteIconOpration>                      
                    </Card>
                ))
           }
            </div>
        )
    }
}

export default DisplayNotes;