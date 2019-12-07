import React, { Component } from 'react';

let contextPath = window.location.origin;

class Video101ExpBasic1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [1, 2, 3, 4, 5],
            editStatus: true
        }
    }

    render() {
        let redux = require('redux');

        let reducer = (state = this.state, action) => {
            switch (action.type) {
                case "CHANGE_STATUS":
                    return { ...state, editStatus: !state.editStatus };
                case "ADD_ARR":
                    return { ...state, arr: [...state.arr, action.newItem] };
                case "DELETE":
                    return { ...state, arr: state.arr.filter((value, key) => key !== action.indexDelete)};
                default:
                    return state;
            }
        }

        let store = redux.createStore(reducer);
        store.subscribe(() => console.log(store.getState()));

        store.dispatch({ type: "CHANGE_STATUS" });

        store.dispatch({
            type: "ADD_ARR",
            newItem: 100
        });

        store.dispatch({
            type: "DELETE",
            indexDelete: 1
        });

        return (
            <div>
                <p>- Bước 1: Tạo state.</p>
                <img src={`${contextPath}/assets/image/video101.1.png`} className="img-fluid rounded" alt="" />

                <p>- Bước 2: Tạo redux.</p>
                <img src={`${contextPath}/assets/image/video101.2.png`} className="img-fluid rounded" alt="" />

                <p>- Bước 3: Tạo reducer bằng cách tạo ra một func và truyền vào state và action:
                    <br />+ Ta có thể gán trực tiếp state trong phần tham số truyền vào.
                    <br />+ action sẽ gồm có type là tên chỉ thị để reducer thực hiện công việc theo tên đó.
                    <br />+ Có thể hiểu action như một object nên ta có thể tạo thêm thuộc tính cho action: action.fieldName sử dụng để truyền vào giá trị khi gọi đến action.
                    <br />+ sử dụng switch-case để thực hiện hành động theo điều kiện action.type.
                </p>
                <img src={`${contextPath}/assets/image/video101.3.png`} className="img-fluid rounded" alt="" />

                <p>- Bước 4: Tạo store.</p>
                <img src={`${contextPath}/assets/image/video101.4.png`} className="img-fluid rounded" alt="" />

                <p>- Bước 5: Như chúng ta đã biết, action chỉ là tên chỉ thị để reducer biết công việc nó cần phải thực hiện. Để thực hiện action,
                    ta phải sử dụng store.dispatch({'{type: "action_name", fieldName: value}'}).</p>
                <img src={`${contextPath}/assets/image/video101.5.png`} className="img-fluid rounded" alt="" />

                <p>* Hàm subscribe: dùng để theo dõi sự thay đổi của state trong store.</p>
                <img src={`${contextPath}/assets/image/video101.6.png`} className="img-fluid rounded" alt="" />
            </div>
        );
    }
}

export default Video101ExpBasic1;