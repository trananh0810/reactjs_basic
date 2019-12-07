import React, { Component } from 'react';

function ComponentLikeNormalFunc() {
    return (
        <div className="card">
            <img className="card-img-top" src="http://lorempixel.com/100/100" alt="" />
            <div className="card-body">
                <h6 className="card-title">Component như func bình thường</h6>
            </div>
        </div>
    );
}

let ComponentLikeAnonymousFunc = function () {
    return (
        <div className="card">
            <img className="card-img-top" src="http://lorempixel.com/100/100" alt="" />
            <div className="card-body">
                <h6 className="card-title">Component như anonymous function</h6>
            </div>
        </div>
    );
}

let ComponentLikeArrowFunc = () => {
    return (
        <div className="card">
            <img className="card-img-top" src="http://lorempixel.com/100/100" alt="" />
            <div className="card-body">
                <h6 className="card-title">Component như arrow function</h6>
            </div>
        </div>
    );
}

class ComponentLikeClass extends Component {
    render() {
        document.title = "Reactjs cơ bản - Component";
        return (
            <div className="card">
                <img className="card-img-top" src="http://lorempixel.com/100/100" alt="" />
                <div className="card-body">
                    <h6 className="card-title">Component như class</h6>
                </div>
            </div>
        );
    }
}

var contexPath = window.location.origin;


class Video5Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row my-4">
                    <div className="col-12">
                        <h3>Component</h3>

                        <p>Component trong Reactjs là một khối được đóng gói bao gồm: jsx, props, state, js.</p>

                        <p>Có 4 cách để tạo ra component:
                            <br />+ Component kiểu fuction bình thường.
                            <br />+ Component kiểu anonymous function.
                            <br />+ Component kiểu arrow function.
                            <br />+ Component kiểu class.
                        </p>
                    </div>

                    <div className="col-12">
                        <h5>Ví dụ:</h5>

                        <div className="card-deck">
                            <ComponentLikeNormalFunc />
                            <ComponentLikeAnonymousFunc />
                            <ComponentLikeArrowFunc />
                            <ComponentLikeClass />
                        </div>
                    </div>

                    <div className="col-12 mt-2">
                        <h5>Cách sử dụng:</h5>
                    </div>

                    <div className="col-12">
                        <p>- Bước 1: Tạo component.</p>

                        <p>+ Component như một function bình thường:</p>
                        <img src={contexPath + '/assets/image/video5.1.png'} className="img-fluid rounded"  alt=""/>

                        <p>+ Component như một anonymous function:</p>
                        <img src={contexPath + '/assets/image/video5.2.png'} className="img-fluid rounded"  alt=""/>

                        <p>+ Component như một arrow function:</p>
                        <img src={contexPath + '/assets/image/video5.3.png'} className="img-fluid rounded"  alt=""/>

                        <p>+ Component như một class:</p>
                        <img src={contexPath + '/assets/image/video5.4.png'} className="img-fluid rounded"  alt=""/>
                    </div>

                    <div className="col-12">
                        <p>- Bước 2: Sử dụng bằng cách gọi đến tên của component đó.</p>
                        <img src={contexPath + '/assets/image/video5.5.png'} className="img-fluid rounded"  alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video5Home;