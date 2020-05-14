import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'
//import {BrowserRouter,Route,Switch}
import Login from '../components/Login';
import Clickfunction from '../components/Clickfunction';
import Registration from '../components/Registration';
import ForgetPassword from '../components/ForgetPassword';
import ResetPassword from '../components/ResetPassword';
import DashBoardWithDrawer from '../components/DashBoardWithDrawer';
import Appbar from '../components/Appbarss';
import NoteCreate from '../components/NoteCreate';
import DisplayNotes from '../components/DisplayNotes';

export default function Router() {
    return (

        <BrowserRouter>
            <Switch>
                <Route path={'/login'} exact component={Login} />
                <Route path={'/registration'} component={Registration} />
                <Route path={'/click'} exact component={Clickfunction} />
                <Route path={'/forgetPassword'} component={ForgetPassword} />
                <Route path={'/resetPassword'} component={ResetPassword} />
                <Route path={'/DashBoardWithDrawer'} component={DashBoardWithDrawer} />
                <Route path={'/appbar'} component={Appbar} />
                <Route path={'/noteCreate'} component={NoteCreate} />
                <Route path={'/getnotes'} component={DisplayNotes} />
            </Switch>
        </BrowserRouter>
    );
}