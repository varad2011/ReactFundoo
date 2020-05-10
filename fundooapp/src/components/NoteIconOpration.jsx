import React, { Component } from 'react';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreIcon from '@material-ui/icons/More';
import CloseIcon from '@material-ui/icons/Close';
import { pinUnpin } from '../components/Service';
import { noteAddTotrash } from '../components/Service';
import { addToarchiveList } from '../components/Service';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { Card } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { getLabels } from '../components/Service';
import { removeFromArchiveList } from '../components/Service';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import { AppBar, Button, Toolbar, IconButton, ListItemIcon, makeStyles, withStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DoneIcon from '@material-ui/icons/Done';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { displaySingleNote } from '../components/Service';
import { addReminderToNote } from '../components/Service';
import { addEmailToNote } from '../components/Service';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import UnarchiveOutlinedIcon from '@material-ui/icons/UnarchiveOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import {addLabelToNote} from '../components/Service';
const ITEM_HEIGHT = 48;

class NoteIconOpration extends Component {
    state = {
        anchorEl: null,
        anchorEl2: false,
        anchorEl3: null,
        anchorEl4: false,
        open: true,
        labelStore: [],
        collaboratorOpen: false,
        singleNoteData: [],
        time: '',
        date: '',
        setTime: '',
        colaborateEmailId: '',
        collaboratedData :[],
        labelStore1: []
    };
    constructor(props) {
        super(props)
        //    this.state = {
        //        collaboratorOpen : false
        //    }
    }
    handlChange = (event) => {
        console.log("handlechange")
        this.setState({
            [event.target.name]: event.target.value
        }, () =>
            console.log(this.state, '---->name'))
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

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClick1 = () => {
        console.log("heee");
        this.setState({ anchorEl2: true });
        console.log("heee", this.anchorEl);
        this.getListOfLabel();
    };

    handleClickOpenColor = event => {
        this.setState({ anchorEl3: event.currentTarget });
        // this.setState({ anchorEl3: true });
    }

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleClose1 = () => {
        this.setState({ anchorEl2: false });
    };
    handleCloseColor = () => {
        this.setState({ anchorEl3: false });
    };
    closeReminderPicker = () => {
        this.setState({
            anchorEl4: false
        })
    };
    addNoteToTrash = (id) => {
        noteAddTotrash(id).then(Response => {
            console.log(Response)
            alert(Response.data.message)
        }).catch((error) => {

            console.log(error.response)
            alert(error.response.data)
        })
    }

    addToArchive = (id) => {
        addToarchiveList(id).then(Response => {
            console.log(Response)
            alert(Response.data.message)
        }).catch((error) => {

            console.log("erroe", error.response.message)
            alert(error.response.data)
        })
    }
    removeFromArchive = (id) => {
        removeFromArchiveList(id).then(Response => {
            console.log(Response)
            alert(Response.data.message)
        }).catch((error) => {

            console.log("erroe", error.response.message)
            alert(error.response.data)
        })
    }
    getListOfLabel = () => {
        getLabels().then(Response => {
            this.setState({
                labelStore: Response.data.data
            })

            console.log("label", this.state.labelStore)
            console.log("getAlllabel3", this.state.labelStore);
            // console.log("getAlllabel4", this.state.labelStore.labelId);
        })
            .catch((error) => {
                alert(error.response.data.message)
                console.log(error.response.data.data)
            })
    }
    collaboratorListOpen = () => {
        displaySingleNote(this.props.data).then(Response => {
            this.setState({
                singleNoteData: Response.data.data.model,
                collaboratedData :Response.data.data.collaboratorOutsList,
                collaboratorOpen: true
            })
            console.log("collaborator data ", this.state.collaboratedData)
            console.log("single note data ", this.state.singleNoteData)
        })
            .catch((error) => {
                alert(error.response.data.message)
                console.log(error.response.data.data)
            })

    }
    handleCloseCollaborator = () => {
        this.setState({
            collaboratorOpen: false
        })
    }
    openReminder = () => {
        this.setState({ anchorEl4: true })
    }
    changeBackGroudColor = (colorChnage) => {
        let note = {};
        note.noteId = this.props.data;
        note.backgroundColor = colorChnage;
        console.log("notebackground ", note)
        this.props.backgroundColorChnage(note)
    }
    addColaborateEmailId = () => {
        addEmailToNote(this.props.data, this.state.colaborateEmailId).then(Response => {
            console.log(Response)
            alert(Response.data.message)
        }).catch((error) => {
            console.log(error.response)
            alert(error.response.data)
        })
    }
    setReminder = (id) => {
        // this.setState ({
        //     setTime : this.state.date.concat(' '+this.state.time)
        // });
        console.log(this.state.setTime);
        addReminderToNote(id, this.state.date.concat(' ' + this.state.time)).then(Response => {
            console.log("reminder", Response.data.data)
        })
            .catch((error) => {
                alert(error.response.data.message)
                console.log(error.response.data.data)
            })
    }
    addLabelToNotes =( labelId ) =>{
        addLabelToNote(  this.props.data, labelId ).then(Response => {
            console.log(Response)
            alert(Response.data.message)
        }).catch((error) => {
            console.log(error.response)
            alert(error.response.data)
        })
    }
    render() {
        const { anchorEl, anchorEl2, anchorEl3, anchorEl4, open, collaboratorOpen } = this.state;
        const { data } = this.props;
        return (
            <div style={{
                "padding-bottom": '10px',
                "padding-top": '5px', "display": 'flex',
                "flex-direction": 'row'
            }}>
                <div className="iconNotes">
                    <AddAlertOutlinedIcon onClick={() => this.openReminder()} />
                    <div style={{ "position": 'absolute' }} >
                        <Popper style={{ "width": '200px', "paddingLeft": '10px' }}
                            anchorEl={anchorEl4}
                            open={Boolean(anchorEl4)}
                            role={undefined} transition disablePortal
                            onClose={this.closeReminderPicker}
                        // onClose={this.handleClose1}
                        >
                            <Paper>
                                <MenuList
                                    autoFocusItem={Boolean(anchorEl4)}
                                // anchorEl={anchorEl4}
                                //         open={Boolean(anchorEl4)}
                                //         PaperProps={{
                                //             style: {
                                //                 //   maxHeight: ITEM_HEIGHT * 4.5,
                                //                 width: '20ch',
                                //             },
                                //         }}
                                >
                                    <MenuItem>
                                        <ArrowBackOutlinedIcon onClick={this.closeReminderPicker}></ArrowBackOutlinedIcon>
                                        <text> Pick date & time</text>
                                    </MenuItem>
                                    <MenuItem>
                                        <TextField
                                            name="time"
                                            id="time"
                                            label="Alarm clock"
                                            type="time"
                                            defaultValue="07:30"
                                            //  className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            inputProps={{
                                                step: 300, // 5 min
                                            }}
                                            onChange={this.handlChange}
                                        />

                                    </MenuItem>
                                    <MenuItem>
                                        <TextField
                                            name="date"
                                            id="date"
                                            label="Birthday"
                                            type="date"
                                            defaultValue="2017-05-24"
                                            // className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={this.handlChange}
                                        />
                                    </MenuItem>
                                    <ListItem>
                                        <ListItem autoFocus button onClick={() => { this.setReminder(this.props.data) }}>save</ListItem>
                                    </ListItem>

                                </MenuList>
                            </Paper>
                        </Popper>
                    </div>
                </div>
                <div className="iconNotes"   > <PersonAddOutlinedIcon onClick={() => this.collaboratorListOpen()} />
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
                            {this.state.collaboratedData.map (o =>(
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
                                <ListItem autoFocus button color="primary" style={{
                                    // "float": 'right',
                                    // "paddingLeft": '81%'
                                }}  >save</ListItem>
                            </ListItem>
                        </List>
                    </Dialog>
                </div>
                <div className="iconNotes">
                    <ColorLensOutlinedIcon className="iconNotes"
                        style={{ "margin": '-10px' }}
                        //   aria-owns={anchorEl3 ? 'iconNotes' : undefined}
                        //   aria-haspopup="true"
                        onClick={this.handleClickOpenColor} />
                    <div >
                        <Menu
                            // style = {{ "width":'140px'}}
                            anchorEl={anchorEl3}
                            open={Boolean(anchorEl3)}
                            onClose={this.handleCloseColor}
                            PaperProps={{
                                style: {
                                    //   maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                },
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', "padding-left": '3%' }}  >
                                <div className="colorIcon" style={{ "backgroundColor": 'white' }} onClick={() => { this.changeBackGroudColor("white"); this.handleCloseColor(); }} ></div>
                                <div className="colorIcon" style={{ "backgroundColor": 'red' }} onClick={() => { this.changeBackGroudColor("#f28b82"); this.handleCloseColor(); }}></div>
                                <div className="colorIcon" style={{ "backgroundColor": 'orange' }} onClick={() => { this.changeBackGroudColor("#fbbc04"); this.handleCloseColor(); }}></div>
                                <div className="colorIcon" style={{ "backgroundColor": 'yellow' }} onClick={() => { this.changeBackGroudColor("#fff475"); this.handleCloseColor(); }}></div>
                                <div className="colorIcon" style={{ "backgroundColor": 'green' }} onClick={() => { this.changeBackGroudColor("#ccff90"); this.handleCloseColor(); }}></div>
                                <div className="colorIcon" style={{ "backgroundColor": 'teal' }} onClick={() => { this.changeBackGroudColor("#a7ffeb") }}></div>
                                <div className="colorIcon" style={{ "backgroundColor": 'blue' }} onClick={() => { this.changeBackGroudColor("#cbf0f8") }}></div>
                                <div className="colorIcon" style={{ "backgroundColor": 'darkBlue' }} onClick={() => { this.changeBackGroudColor("red") }}></div>
                                <div className="colorIcon" style={{ "backgroundColor": 'purple' }} onClick={() => { this.changeBackGroudColor("red") }}></div>
                                <div className="colorIcon" style={{ "backgroundColor": 'pink' }} onClick={() => { this.changeBackGroudColor("red") }}></div>
                                <div className="colorIcon" style={{ "backgroundColor": 'brown' }} onClick={() => { this.changeBackGroudColor("red") }}></div>
                                <div className="colorIcon" style={{ "backgroundColor": 'gray' }} onClick={() => { this.changeBackGroudColor("red") }} ></div>
                            </div>
                        </Menu>
                    </div>
                </div>
                <div className="iconNotes">
                    {this.props.archieve ? <UnarchiveOutlinedIcon onClick={() => this.removeFromArchive(this.props.data)}></UnarchiveOutlinedIcon>
                        : <ArchiveOutlinedIcon onClick={() => this.addToArchive(this.props.data)} />
                    }
                </div>

                <div className="iconNotes">
                    <MoreOutlinedIcon className="iconNotes"
                        style={{ "margin": '-10px' }}
                        // aria-owns={anchorEl ? 'iconNotes' : undefined}
                        // aria-haspopup="true"
                        onClick={this.handleClick} />
                    <div className="menuList">
                        <div>
                            <Menu
                                // style = {{ "width":'140px'}}
                                id="iconNotes"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.handleClose} >
                                <div>
                                    <MenuItem onClick={() => { this.addNoteToTrash(this.props.data); this.handleClose(); }}>Delete notes</MenuItem>
                                </div>
                                <div>
                                    <MenuItem
                                        className="iconNotes"
                                        aria-owns={anchorEl2 ? 'iconNotes' : undefined}
                                        aria-haspopup="true"
                                        onClick={() => {
                                            this.handleClick1();
                                            this.handleClose();
                                        }} >add Label</MenuItem>
                                </div>
                            </Menu>
                            <div style={{ "position": 'absolute' }}>
                                <Popper style={{ "width": '200px', "paddingLeft": '10px' }}
                                    anchorEl={anchorEl2}
                                    open={Boolean(anchorEl2)}
                                    role={undefined} transition disablePortal
                                    onClose={this.handleClose1}
                                >

                                    <Paper style={{ "paddingLeft": '20px' }}>
                                        <MenuList id="menu-list-grow"
                                            autoFocusItem={Boolean(anchorEl2)}
                                        >
                                            <MenuItem onClick={this.handleClose1} >Label Notes</MenuItem>
                                            {this.state.labelStore.map(o => (

                                                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', "padding-left": '8%' }} >
                                                    {/* {o.noteModel.map(note => (
                                                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', "padding-left": '8%' }}>

                                                            {this.props.data === note.noteId ?
                                                                <CheckBoxOutlinedIcon style={{ "padding-right": '5px' }} />
                                                                :
                                                                <CheckBoxOutlineBlankOutlinedIcon style={{ "padding-right": '5px' }} />
                                                            }

                                                            <MenuItem style={{ "margin-top": '-6px' }}>{o.labelName}

                                                            </MenuItem>

                                                        </div>

                                                    ))} */}
                                                    <CheckBoxOutlinedIcon style={{ "padding-right": '5px' }} />
                                                    <MenuItem style={{ "margin-top": '-6px' }} onClick ={()=> {this.addLabelToNotes(o.labelId);}}>{o.labelName}
                                                    </MenuItem>
                                                </div>
                                            ))}
                                        </MenuList>
                                    </Paper>
                                </Popper>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default NoteIconOpration;