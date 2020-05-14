import React, { Component } from 'react';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import UnarchiveOutlinedIcon from '@material-ui/icons/UnarchiveOutlined';
import { addToarchiveList } from '../components/Service';
import { removeFromArchiveList } from '../components/Service';

class ArchiveUnArchiveIcon extends Component {

    addToArchive = (id) => {
        addToarchiveList(id).then(Response => {
            alert(Response.data.message)
            this.callBackData();
        }).catch((error) => {
            alert(error.response.data)
        })
    }

    removeFromArchive = (id) => {
        removeFromArchiveList(id).then(Response => {
            alert(Response.data.message)
            this.callBackData();
        }).catch((error) => {
            alert(error.response.data)
        })
    }

    callBackData = () => {
        this.props.callBackData();
    }
    render() {
        return (
            <div className="iconNotes">
                {this.props.archieve ? <UnarchiveOutlinedIcon onClick={() => this.removeFromArchive(this.props.data)}></UnarchiveOutlinedIcon>
                    : <ArchiveOutlinedIcon onClick={() => this.addToArchive(this.props.data)} />
                }
            </div>
        );
    }
}

export default ArchiveUnArchiveIcon;