import React, { Component } from 'react';

let contextPath = window.location.origin;

class Video22Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            name: ""
        }
    }

    renderExample = () => {
        if (this.state.isEdit) {
            return (
                <div className="">
                    <div className="form-group">
                        <input type="text" className="form-control" ref={(inputText) => this.temp = inputText}
                            defaultValue={this.state.name}/>

                        <div className="btn btn-success mt-2" onClick={this.save}>Lưu</div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="">
                    <p>Tên bạn là: {this.state.name}</p>
                    <div className="btn btn-primary" onClick={() => this.changeIsEdit(true)}>Cập nhật</div>
                </div>
            )
        }
    }

    changeIsEdit = flagEdit => this.setState({isEdit: flagEdit});

    save = () => {
        this.changeIsEdit(false);
        // this.state.name = this.temp.value;
        this.setState({
            name: this.temp.value
        });
    }

    render() {
        document.title = "Reactjs cơ bản - DefaultValue và Ref";
        return (
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-12">
                        <h3>DefaultValue</h3>

                        <p>DefaultValue dùng để set giá trị mặc định cho thẻ input.</p>

                        <h3>Ref</h3>

                        <p>Khi ta nhập dữ liệu, sử dụng ref để lưu dữ liệu vừa nhập đó vào 1 biến trung gian, biến tạm.
                        Khác với state, các thuộc tính khi thay đổi thì tất cả các component sử dụng thuộc tính đó sẽ thay đổi theo.
                        Còn biến tạm này sẽ không ảnh hưởng đến component nào.</p>
                    </div>

                    <div className="col-12">
                        <h5>Ví dụ:</h5>

                        {this.renderExample()}
                    </div>

                    <div className="col-12 mt-2">
                        <h5>Cách sử dụng:</h5>

                        <h6>* DefaultValue:</h6>
                        <p>Trong thẻ input, sử dụng: defaultValue={'{this.varName}'}</p>

                        <img src={contextPath + "/assets/image/video22.1.png"} className="img-fluid rounded" alt=""/>

                        <h6 className="mt-2">* Ref:</h6>
                        <p>- Bước 1: Trong thẻ input, sử dụng: ref={'{(inputText) => this.tempVar = inputText}'}</p>
                        <img src={contextPath + "/assets/image/video22.1.png"} className="img-fluid rounded" alt=""/>

                        <p>- Bước 2: Trong code js, để lấy giá trị bằng cách gọi đến this.tempVar.value.</p>
                        <img src={contextPath + "/assets/image/video22.2.png"} className="img-fluid rounded" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video22Home;