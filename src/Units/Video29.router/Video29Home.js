import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import Video29Page1 from './Video29Page1';
import Video29Page2 from './Video29Page2';
import NotFound from '../NotFound';

let contextPath = window.location.origin;

class Video29Home extends Component {
    
    

    toSlug = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }
    

    render() {
        document.title = "Reactjs cơ bản - Router";
        return (
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-12">
                        <h3>Router</h3>

                        <p>Router được sử dụng để chuyển hướng trang mà không cẩn phải load lại toàn bộ trang web.</p>
                    </div>

                    <div className="col-12 mt-2">
                        <h5>Cách sử dụng:</h5>
                    </div>

                    <div className="col-12 mt-2">
                        <p>
                            - Bước 1:
                            <br />+ Cài đặt react-router-dom bằng npm install react-router-dom.
                            <br />+ Trong App.js:
                            <br />> Import BrowserRouter từ react-router-dom.
                            <br />> Trong render, sử dụng cặp thẻ Router bọc toàn bộ web.
                        </p>

                        <img src={contextPath + "/assets/image/video29.1.png"} className="img-fluid rounded" alt="" />
                    </div>

                    <div className="col-12 mt-2">
                        <p>
                            - Bước 2: Tạo file router.js:
                            <br />+ Import Switch và Route từ react-router-dom.
                            <br />+ Trong render, sử dụng cặp thẻ Switch bọc toàn bộ các Route.
                            <br />+ Trong cặp thẻ Route:
                            <br />> path là đường dẫn.
                            <br />> component là component hiển thị cho đường dẫn đi kèm.
                            <br />+ Ở cuối các Route sẽ là 1 Route có path="*" gọi đến component NotFound.
                        </p>

                        <img src={contextPath + "/assets/image/video29.2.png"} className="img-fluid rounded" alt="" />
                    </div>

                    <div className="col-12 mt-2">
                        <p>
                            - Bước 3: Sử dụng cặp thẻ NavLink thay cho cặp thẻ a:
                            <br />+ Import NavLink từ react-router-dom.
                            <br />+ Thêm exact.
                            <br />+ path là đường dẫn tương ứng trong router.
                            <br />+ activeClassName là class được thêm vào NavLink khi click.
                        </p>

                        <img src={contextPath + "/assets/image/video29.3.png"} className="img-fluid rounded" alt="" />
                    </div>

                    <div className="col-12 mt-2">
                        <p>
                            - Bước 4: Tại nơi muốn làm nội dung động, gọi đến file Router.js đã tạo.
                        </p>

                        <img src={contextPath + "/assets/image/video29.4.png"} className="img-fluid rounded" alt="" />
                    </div>

                    <div className="col-12 mt-4">
                        <hr />

                        <h3>Slug URL</h3>

                        <p>Slug url là đường dẫn thân thiện, dễ SEO.</p>
                    </div>

                    <div className="col-12 mt-2">
                        <h5>Ví dụ:</h5>

                        <p>Tên bài viết: Tổng hợp game mobile đáng chú ý trong tuần 3 tháng 11</p>
                        <p>--> Slug url: {this.toSlug("Tổng hợp game mobile đáng chú ý trong tuần 3 tháng 11")}</p>
                    </div>

                    <div className="col-12 mt-2">
                        <p>- Method tạo slug url từ 1 string: </p>
                        <img src={contextPath + "/assets/image/video29.5.png"} className="img-fluid rounded" alt="" />
                    </div>

                    <div className="col-12 mt-4">
                        <hr />
                        <h3>Route Child</h3>

                        <p>Route Child là Route lồng nhau.</p>
                    </div>

                    <div className="col-12">
                        <h5>Ví dụ:</h5>

                        <Link to={`${this.props.match.url}/page1`}>
                            <div className="btn btn-primary">Trang 1</div>
                        </Link>

                        <Link to={`${this.props.match.url}/page2`}>
                            <div className="btn btn-secondary ml-2">Trang 2</div>
                        </Link>

                        <Link to={`${this.props.match.url}/page45345`}>
                            <div className="btn btn-warning ml-2">Note Found</div>
                        </Link>

                        <Switch>
                            <Route path={`${this.props.match.url}/page1`} component={Video29Page1} />
                            <Route path={`${this.props.match.url}/page2`} component={Video29Page2} />
                            <Route path={`${this.props.match.url}/*`} component={NotFound} />
                        </Switch>
                    </div>

                    <div className="col-12 mt-2">
                        <h5>Cách sử dụng:</h5>
                    </div>

                    <div className="col-12 mt-2">
                        <p>
                            Trong trang con, nơi muốn định tuyến, khai báo Link (hoặc NavLink), Switch, Route tương tự như ở trên.
                        </p>

                        <img src={contextPath + "/assets/image/video29.6.png"} className="img-fluid rounded" alt="" />
                    </div>

                    <div className="col-12 mt-2">
                        <p>
                            - Lưu ý: this.props.match.url để lấy ra đường dẫn trang hiện tại.
                        </p>
                    </div>
                    
                    <div className="col-12 mt-4">
                        <hr/>

                        <h3>Params URL</h3>

                        <p>Dùng để truyền tham số trên url.</p>
                    </div>

                    <div className="col-12 mt-2">
                        <h5>Ví dụ:</h5>

                        <Link to={"/video29detail/" + 
                                this.toSlug("Tổng hợp game mobile đáng chú ý trong tuần 3 tháng 11") + ".123"}>
                            <div className="btn btn-link">Trang chi tiết tin tức</div>
                        </Link>
                    </div>


                    <div className="col-12 mt2">
                        <h5>Cách sử dụng:</h5>

                        <p>
                            - Bước 1: Trong Router khai báo route chứa các param có dạng :paramName.
                        </p>

                        <img src={contextPath + "/assets/image/video29.7.png"} className="img-fluid rounded" alt="" />

                        <p>
                            - Bước 2: Tạo Link cho Route đó.
                        </p>

                        <img src={contextPath + "/assets/image/video29.8.png"} className="img-fluid rounded" alt="" />

                        <p>
                            - Bước 3: Trong component của Route đó, các param được chứa trong this.props.match.params.
                        </p>

                        <img src={contextPath + "/assets/image/video29.9.png"} className="img-fluid rounded" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Video29Home;