import React, { Component } from 'react';
import { FirebaseConnect } from './../../firebase/FirebaseCfg';

let dataSnapshot = FirebaseConnect.database().ref('demo');
let contextPath = window.location.origin;


class Video115Delete extends Component {
    delete = () => {
        dataSnapshot.child('post1').remove();
        alert("Xóa dữ liệu thành công!")
    };

    render() {
        return (
            <div>
                <div className="btn btn-outline-danger my-2" onClick={this.delete}>Xóa</div>

                <p>- Bước 1: Tạo dataSnapshot.</p>
                <img src={`${contextPath}/assets/image/video115.6.png`} className="img-fluid rounded" alt=""/>

                <p>- Bước 2: sử dụng dataSnapshot.child('idDelete').remove().</p>
                <img src={`${contextPath}/assets/image/video115.9.png`} className="img-fluid rounded" alt=""/>
            </div>
        );
    }
}

export default Video115Delete;