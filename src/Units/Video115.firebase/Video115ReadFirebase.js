import React, { Component } from 'react';
import { FirebaseConnect } from './../../firebase/FirebaseCfg';

let database = FirebaseConnect.database().ref('demo');

let contextPath = window.location.origin;

class Video115ReadFirebase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    renderList = () => {
        this.state.list.map(item => {

        })
    }

    render() {
        // database.on('value', snap => console.log(Object.entries(snap.val())));
        database.on('value', snap => this.state.list = snap.val());

        return (
            <div>
                <p>- Bước 1: Import FirebaseConnect từ FirebaseCfg.js đã tạo.</p>
                <img src={`${contextPath}/assets/image/video115.3.png`} className="img-fluid rounded" alt="" />

                <p>- Bước 2: Tạo database = FirebaseConnect.database().ref('table-name').</p>
                <img src={`${contextPath}/assets/image/video115.4.png`} className="img-fluid rounded" alt="" />

                <p>- Bước 3:
                    <br />+ Đọc dữ liệu 1 lần duy nhất: sử dụng database.once('value').then(funcCallback).
                    <br />+ Đọc dữ liệu theo thời gian thực: sử dụng database.on('value').then(funcCallback).
                </p>
                <img src={`${contextPath}/assets/image/video115.5.png`} className="img-fluid rounded" alt="" />
            </div>
        );
    }
}

export default Video115ReadFirebase;