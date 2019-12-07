import React, { Component } from 'react';
import { connect } from 'react-redux';

let contextPath = window.location.origin;

class Video101CallDispatch2 extends Component {
    renderButton = () => {
        if (this.props.isDisplay) {
            return <div className="btn btn-outline-danger" onClick={this.props.changeDisplay}>Ẩn</div>
        } else {
            return <div className="btn btn-outline-info" onClick={this.props.changeDisplay}>Hiện</div>
        }
    }

    render() {
        return (
            <div>
                {this.renderButton()}
                
                <p>- Bước 1: Kết nối component với store thông qua connect.</p>

                <p>- Bước 2: Sử dụng mapStateToProps để sử dụng state trong store.</p>
                <img src={`${contextPath}/assets/image/video101.16.png`} className="img-fluid rounded" alt="" />

                <p>- Bước 3: Sử dụng mapDispatchToState để gọi đến các action:
                    <br/>+ return về các method, sử dụng thông qua this.props.methodName.
                    <br/>+ Trong các method này gọi đến các action thông qua dispatch({'{type:"actionType"}.'})
                </p>
                <img src={`${contextPath}/assets/image/video101.17.png`} className="img-fluid rounded" alt="" />

                <p>- Bước 4: Gọi đến method đó thông qua this.props.methodName.</p>
                <img src={`${contextPath}/assets/image/video101.18.png`} className="img-fluid rounded" alt="" />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isDisplay: state.displayReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeDisplay: () => {
            dispatch({type: "CHANGE_DISPLAY"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Video101CallDispatch2)