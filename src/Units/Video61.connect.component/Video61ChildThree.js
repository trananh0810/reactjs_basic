import React, { Component } from 'react';

let contextPath = window.location.origin;

class Video61ChildThree extends Component {
    renderImage = () => {
        if (this.props.isDisplayImage) {
            return <img src={`${contextPath}/logo192.png`} className="img-fluid rounded" alt=""/>
        }
    }
    render() {
        return (
            <div>
                {this.renderImage()}
            </div>
        );
    }
}

export default Video61ChildThree;