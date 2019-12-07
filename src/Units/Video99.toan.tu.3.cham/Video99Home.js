import React, { Component } from 'react';

let contextPath = window.location.origin;

class Video99Home extends Component {
    render() {
        return (
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-12">
                        <h3>Toán tử ba chấm</h3>
                    </div>

                    <div className="col-12 mt-2">
                    <h5>Ví dụ 1:</h5>
                        <p>Code:</p>
                        <img src={`${contextPath}/assets/image/video99.1.png`} className="img-fluid rounded" alt=""/>

                        <p>Console log:</p>
                        <img src={`${contextPath}/assets/image/video99.2.png`} className="img-fluid rounded shadow mb-2" alt=""/>

                        <p>Ta khai báo một object product1 và gán product2 bằng product 1. Khi thay đổi giá trị của product2 thì giá trị của product1 cũng sẽ thay đổi theo do cả 2 object này cùng trỏ về một ô nhớ.</p>
                    </div>

                    <div className="col-12 mt-2">
                        <h5>Ví dụ 2:</h5>

                        <p>Code:</p>
                        <img src={`${contextPath}/assets/image/video99.3.png`} className="img-fluid rounded" alt=""/>

                        <p>Console log:</p>
                        <img src={`${contextPath}/assets/image/video99.4.png`} className="img-fluid rounded shadow mb-2" alt=""/>

                        <p>Trong ví dụ 2 này, ta có thể thấy rằng sau khi thay đổi product2 thì product1 không bị thay đổi do ta đã sử dụng toán tử ba chấm.</p>
                    </div>

                    <div className="col-12 mt-2">
                        <h5>Cách sử dụng:</h5>

                        <p>- Đối biến có kiểu dữ liệu không phải object hoặc mảng: let var2 = ...var1.</p>
                        <p>- Đối với biến có kiểu dữ liệu là object: let obj2 = {'{...obj1}'}.</p>
                        <p>- Đối với biến có kiểu dữ liệu là mảng: let arr2 = [...arr1].</p>
                        <p>- Viết tắt:</p>
                        <p>+ Ghi đè:</p>
                        <img src={`${contextPath}/assets/image/video99.5.png`} className="img-fluid rounded shadow mb-2" alt=""/>
                        <p>+ Thêm mới phần tử:</p>
                        <img src={`${contextPath}/assets/image/video99.6.png`} className="img-fluid rounded shadow mb-2" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video99Home;