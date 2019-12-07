import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Video5Home from '../Units/Video5-8.component/Video5Home';
import Video9Home from '../Units/Video9.props/Video9Home';
import Video11Home from '../Units/Video11.JSX/Video11Home';
import Video12Home from '../Units/Video12.map/Video12Home';
import Video17Home from '../Units/Video17.callMethod/Video17Home';
import Video19Home from '../Units/Video19.state/Video19Home';
import Video22Home from '../Units/Video22.defaultValue.ref/Video22Home';
import Video24Home from '../Units/Video24.lifecycle.component/Video24Home';
import Video29Home from '../Units/Video29.router/Video29Home';
import NotFound from '../Units/NotFound';
import Video29Detail from '../Units/Video29.router/Video29Detail';
import Video46Home from '../Units/Video46.form/Video46Home';
import Video61Home from '../Units/Video61.connect.component/Video61Home';
import Video89Home from '../Units/Video89.localStorage/Video89Home';
import Video99Home from '../Units/Video99.toan.tu.3.cham/Video99Home';
import Video101Home from '../Units/Video101.redux/Video101Home';
import Video115Home from './../Units/Video115.firebase/Video115Home';
import StorageHome from '../Units/FirebaseStorage/StorageHome';
import CloudFireStore from './../Units/CloudFireStore/CloudFireStore';

class RouterApp extends Component {
    render() {
        return (
            <Switch>
                <Route path="/video5" component={Video5Home}/>
                <Route path="/video9" component={Video9Home}/>
                <Route path="/video11" component={Video11Home}/>
                <Route path="/video12" component={Video12Home}/>
                <Route path="/video17" component={Video17Home}/>
                <Route path="/video19" component={Video19Home}/>
                <Route path="/video22" component={Video22Home}/>
                <Route path="/video24" component={Video24Home}/>
                <Route path="/video29" component={Video29Home}/>
                <Route path="/video29detail/:slug.:id" component={Video29Detail}/>
                <Route path="/video46" component={Video46Home}/>
                <Route path="/video61" component={Video61Home}/>
                <Route path="/video89" component={Video89Home}/>
                <Route path="/video99" component={Video99Home}/>
                <Route path="/video101" component={Video101Home}/>
                <Route path="/video115" component={Video115Home}/>
                <Route path="/firebaseStorage" component={StorageHome}/>
                <Route path="/cloudFireStore" component={CloudFireStore}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        );
    }
}

export default RouterApp;