import React, { Component } from 'react';
import Video61ChildOne from './Video61ChildOne';
import Video61ChildTwo from './Video61ChildTwo';
import Video61ChildThree from './Video61ChildThree';

let contextPath = window.location.origin;

class Video61Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayImage: true
        }
    }

    notiMess = () => alert("Kết nối component con tới component cha thành công!!!");

    changeDisplay = () => this.setState({ isDisplayImage: !this.state.isDisplayImage });

    render() {
        return (
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-12">
                        <h3>Kết nối component cha và component con</h3>
                    </div>

                    <div className="col-12">
                        <p>Component con:</p>

                        <Video61ChildOne conn={this.notiMess} />
                    </div>

                    <div className="col-12 mt-2">
                        <h5>Cách sử dụng:</h5>

                        <p>- Bước 1: Tạo 1 func trong component cha.</p>
                        <img src={`${contextPath}/assets/image/video61.1.png`} className="img-fluid rounded" alt="" />

                        <p>- Bước 2: Trong thẻ component con tại component cha, truyền hàm vừa tạo vào component con thông qua props.</p>
                        <img src={`${contextPath}/assets/image/video61.2.png`} className="img-fluid rounded" alt="" />

                        <p>- Bước 3: Trong component con, gọi hàm được truyền vào từ component cha thông qua props.</p>
                        <img src={`${contextPath}/assets/image/video61.3.png`} className="img-fluid rounded" alt="" />
                    </div>

                    <div className="col-12 mt-2">
                        <hr />

                        <h3>Kết nối hai component chung cha</h3>

                        <h5>Ví dụ:</h5>
                    </div>

                    <div className="col-6 mt-2">
                        <p>Component ChildTwo</p>

                        <Video61ChildTwo changeDisplay={this.changeDisplay} 
                                        isDisplayImage={this.state.isDisplayImage} />
                    </div>

                    <div className="col-6 mt-2">
                        <p>Component ChildThree</p>

                        <Video61ChildThree isDisplayImage={this.state.isDisplayImage} />
                    </div>

                    <div className="col-12 mt-2">
                        <h5>Cách sử dụng:</h5>

                        <p>- Bước 1: Tại component cha, tạo 1 thuộc tính làm điều kiện hiển thị (trung gian) trong state.</p>
                        <img src={`${contextPath}/assets/image/video61.4.png`} className="img-fluid rounded" alt="" />

                        <p>- Bước 2: Tạo một func để thay đổi giá trị của thuộc tính điều kiện này.</p>
                        <img src={`${contextPath}/assets/image/video61.5.png`} className="img-fluid rounded" alt="" />

                        <p>- Bước 3:
                            <br />+ Truyền func trên vào component nguồn tác động.
                            <br />+ Truyền thuộc tính điều kiện trong state vào 2 component con.
                        </p>
                        <img src={`${contextPath}/assets/image/video61.6.png`} className="img-fluid rounded" alt="" />

                        <p>- Bước 4: Trong component nguồn tác động:
                            <br/>+ Sử dụng thuộc tính điều kiện được truyền vào làm điều kiện hiển thị.
                            <br/>+ Gọi đến func được truyền vào để thay đổi thuộc tính điều kiện.
                        </p>
                        <img src={`${contextPath}/assets/image/video61.7.png`} className="img-fluid rounded" alt="" />

                        <p>- Bước 5: Tromg component được tác động, sử dụng thuộc tính điều kiện được truyền vào từ component cha làm điều kiện hiển thị.</p>
                        <img src={`${contextPath}/assets/image/video61.8.png`} className="img-fluid rounded" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Video61Home;