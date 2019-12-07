import React, { Component } from 'react';

let contextPath = window.location.origin;

class Video24Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplay: true
        }
    }

    render() {
        document.title = "Reactjs cơ bản - Component LifeCycle";
        return (
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-12">
                        <h3>Component LifeCycle</h3>

                        <img src={contextPath + "/assets/image/lifecycle-reactjs.png"} className="img-fluid rounded shadow" alt="" />
                    </div>

                    <div className="col-12 mt-2">
                        <h5>* Init:</h5>
                        <p>Là quá trình khởi tạo props và state. Được thực hiện trong constructor.</p>

                        <img src={contextPath + "/assets/image/video24.1.png"} className="img-fluid rounded" alt="" />
                    </div>

                    <div className="col-12 mt-2">
                        <h5>* Mounting</h5>

                        <p>- Là quá trình gắn dữ liệu.</p>
                        <p>- Có 3 phương thức được thực hiện theo thứ tự như sau:
                            <br />+ componentWillMount:
                            <br />+ render:
                            <br />+ componentDidMount:
                        </p>
                    </div>

                    <div className="col-12 mt-2">
                        <h5>* Update:</h5>

                        <h6>Props:</h6>

                        <p>Khi props được thay đổi, các hàm sau sẽ được thực hiện:
                            <br />+ componentWillReceiveProps: được thực hiện khi có 1 prop được gửi đến.
                            <br />+ shouldComponentUpdate: được thực hiện khi 1 prop thay đổi giá trị. Hàm này sẽ trả về true/false. Nếu false thì sẽ dừng lại.
                                    Nếu là true thì 3 hàm tiếp theo dưới đây sẽ thực hiện.
                            <br />+ componentWillUpdate:
                            <br />+ render:
                            <br />+ componentDidUpdate:
                        </p>

                        <h6>State:</h6>

                        <p>Khi state được thay đổi, các hàm sau sẽ được thực hiện:
                            <br />+ shouldComponentUpdate: được thực hiện khi 1 thuộc tính của state thay đổi giá trị. Hàm này sẽ trả về true/false. Nếu false thì sẽ dừng lại.
                                    Nếu là true thì 3 hàm tiếp theo dưới đây sẽ thực hiện.
                            <br />+ componentWillUpdate:
                            <br />+ render:
                            <br />+ componentDidUpdate:
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video24Home;