import axios from 'axios'

export function loginUser(UserLoginDto) {

    console.log("comming from login", UserLoginDto)
    return axios.post('http://localhost:8080/login/userLogin', UserLoginDto, {
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

    return axios.get('http://localhost:8080/note/noteListById', { params: { "token": sessionStorage.getItem('token')  } }, {
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
    return axios.post('http://localhost:8080/note/pinUnpin',int1, { params: { "token": sessionStorage.getItem('token'), 'noteId': int1 } }
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

export function displayTrashList() {
    console.log("trash list file")
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