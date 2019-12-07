import React, { Component } from 'react';


let contextpath = window.location.origin;

class Video12Home extends Component {
    render() {
        document.title = "Reactjs cơ bản - Map";
        return (
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-12">
                        <h3>Map</h3>

                        <p>Map được sử dụng để chạy vòng lặp qua từng phần tử. Có chức năng tương tự như forEach.</p>
                    </div>

                    <div className="col-12">
                        <h5>Cách sử dụng:</h5>
                    </div>

                    <div className="col-12">
                        <p>- Bước 1: Khai báo mảng chứa dữ liệu.</p>

                        <img src={contextpath + "/assets/image/video12.1.png"} className="img-fluid rounded" alt=""/>
                    </div>

                    <div className="col-12">
                        <p>- Bước 2: Dùng biến mảng đã khai báo gọi đến map để chạy vòng lặp.</p>

                        <img src={contextpath + "/assets/image/video12.2.png"} className="img-fluid rounded" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video12Home;