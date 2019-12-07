import React, { Component } from 'react';
import { FirebaseConnect } from './../../firebase/FirebaseCfg';

var storage = FirebaseConnect.storage().ref('images');

class StorageHome extends Component {
    getFile = (event) => {
        let file = event.target.files[0];

        let fileName = file.name;

        storage.child(fileName).put(file).then(snap => {
            storage.child(fileName).getDownloadURL().then(url => console.log(url));
        });
        
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h3>Firebase Storage</h3>
                    </div>

                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="File" />
                            <input type="file" className="form-control-file" name="file" onChange={(event) => this.getFile(event)} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StorageHome;