import React, { Component } from 'react';
import { FirebaseConnect } from './../../firebase/FirebaseCfg';

let dataSnapshot = FirebaseConnect.database().ref('demo');
let contextPath = window.location.origin;

class Video115AddFirebase extends Component {
    addData = () => {
        dataSnapshot.push({
            title: "Cộng hòa xã hội chủ nghĩa Việt Nam"
        })

        alert("Thêm dữ liệu thành công. Kiểm tra ở Firebase");
    }
    render() {
        return (
            <div>
                <div className="btn btn-outline-info my-2" onClick={this.addData}>Thêm dữ liệu</div>
                
                <p>- Bước 1: Tạo dataSnapshot.</p>
                <img src={`${contextPath}/assets/image/video115.6.png`} className="img-fluid rounded" alt=""/>

                <p>- Bước 2: sử dụng method của dataSnapshot để thêm dữ liệu vào firebase:
                    <br/>+ Trong phần tham số truyền vào của push là một object.
                    <br/>+ Method push sẽ tự tạo id cho phần tử mới.
                </p>
                <img src={`${contextPath}/assets/image/video115.8.png`} className="img-fluid rounded" alt=""/>
            </div>
        );
    }
}

export default Video115AddFirebase;