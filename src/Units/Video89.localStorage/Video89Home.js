import React, { Component } from 'react';

let contextPath = window.location.origin;

class Video89Home extends Component {
    render() {
        localStorage.setItem('name', 'Trần Đức Anh');
        localStorage.getItem('name');
        localStorage.removeItem('name');

        return (
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-12">
                        <h3>LocalStorage</h3>

                        <p>Là nơi lưu trữ cục bộ trên trình duyệt người sử dụng trang web.</p>
                    </div>

                    <div className="col-12 mt-2">
                        <h5>Cách sử dụng:</h5>

                        <p>- Thêm một giá trị: localStorage.setItem('key', value).</p>
                        <p>- Cập nhật thì sử dụng giống như thêm một giá trị.</p>
                        <img src={`${contextPath}/assets/image/video89.1.png`} className="img-fluid rounded mb-3" alt=""/>

                        <p>- Lấy giá trị: localStorage.getItem('key').</p>
                        <img src={`${contextPath}/assets/image/video89.2.png`} className="img-fluid rounded mb-3" alt=""/>

                        <p>- Xóa: localStorage.removeItem('key').</p>
                        <img src={`${contextPath}/assets/image/video89.3.png`} className="img-fluid rounded mb-3" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video89Home;