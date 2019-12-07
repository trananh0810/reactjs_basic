import React, { Component } from 'react';


let contextPath = window.location.origin;

class Video11Home extends Component {
    render() {
        document.title = "Reactjs cơ bản - JSX";
        return (
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-12">
                        <h3>JSX</h3>

                        <p>
                        - JSX là viết tắt của Javascipt Extension.
                        <br/>- JSX có cú pháp tương tự như html.
                        <br/>- Được sử dụng trong Reactjs nhằm viết code js trong html.
                        <br/>- Để viết code js trong JSX, ta sử dụng '{'{ //code js }'}'.
                        </p>
                    </div>

                    <div className="col-12">
                        <h5>Ví dụ:</h5>

                        <img src={contextPath + "/assets/image/video9.1.png"} className="img-fluid rounded" alt=""/>
                    </div>

                    <div className="col-12">
                        <p>Để chuyển code html sang JSX, ta vào trang <a href="https://magic.reactjs.net/htmltojsx.htm" target="blank">Html to JSX</a>.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video11Home;