import React, { Component } from 'react';

class Video29Detail extends Component {
    render() {
        return (
            <div>
                <h5>Đây là trang chi tiết:</h5>

                <p>- Slug: {this.props.match.params.slug}</p>
                <p>- Id: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Video29Detail;