import React, { Component } from 'react';

class Video61ChildTwo extends Component {
    renderButton = () => {
        if (this.props.isDisplayImage) {
            return <div className="btn btn-outline-danger" onClick={this.props.changeDisplay}>Ẩn ảnh</div>
        } else {
            return <div className="btn btn-outline-info" onClick={this.props.changeDisplay}>Hiện ảnh</div>
        }
    }

    render() {
        return (
            <div>
                {this.renderButton()}
            </div>
        );
    }
}

export default Video61ChildTwo;