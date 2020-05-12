import React, { Component } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import {unTrash} from '../components/Service';
import {deleteNote} from '../components/Service';
class TrashIcons extends Component {

    unTrashNote= (noteId) =>{
        unTrash(noteId).then(Response => {
            console.log(Response.data.message)
            this.props.callBackParentData();
          })
            .catch((error) => {
              alert(error.response.message)
            })
     }
     deleteNotes = (noteId) =>{
        deleteNote(noteId).then(Response => {
            console.log(Response.data.message)
            this.props.callBackParentData();
          })
            .catch((error) => {
              alert(error.response.message)
            })
     }

    render() {
        const { noteId } = this.props;
        return (
            <div style={{
                "padding-bottom": '10px',
                "padding-top": '5px', "display": 'flex',
                "flex-direction": 'row'
            }}>
                <div className="iconNotes">
                    <DeleteForeverIcon onClick ={()=>{ this.deleteNotes(noteId);}} ></DeleteForeverIcon>
                </div>
                <div className="iconNotes">
                    <RestoreFromTrashIcon onClick ={()=>{ this.unTrashNote(noteId);}} ></RestoreFromTrashIcon>
                </div>
            </div>
        );
    }
}


export default TrashIcons;