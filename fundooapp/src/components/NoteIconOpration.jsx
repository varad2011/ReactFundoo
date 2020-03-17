import React, { Component } from 'react';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreIcon from '@material-ui/icons/More';
import CloseIcon from '@material-ui/icons/Close';
import { pinUnpin } from '../components/Service';
class NoteIconOpration extends Component {
    constructor(props) {
        super(props)
        this.setState(

        )
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
            <div>
                <AddAlertIcon className="iconNotes" onClick={()=>this.setPinToNote(this.props.data)} />
                <PersonAddIcon className="iconNotes" />
                <ColorLensIcon className="iconNotes" />
                <ArchiveIcon className="iconNotes" />
                <MoreIcon className="iconNotes" />
                <CloseIcon className="iconCloseNotes" />

            </div>
        );
    }
}

export default NoteIconOpration;