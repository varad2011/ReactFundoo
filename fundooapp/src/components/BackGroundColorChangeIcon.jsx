import React, { Component } from 'react';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import Menu from '@material-ui/core/Menu';
import { setNoteBackgroudColor } from '../components/Service';

class BackGroundColorChangeIcon extends Component {
    state = {
        anchorEl3: null,
    }

    changeBackGroudColor = (colorChnage) => {
        let note = {};
        note.noteId = this.props.data;
        note.backgroundColor = colorChnage;
        setNoteBackgroudColor(note).then(Response => {
            this.callBackData();
        }).catch((error) => {
            alert(error.response.data.message)
        })
    }

    handleCloseColor = () => {
        this.setState({ anchorEl3: false });
    }

    handleClickOpenColor = event => {
        this.setState({ anchorEl3: event.currentTarget });
        // this.setState({ anchorEl3: true });
    }

    callBackData = () => {
        this.props.callBackData();
    }

    render() {
        const { anchorEl3 } = this.state;
        return (
            <div className="iconNotes">
                <ColorLensOutlinedIcon className="iconNotes"
                    style={{ "margin": '-10px' }}
                    onClick={this.handleClickOpenColor} />
                <div >
                    <Menu 
                        anchorEl={anchorEl3}
                        open={Boolean(anchorEl3)}
                        onClose={this.handleCloseColor}
                        PaperProps={{ style: { width: '20ch' }, }}  >
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', "padding-left": '3%' }}  >
                            <div className="colorIcon" style={{ "backgroundColor": 'white' }} onClick={() => { this.changeBackGroudColor("white"); this.handleCloseColor(); }} ></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'red' }} onClick={() => { this.changeBackGroudColor("#f28b82"); this.handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'orange' }} onClick={() => { this.changeBackGroudColor("#fbbc04"); this.handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'yellow' }} onClick={() => { this.changeBackGroudColor("#fff475"); this.handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'green' }} onClick={() => { this.changeBackGroudColor("#ccff90"); this.handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'teal' }} onClick={() => { this.changeBackGroudColor("#a7ffeb"); this.handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'blue' }} onClick={() => { this.changeBackGroudColor("#cbf0f8"); this.handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'darkBlue' }} onClick={() => { this.changeBackGroudColor("red"); this.handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'purple' }} onClick={() => { this.changeBackGroudColor("red"); this.handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'pink' }} onClick={() => { this.changeBackGroudColor("red"); this.handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'brown' }} onClick={() => { this.changeBackGroudColor("red"); this.handleCloseColor(); }}></div>
                            <div className="colorIcon" style={{ "backgroundColor": 'gray' }} onClick={() => { this.changeBackGroudColor("red"); this.handleCloseColor(); }} ></div>
                        </div>
                    </Menu>
                </div>
            </div>
        );
    }
}

export default BackGroundColorChangeIcon;