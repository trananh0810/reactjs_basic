import React, { Component } from 'react';
import { FirebaseConnect } from './../../firebase/FirebaseCfg';

let dataSnapshot = FirebaseConnect.database().ref('demo/post1');

let contextPath = window.location.origin;

class Video115UpdateFirebase extends Component {
    render() {
        dataSnapshot.set({
            id: 1,
            title: "Tiêu đề thứ nhất"
        })
        return (
            <div>
                <p>- Bước 1: Tạo dataSnapshot.</p>
                <img src={`${contextPath}/assets/image/video115.6.png`} className="img-fluid rounded" alt=""/>

                <p>- Bước 2: sử dụng method set trong dataSnapshot vừa tạo để cập nhật lại dữ liệu.</p>
                <img src={`${contextPath}/assets/image/video115.7.png`} className="img-fluid rounded" alt=""/>
            </div>
        );
    }
}

export default Video115UpdateFirebase;