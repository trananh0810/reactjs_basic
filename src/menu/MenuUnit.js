import React, { Component } from 'react';
import './menu.css';
import { NavLink } from 'react-router-dom';

class MenuUnit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            units: [
                { path: '/video5', name: 'Video 5->8: Component' },
                { path: '/video9', name: 'Video 9->10: Props' },
                { path: '/video11', name: 'Video 11: JSX' },
                { path: '/video12', name: 'Video 12: Map' },
                { path: '/video17', name: 'Video 17->18: Call Function' },
                { path: '/video19', name: 'Video 19->21: State' },
                { path: '/video22', name: 'Video 22->23: DefaultValue và Ref' },
                { path: '/video24', name: 'Video 24->28: Component LifeCycle' },
                { path: '/video29', name: 'Video 29->45: Router' },
                { path: '/video46', name: 'Video 46->50: Form' },
                { path: '/video61', name: 'Video 61->50: Tương tác giữa các component'},
                { path: '/video89', name: 'Video 89->90: LocalStorage'},
                { path: '/video99', name: 'Video 99->100: Toán tử ba chấm'},
                { path: '/video101', name: 'Video 101->112: Redux'},
                { path: '/video115', name: 'Video 105->121: Firebase'},
                { path: '/firebaseStorage', name: 'Firebase Storage'},
                { path: '/cloudFireStore', name: 'Cloud Firestore'},
            ]
        }
    }

    render() {
        return (
            <div>
                <ul className="p-0 m-0">
                    {
                        this.state.units.map((item, index) => {
                            return (
                                <NavLink exact to={item.path} key={index}  activeClassName="menuActive">
                                    <li>{item.name}</li>
                                </NavLink>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default MenuUnit;