import React, { Component } from 'react';

let contextPath = window.location.origin;

class Video17Home extends Component {
    mess1 = () => alert("Gọi hàm không tham số thành công!");
    mess2 = (message) => alert(message);

    render() {
        document.title = "Reactjs cơ bản - Call Function";
        return (
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-12">
                        <h3>Gọi method từ view</h3>
                    </div>

                    <div className="col-12">
                        <h5>Ví dụ:</h5>

                        <div className="btn btn-primary" onClick={this.mess1}>
                            Gọi phương thức không tham số
                        </div> <br />
                        
                        <div className="btn btn-secondary mt-2" 
                            onClick={() => this.mess2("Gọi hàm có tham số bằng cách sử dụng arrow function thành công!")}>
                            Gọi hàm có tham số sử dụng arrow function
                        </div> <br />
                        
                        <div className="btn btn-secondary mt-2" 
                            onClick={this.mess2.bind(this, "Gọi hàm có tham số bằng cách sử dụng bind!")}>
                            Gọi hàm có tham số sử dụng bind
                        </div>
                    </div>

                    <div className="col-12 mt-2">
                        <h5>Cách sử dụng:</h5>
                    </div>

                    <div className="col-12">
                        <h6>* Đối với function không tham số:</h6>

                        <p>Sử dụng eventName={'{this.funcName}'}.</p>

                        <img src={contextPath + '/assets/image/video17.1.png'} className="img-fluid rounded" alt=""/>
                    </div>

                    <div className="col-12 mt-2">
                        <h6>* Đối với function có tham số:</h6>

                        <p>- Cách 1: Sử dụng arrow function.</p>

                        <img src={contextPath + '/assets/image/video17.2.png'} className="img-fluid rounded" alt=""/>

                        <p>- Cách 2: Sử dụng bind.</p>

                        <img src={contextPath + '/assets/image/video17.3.png'} className="img-fluid rounded" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video17Home;