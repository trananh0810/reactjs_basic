import React, { Component } from 'react';
import Video101ExpBasic1 from './Video101ExpBasic1';
import { connect } from 'react-redux';
import Video101CallDispatch from './Video101CallDispatch';
import Video101CallDispatch2 from './Video101CallDispatch2';

let contextPath = window.location.origin;

class Video101Home extends Component {
    renderLogo = () => {
        if (this.props.isDisplay) {
            return <img src={`${contextPath}/logo192.png`} className="img-fluid rounded" alt="" />
        }
    }

    render() {
        console.log("Biến isDisplay: " + this.props.isDisplay);
        return (
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-12">
                        <h3>Redux</h3>

                        <img src={`${contextPath}/assets/image/redux_workflow.png`} className="img-fluid rounded" alt="" />
                    </div>

                    <div className="col-12 mt-2">
                        <p>
                            - Khi không có Redux: khi muốn tương tác giữa component ông và component cháu, chúng ta phải đi theo từng cấp component. Nên sẽ rất vất vả để sử lý tương tác khi project lớn.
                        </p>
                        <p>
                            - Khi có Redux: ta có thể truy cập trực tiếp từ tất cả các component đến Redux.
                        </p>
                    </div>

                    <div className="col-12 mt-2">
                        <h4>1. Cấu trúc của Redux:</h4>

                        <img src={`${contextPath}/assets/image/reduex_structure.png`} className="img-fluid rounded" alt="" />

                        <p>
                            - Action: là các chỉ thị cho hành động. Gồm có:
                            <br />+ type: tên chỉ thị (bắt buộc).
                            <br />+ item: có thể là state kèm theo để thêm vào store.
                        </p>

                        <p>
                            - Reducer: là nơi diễn ra các hành động. Reducer gồm Action và State. Nó sẽ sử dụng Action và các state đi kèm để tạo ra state mới.
                        </p>

                        <p>
                            - Store: là nơi quản lý Reducer và State. Do state là private nên muốn thay đổi state thì phải thông qua Store.
                        </p>
                    </div>

                    <div className="col-12 mt-2">
                        <h4>2. Cài đặt Redux:</h4>

                        <p>Sử dụng câu lệnh: npm install redux --save để cài đặt Redux trong project Reactjs.</p>

                        <h5>3. Cách sử dụng Redux:</h5>

                        <Video101ExpBasic1 />
                    </div>

                    <div className="col-12 mt-2">
                        <h5>4. Kết hợp Reactjs và Redux:</h5>

                        <p>- Bước 1: cài đặt module react-redux: npm install react-redux.</p>

                        <p>- Bước 2: Tạo file store:
                            <br />+ Tạo redux, reducer, state, store.
                            <br />+ Export store.
                        </p>
                        <img src={`${contextPath}/assets/image/video101.7.png`} className="img-fluid rounded" alt="" />

                        <p>- Bước 3: Trong file index.js, khai báo store sử dụng cho toàn project:
                            <br />+ Import Provider từ react-redux.
                            <br />+ Import store từ file store đã tạo ở trên.
                            <br />+ Thay {'<App/>'} bằng {'<Provider store={storeImport}><App/></Provider>.'}
                        </p>
                        <img src={`${contextPath}/assets/image/video101.8.png`} className="img-fluid rounded" alt="" />

                        <p>- Bước 4: Trong component muốn truy cập đến store:
                            <br />+ Import connect từ react-redux.
                            <br />+ Gọi đến hàm mapStateToProps: return về những giá trị cần lấy.
                            <br />+ Thêm connect(mapStateToProps) vào export của component này.
                        </p>
                        <img src={`${contextPath}/assets/image/video101.9.png`} className="img-fluid rounded" alt="" />

                        <p>==> Kết quả:</p>
                        <img src={`${contextPath}/assets/image/video101.10.png`} className="img-fluid rounded shadow" alt="" />
                    </div>

                    <div className="col-12 mt-2">
                        <h5>5. Tách và kết hợp reducer:</h5>

                        <p>Trong dự án thực tế thì sẽ có rất nhiều state và phải thực hiện rất nhiều hành động trong reducer nên ta phải tách ra nhiều reducer, mỗi reducer quản lý một state.</p>

                        <p>- Bước 1: Tạo các file reducer.</p>
                        <img src={`${contextPath}/assets/image/video101.11.png`} className="img-fluid rounded" alt="" />

                        <p>- Bước 2: Trong file store:
                            <br />+ Import các reducer vào file store.
                            <br />+ Kết hợp các reducer vào allReducer = redux.combineReducers({'{reducer1,reducer2}.'})
                        </p>
                        <img src={`${contextPath}/assets/image/video101.12.png`} className="img-fluid rounded" alt="" />

                        <p>- Trong mapStateToProps, muốn truy cập đến state, ta sử dụng state.reducerName.</p>
                        <img src={`${contextPath}/assets/image/video101.13.png`} className="img-fluid rounded" alt="" />
                    </div>

                    <div className="col-12 mt-2">
                        <h4>6. Gọi action trong store từ component:</h4>

                        <h5>6.1. Cách 1: </h5>

                        {this.renderLogo()}

                        <Video101CallDispatch/>

                        <h5>6.2. Cách 2 Sử dụng mapDispatchToProps:</h5>

                        {this.renderLogo()} 

                        <Video101CallDispatch2/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isDisplay: state.displayReducer
    }
}

export default connect(mapStateToProps)(Video101Home);