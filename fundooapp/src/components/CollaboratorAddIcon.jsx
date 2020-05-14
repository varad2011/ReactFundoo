import React, { Component } from 'react';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import Dialog from '@material-ui/core/Dialog';
import DoneIcon from '@material-ui/icons/Done';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';
import { displaySingleNote } from '../components/Service';
import { addEmailToNote } from '../components/Service';

class CollaboratorAddIcon extends Component {
    state = {
        collaboratorOpen: false,
        singleNoteData: [],
        colaborateEmailId: '',
        collaboratedData: []
    };

    collaboratorListOpen = () => {
        displaySingleNote(this.props.data).then(Response => {
            this.setState({
                singleNoteData: Response.data.data.model,
                collaboratedData: Response.data.data.collaboratorOutsList,
                collaboratorOpen: true
            })
        })
            .catch((error) => {
                alert(error.response.data.message)
            })

    }

    handleCloseCollaborator = () => {
        this.setState({
            collaboratorOpen: false
        })
    }

    handlChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () =>
            console.log(this.state, '---->name'))
    }

    addColaborateEmailId = () => {
        addEmailToNote(this.props.data, this.state.colaborateEmailId).then(Response => {
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

        const { collaboratorOpen } = this.state;

        return (
            <div className="iconNotes" > <PersonAddOutlinedIcon onClick={() => this.collaboratorListOpen()} />
                <Dialog aria-labelledby="simple-dialog-title"
                    open={collaboratorOpen}
                    onClose={this.handleCloseCollaborator}
                >
                    <DialogTitle id="simple-dialog-title">Collaborator</DialogTitle>
                    <List>
                        <ListItem button >
                            <ListItemAvatar>
                                <Avatar >
                                    <PersonIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText > {this.state.singleNoteData.emailId}(owner)</ListItemText>
                        </ListItem>
                        {this.state.collaboratedData.map(o => (
                            <div>
                                <ListItem button >
                                    <ListItemAvatar>
                                        <Avatar >
                                            <PersonIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText > {o.colEmaiId}</ListItemText>
                                </ListItem>
                            </div>
                        ))}
                        <ListItem autoFocus button >
                            <ListItemAvatar>
                                <Avatar>
                                    <AddIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <TextField name="colaborateEmailId" placeholder="enter emailId" onChange={this.handlChange}></TextField>
                            <DoneIcon onClick={this.addColaborateEmailId}></DoneIcon>
                        </ListItem>
                        <ListItem>
                            <ListItem autoFocus button color="primary" style={{}}>cancel</ListItem>
                            <ListItem autoFocus button color="primary"
                                style={{
                                    // "float": 'right',
                                    // "paddingLeft": '81%'
                                }}>save</ListItem>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        );
    }
}

export default CollaboratorAddIcon;