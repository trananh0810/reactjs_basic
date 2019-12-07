import React, { Component } from 'react';
import Video115ReadFirebase from './Video115ReadFirebase';
import Video115UpdateFirebase from './Video115UpdateFirebase';
import Video115AddFirebase from './Video115AddFirebase';
import Video115Delete from './Video115Delete';

let contextPath = window.location.origin;

class Video115Home extends Component {
    render() {
        return (
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-12">
                        <h3>Firebase</h3>

                        <p>Firebase gồm có: Realtime database, Storage, Hosting,....</p>
                    </div>

                    <div className="col-12">
                        <h5>1. Kết nối project Reactjs với Firebase:</h5>

                        <p>- Bước 1: Tạo project trên web firebase.</p>

                        <p>- Bước 2: Trong project, cài đặt module firebase: npm install firebase.</p>

                        <p>- Bước 3: Tạo file FirebaseCfg.js:
                            <br/>+ Import firebase.
                            <br/>+ Vào trong setting của project trên firebase đã tạo ở bước 1, copy firebaseConfig.
                            <br/>+ Export firebase.initializeApp(firebaseConfig).
                        </p>
                        <img src={`${contextPath}/assets/image/video115.1.png`} className="img-fluid rounded" alt=""/>

                        <p>- Bước 4: Trong file App.js, import FirebaseCfg vừa tạo ở bước 3.</p>
                        <img src={`${contextPath}/assets/image/video115.2.png`} className="img-fluid rounded" alt=""/>
                    </div>

                    <div className="col-12 mt-2">
                        <h5>2. Đọc dữ liệu từ Firebase:</h5>

                        <Video115ReadFirebase/>
                    </div>

                    <div className="col-12 mt-2">
                        <h5>3. Cập nhật dữ liệu trên Firebase:</h5>

                        <Video115UpdateFirebase/>
                    </div>

                    <div className="col-12 mt-2">
                        <h5>4. Thêm dữ liệu vào Firebase:</h5>

                        <Video115AddFirebase/>                        
                    </div>

                    <div className="col-12 mt-2">
                        <h5>5. Xóa dữ liệu:</h5>

                        <Video115Delete/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video115Home;