import React, { Component } from 'react';

var ComponentOne = (props) => {
    return (
        <div className="card">
            <img className="card-img-top" src="http://lorempixel.com/100/100" alt="" />
            <div className="card-body">
                <h6 className="card-title">{props.productName}</h6>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

class ComponentTwo extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src="http://lorempixel.com/100/100" alt="" />
                <div className="card-body">
                    <h6 className="card-title">{this.props.productName}</h6>
                    <p>{this.props.price}</p>
                </div>
            </div>
        );
    }
}

let contextPath = window.location.origin;


class Video9Home extends Component {
    render() {
        document.title = "Reactjs cơ bản - Props";
        return (
            <div className="container-fluid">
                <div className="row my-4">
                    <div className="col-12">
                        <h3>Props</h3>

                        <p>props là một từ khóa trong Reactjs. Khi truyền dữ liệu vào component thông qua attributes của thẻ component đó thì các giá trị đó sẽ được chứa trong component.</p>
                    </div>

                    <div className="col-12 mt-2">
                        <h5>Ví dụ:</h5>
                    </div>

                    <div className="col-12 card-deck">
                        <ComponentOne productName="Sản phẩm 1" price="100.000đ" />
                        <ComponentOne productName="Sản phẩm 2" price="150.000đ" />
                        <ComponentTwo productName="Sản phẩm 3" price="250.000đ" />
                    </div>

                    <div className="col-12 mt-2">
                        <h5>Cách sử dụng:</h5>
                    </div>

                    <div className="col-12">
                        <h6>* Đối với component dạng function:</h6>
                    </div>

                    <div className="col-12">
                        <p>- Bước 1:
                            <br />+ Tạo component dạng function.
                            <br />+ Trong phần tham số truyền vào của function, ta truyển vào props.
                            <br />+ Trong code JSX, sử dụng '{'{props.attrName}'}' để lấy dữ liệu. (attrName là tên attribute được sử dụng trong thẻ component của Component này).
                        </p>

                        <img src={contextPath + '/assets/image/video9.1.png'} className="img-fluid rounded" alt=""/>
                    </div>

                    <div className="col-12">
                        <p>- Bước 2:
                            <br />+ Gọi đến thẻ component của Component đã đượp định nghĩa.
                            <br />+ Sử dụng các attribute để truyền vào tương ứng với các thuộc tính của props ta sử dụng ở bước trên.
                        </p>

                        <img src={contextPath + '/assets/image/video9.2.png'} className="img-fluid rounded" alt=""/>
                    </div>

                    <div className="col-12 mt-4">
                        <h6>* Đối với component dạng class:</h6>
                    </div>

                    <div className="col-12">
                        <p>- Bước 1:
                            <br />+ Tạo component dạng class, kế thừa từ Component.
                            <br />+ Sử dụng '{'{this.props.attrName}'}' để lấy dữ liệu.
                        </p>

                        <img src={contextPath + '/assets/image/video9.3.png'} className="img-fluid rounded" alt=""/>
                    </div>

                    <div className="col-12">
                        <p>- Bước 2:
                            <br/>+ Gọi đến thẻ component của Component đã đượp định nghĩa.
                            <br/>+ Sử dụng các attribute để truyền vào tương ứng với các thuộc tính của props ta sử dụng ở bước trên.
                        </p>

                        <img src={contextPath + '/assets/image/video9.4.png'} className="img-fluid rounded" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video9Home;