import axios from 'axios'

export function loginUser(UserLoginDto) {
    return axios.post('http://localhost:8080/registration/userLogin', UserLoginDto, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });

}
export function registration(RegistrationModel) {
    return axios.post('http://localhost:8080/registration/userRegistration', RegistrationModel, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}
export function linksendToResetPassword(ForgetPasswordDto) {
    return axios.post('http://localhost:8080/login/resetLink', ForgetPasswordDto, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}

export function forgetUserPassword(UserLoginDto) {
    return axios.post('http://localhost:8080/login/resetemailId', UserLoginDto, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}

export function createNote(Note) {
    return axios.post('http://localhost:8080/note/noteCreate', Note, { params: { "token": sessionStorage.getItem('token') } }, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}

export function sortList() {

    return axios.get('http://localhost:8080/note/noteListById', { params: { "token": sessionStorage.getItem('token') } }, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}

export function sortListByName(String) {
    console.log(String)
    console.log("token", sessionStorage.getItem('token'))
    return axios.get('http://localhost:8080/note/noteListName', { params: { "token": sessionStorage.getItem('token'), 'noteName': String } }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}

export function pinUnpin(int1) {
    console.log(int1)
    return axios.post('http://localhost:8080/note/pinUnpin', int1, { params: { "token": sessionStorage.getItem('token'), 'noteId': int1 } }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });

}

export function getAllReminderNote() {
    return axios.get('http://localhost:8080/note/getAllReminderNote', { params: { "token": sessionStorage.getItem('token') } }, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}
export function getPinReminderNote() {
    return axios.get('http://localhost:8080/note/AllPinReminderNote', { params: { "token": sessionStorage.getItem('token') } }, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}

export function displayTrashList() {
    return axios.get('http://localhost:8080/note/getTrashList', { params: { "token": sessionStorage.getItem('token') } }, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}

export function displayArchievedList() {
    return axios.get('http://localhost:8080/note/getArchieveList', { params: { "token": sessionStorage.getItem('token') } }, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}
export function getLabels() {
    return axios.get('http://localhost:8080/label/labelDisplay', { params: { "token": sessionStorage.getItem('token') } }, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}
export function getPinNotes() {
    return axios.get('http://localhost:8080/note/getPinNotes', { params: { "token": sessionStorage.getItem('token') } }, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}
export function noteAddTotrash(int1) {
    return axios.post('http://localhost:8080/note/trash', int1, { params: { "token": sessionStorage.getItem('token'), 'noteId': int1 } }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}
export function addToarchiveList(int1) {
    return axios.post('http://localhost:8080/note/addToArchieve', int1, { params: { "token": sessionStorage.getItem('token'), 'noteId': int1 } }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}
export function removeFromArchiveList(int1) {
    return axios.post('http://localhost:8080/note/unArchieve', int1, { params: { "token": sessionStorage.getItem('token'), 'noteId': int1 } }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}
export function displaySingleNote(int1) {
    return axios.get('http://localhost:8080/note/displayNoteById', { params: { "token": sessionStorage.getItem('token'), 'noteId': int1 } }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}
export function addReminderToNote(int1, date1) {
    return axios.post('http://localhost:8080/note/reminderAdd', { int1, date1 }, { params: { "token": sessionStorage.getItem('token'), 'noteId': int1, 'datetime': date1 } }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}

export function removeReminderToNote(int1) {
    return axios.post('http://localhost:8080/note/reminderRemove', int1,  { params: { "token": sessionStorage.getItem('token'), 'noteId': int1} }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}

export function addEmailToNote(int1, email) {
    return axios.post('http://localhost:8080/note/collaborateEmailId', { int1, email }, { params: { "token": sessionStorage.getItem('token'), 'noteId': int1, 'emailId': email } }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}
export function getLabelNote(labelId1) {
    return axios.get('http://localhost:8080/label/getNoteBylabelId', {
        params: {
            "labelId": labelId1
            , "token": sessionStorage.getItem('token')
        }
    }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });

}

export function getLabelPinNote(labelId1) {
    return axios.get('http://localhost:8080/label/getPinNoteByLabelId', {
        params: {
            "labelId": labelId1
            , "token": sessionStorage.getItem('token')
        }
    }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });

}
export function deleteNote(noteId) {
    console.log(noteId)
    return axios.post('http://localhost:8080/note/deleteFromTrash', noteId, {
        params: {
            "noteId": noteId
            , "token": sessionStorage.getItem('token')
        }
    }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}

export function unTrash(noteId) {
    console.log(noteId)
    return axios.post('http://localhost:8080/note/trashToList', noteId, {
        params: {
            "noteId": noteId
            , "token": sessionStorage.getItem('token')
        }
    }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}

export function newLabelCreate(labelModel) {
    return axios.post('http://localhost:8080/label/labelCreate',labelModel, {
        params: {
             "token": sessionStorage.getItem('token')
        }
    }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}
export function labelUpdate(labelModel) {
    return axios.post('http://localhost:8080/label/labelUpdate',labelModel, {
        params: {
             "token": sessionStorage.getItem('token')
        }
    }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}

export function deleteLabel(labelModel) {
    return axios.post('http://localhost:8080/label/labelDelete',labelModel, {
        params: {
             "token": sessionStorage.getItem('token')
        }
    }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}

export function addLabelToNote(noteId, labelId) {
    return axios.post('http://localhost:8080/label/AddToLabelToNote', { noteId, labelId }, { params: { "token": sessionStorage.getItem('token'), 'noteId': noteId, 'labelId': labelId } }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}
export function removeLabelFromNotes( labelId, noteId ) {
    return axios.post('http://localhost:8080/label/removeLabelFromNotes', { noteId, labelId }, { params: { "token": sessionStorage.getItem('token'), 'noteId': noteId, 'labelId': labelId } }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}

export function displaySearchNote(typeText) {
    return axios.get('http://localhost:8080/note/noteListBySearchText', { params: { "token": sessionStorage.getItem('token'), 'typeText': typeText } }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}

export function setNoteBackgroudColor( noteModel ) {
    return axios.post('http://localhost:8080/note/BackgroundColorUpdate', noteModel, { params: { "token": sessionStorage.getItem('token') } }
        , {
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        });
}
export function setprofilePic(file){
    return axios.post('http://localhost:8080/note/setProfilePic', file, { params: { "token": sessionStorage.getItem('token') } }
    , {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}

export function updateLoginUserProfilePic(){
    return axios.get('http://localhost:8080/registration/updateUserProfilePic', { params: { "token": sessionStorage.getItem('token') } }
    , {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}