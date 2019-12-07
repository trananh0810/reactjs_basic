import React, { Component } from 'react';

let contextPath = window.location.origin;

class Video19Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplay: true
        }
    }

    renderImageAndBtn = () => {
        if (this.state.isDisplay) {
            return (
                <div className="">
                    <div className="btn btn-secondary" onClick={() => this.changeDisplay(false)}>Hide</div> <br/>
                    <img src={contextPath + "/logo192.png"} alt="" />
                </div>
            )
        } else {
            return <div className="btn btn-primary" onClick={() => this.changeDisplay(true)}>Show</div>
        }
    }

    changeDisplay = flagDisplay => this.setState({isDisplay: flagDisplay});

    render() {
        document.title = "Reactjs cơ bản - State";
        return (
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-12">
                        <h3>State</h3>

                        <p>
                            - State là một từ khóa trong Reactjs.
                            <br />- Là một đối tượng trung gian, sử để lưu các biến.
                            <br />- Là một đối tượng, có thể thêm thuộc tính không giới hạn.
                            <br />- Khi thuộc tính của state bị thay đổi, các function khác sẽ được tự động cập nhật theo.
                        </p>
                    </div>

                    <div className="col-12 mt-2">
                        <h5>Ví dụ:</h5>

                        {this.renderImageAndBtn()}
                    </div>

                    <div className="col-12 mt-2">
                        <h5>Cách sử dụng:</h5>
                    </div>

                    <div className="col-12 mt-2">
                        <h6>* Khai báo state:</h6>

                        <p>Khai báo state trong contructor.</p>

                        <img src={contextPath + "/assets/image/video19.1.png"} className="img-fluid rounded" alt=""/>
                    </div>

                    <div className="col-12 mt-2">
                        <h6>* Thay đổi thuộc tính trong state:</h6>

                        <p>Sử dụng this.setState({'{propName: value}'}).</p>

                        <img src={contextPath + "/assets/image/video19.2.png"} className="img-fluid rounded" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video19Home;