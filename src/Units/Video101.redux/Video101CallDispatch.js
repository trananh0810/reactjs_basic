import React, { Component } from 'react';
import { connect } from 'react-redux';

let contextPath = window.location.origin;

class Video101CallDispatch extends Component {
    changeDisplay = () => {
        const {dispatch} = this.props;

        dispatch({type: "CHANGE_DISPLAY"});
    }

    renderButton = () => {
        if (this.props.isDisplay) {
            return <div className="btn btn-danger" onClick={this.changeDisplay}>Ẩn</div>
        } else {
            return <div className="btn btn-info" onClick={this.changeDisplay}>Hiện</div>
        }
    }
    render() {
        return (
            <div>
                {this.renderButton()}

                <p>- Bước 1: Kết nối component với store.</p>

                <p>- Bước 2: Tạo action trong reducer.</p>
                <img src={`${contextPath}/assets/image/video101.11.png`} className="img-fluid rounded" alt="" />

                <p>- Bước 3: Trong component, tạo một func, trong func này:
                    <br/>+ Phân rã dispatch từ props.
                    <br/>+ Sử dụng dispatch và gọi đến action.   
                </p>
                <img src={`${contextPath}/assets/image/video101.14.png`} className="img-fluid rounded" alt="" />

                <p>- Bước 4: Gọi đến func đã tạo ở trên.</p>
                <img src={`${contextPath}/assets/image/video101.15.png`} className="img-fluid rounded" alt="" />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isDisplay: state.displayReducer
    }
}

export default connect(mapStateToProps)(Video101CallDispatch)