import React, { Component } from 'react';
import { noteAddTotrash } from '../components/Service';
import { addLabelToNote } from '../components/Service';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { Card } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import { getLabels } from '../components/Service';
import { removeLabelFromNotes } from '../components/Service';
import { getLabelsAddedToOpenNote } from '../components/Service';
import { getLabelsUnAddedToOpenNote } from '../components/Service';

class MoreIcon extends Component {
    state = {
        anchorEl: null,
        anchorEl2: false,
        addedLabelToNote: [],
        unAddedLabelToNote: [],
        labelStore: []
    };

    getListOfLabel = () => {
        getLabels().then(Response => {
            this.setState({
                labelStore: Response.data.data
            })
        })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    }

    handleClose1 = () => {
        this.setState({ anchorEl2: false });
    }

    handleClose = () => {
        this.setState({ anchorEl: null });
    }

    addNoteToTrash = (id) => {
        noteAddTotrash(id).then(Response => {
            alert(Response.data.message)
            this.callBackParentData();
        }).catch((error) => {
            alert(error.response.data)
        })
    }

    handleClick1 = () => {
        console.log("heee");
        this.setState({ anchorEl2: true });
        console.log("heee", this.anchorEl);
        this.displayLabelAddedToNote();
        this.displayLabelUnAddedToNote();
    }

    addLabelToNotes = (labelId) => {
        addLabelToNote(this.props.data, labelId).then(Response => {
            alert(Response.data.message)
            this.callBackData();
        }).catch((error) => {
            alert(error.response.data)
        })
    }

    removeLabel = (labelId) => {
        removeLabelFromNotes(labelId, this.props.data).then(Response => {
            alert(Response.data.message)
            console.log(Response.data.message)
            this.callBackData();
        }).catch((error) => {
            console.log(this.state.store)
            alert(error.response.message)
        })
    }

    displayLabelAddedToNote = () => {
        getLabelsAddedToOpenNote(this.props.data).then(Response => {
            this.setState({
                addedLabelToNote: Response.data.data
            })
            // this.callBackData();
        }).catch((error) => {
            console.log(this.state.store)
            alert(error.response.message)
        })
    }

    displayLabelUnAddedToNote = () => {
        getLabelsUnAddedToOpenNote(this.props.data).then(Response => {
            this.setState({
                unAddedLabelToNote: Response.data.data
            })
            // this.callBackData();
        }).catch((error) => {
            console.log(this.state.store)
            alert(error.response.message)
        })
    }

    callBackParentData = () => {
        this.props.callBackData();
    }

    callBackData = () => {
        this.displayLabelUnAddedToNote();
        this.displayLabelAddedToNote();
        this.props.callBackData();
    }

    render() {
        const { anchorEl, anchorEl2 } = this.state;
        return (
            <div className="iconNotes">
                <MoreOutlinedIcon className="iconNotes"
                    style={{ "margin": '-10px' }}
                    onClick={this.handleClick} />
                <div className="menuList">
                    <div>
                        <Menu
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
                                onClose={this.handleClose1} >
                                <Paper style={{ "paddingLeft": '20px' }}>
                                    <MenuList id="menu-list-grow"
                                        autoFocusItem={Boolean(anchorEl2)} >
                                        <MenuItem onClick={this.handleClose1} >Label Notes</MenuItem>
                                        {this.state.addedLabelToNote.map(addLabel => (
                                            <div className="menuLabelDisplay" onClick={() => { this.removeLabel(addLabel.labelId); }}>
                                                <CheckBoxOutlinedIcon style={{ "padding-right": '5px' }} />
                                                <MenuItem style={{ "margin-top": '-6px' }}  >{addLabel.labelName}
                                                </MenuItem>
                                            </div>
                                        ))}
                                        {this.state.unAddedLabelToNote.map(addLabel => (
                                            <div className="menuLabelDisplay" onClick={() => { this.addLabelToNotes(addLabel.labelId); }}>
                                                <CheckBoxOutlineBlankOutlinedIcon style={{ "padding-right": '5px' }} />
                                                <MenuItem style={{ "margin-top": '-6px' }} >{addLabel.labelName}
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
        );
    }
}

export default MoreIcon;