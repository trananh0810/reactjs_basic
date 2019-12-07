import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

let contextPath = window.location.origin;

class Video46Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false
        }
    }
    
    changeValue = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    changeImage = (event) => {
        const name = event.target.name;

        const fileName = event.target.files[0].name;

        this.setState({
            [name]: fileName
        });
    }

    clickRedirect = () => this.setState({isRedirect: true});

    save = () => {
        alert(`Name: ${this.state.name} / Tỉnh thành: ${this.state.city} / Ảnh: ${this.state.image}`)
    }

    render() {
        document.title = "Reactjs cơ bản - Form"

        if (this.state.isRedirect){
            return <Redirect to="/video5"/>
        }
        return (
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-12">
                        <h3>Form</h3>

                        <p>Được sử dụng để lấy dữ liệu từ người dùng.</p>
                    </div>

                    <div className="col-12 mt-2">
                        <h5>Ví dụ:</h5>

                        <div className="form-group">
                            <label htmlFor="txtName">Tên</label>
                            <input type="text" className="form-control" name="name" id="txtName" 
                                    onChange={(event) => this.changeValue(event)}/>

                            <label htmlFor="cbxCity">Tỉnh thành</label>
                            <select className="form-control" name="city" id="cbxCity" 
                                    onChange={(event) => this.changeValue(event)}>
                                <option value="Hà Nội">Hà Nội</option>
                                <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                                <option value="Phú Thọ">Phú Thọ</option>
                            </select>

                            <label htmlFor="fileImage">Ảnh</label>
                            <input type="file" className="form-control-file" name="image" id="fileImage"  
                                    onChange={(event) => this.changeImage(event)}/>

                            <div className="btn btn-primary mt-2" onClick={this.save}>Save</div>
                        </div>
                    </div>

                    <div className="col-12 mt-2">
                        <h5>Cách sử dụng:</h5>

                        <p>
                            - Bước 1: Tạo func nhận vào 1 đối tượng event.
                            <br/>+ event.target.name để lấy ra name của thẻ.
                            <br/>+ event.target.value để lấy ra value của thẻ.
                            <br/>+ Đối với input file thì sử dụng event.target.files để lấy ra mảng các file.
                            <br/>+ setState với [name]=vale.
                        </p>

                        <img src={`${contextPath}/assets/image/video46.1.png`} className="img-fluid rounded" alt=""/>

                        <p>
                            - Bước 2: Trong thẻ input, sử dụng sự kiện onChange và gọi đến func vừa tạo.
                        </p>
                        <img src={`${contextPath}/assets/image/video46.2.png`} className="img-fluid rounded" alt=""/>
                    </div>

                    <div className="col-12 mt-4">
                        <hr/>

                        <h3>Redirect</h3>

                        <div className="btn btn-primary mt-2" onClick={this.clickRedirect}>
                            Chuyển trang về bài Component
                        </div>

                        <h5>Cách sử dụng:</h5>

                        <p>
                            - Import Redirect từ react-router-dom.
                            <br/>- Sử dụng 1 biến trong state làm điều kiện.
                            <br/>- Khi bấm nút thì gọi sự kiện, trong sự kiện này thay đổi biến điều kiện trong state.
                            <br/>- Trong render viết câu điều kiện, nếu điều kiện đúng thì return thẻ Redirect để chuyển trang.
                        </p>

                        <img src={`${contextPath}/assets/image/video46.3.png`} className="img-fluid rounded mt-2" alt=""/>
                        <img src={`${contextPath}/assets/image/video46.4.png`} className="img-fluid rounded mt-2" alt=""/>
                        <img src={`${contextPath}/assets/image/video46.5.png`} className="img-fluid rounded mt-2" alt=""/>
                        <img src={`${contextPath}/assets/image/video46.6.png`} className="img-fluid rounded mt-2" alt=""/>
                        <img src={`${contextPath}/assets/image/video46.7.png`} className="img-fluid rounded mt-2" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video46Home;