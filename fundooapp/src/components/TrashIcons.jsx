import React, { Component } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
class TrashIcons extends Component {
    render() {
        return (
            <div>
                <div className="iconNotes">
                <TrashIcons></TrashIcons>
                </div>
                <div className="iconNotes">
                <RestoreFromTrashIcon></RestoreFromTrashIcon>
                </div>        
            </div>
        );
    }
}

export default TrashIcons;