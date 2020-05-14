import React, { Component } from 'react';
import ReminderSetIcon from '../components/ReminderSetIcon';
import CollaboratorAddIcon from '../components/CollaboratorAddIcon';
import BackGroundColorChangeIcon from '../components/BackGroundColorChangeIcon';
import ArchiveUnArchiveIcon from '../components/ArchiveUnArchiveIcon';
import MoreIcon from '../components/MoreIcon';

class NoteIconOpration extends Component {
   
    callBackData = () =>{
        if(this.props.displaySingleNote === true){
            this.props.callBackDisplayNoteData();
        }else{
            this.props.callBackParentData();
        }
    }
    
    render() {
        return (
            <div style={{
                "padding-bottom": '10px',
                "padding-top": '5px', "display": 'flex',
                "flex-direction": 'row'
            }}>
                <ReminderSetIcon data ={this.props.data} callBackData = {this.callBackData}></ReminderSetIcon>
                <CollaboratorAddIcon data ={this.props.data} callBackData = {this.callBackData}></CollaboratorAddIcon>
               <BackGroundColorChangeIcon data ={this.props.data} callBackData = {this.callBackData} ></BackGroundColorChangeIcon>
               <ArchiveUnArchiveIcon  archieve = {this.props.archieve} data ={this.props.data} callBackData = {this.callBackData}></ArchiveUnArchiveIcon>
               <MoreIcon data ={this.props.data} callBackData = {this.callBackData} ></MoreIcon>
            </div>
        );
    }
}

export default NoteIconOpration;