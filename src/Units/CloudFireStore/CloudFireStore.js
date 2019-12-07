import React, { Component } from 'react';
import { FirebaseConnect } from './../../firebase/FirebaseCfg';

var db = FirebaseConnect.firestore();

class CloudFireStore extends Component {
    addData = () => {
        db.collection('users').add({
            name: 'abc',
            age: 20
        }).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        }).catch(function (error) {
            console.error("Error adding document: ", error);
        });
    };

    delete = () => {
        db.collection('demo').doc('NxeNxn9MhOl7gaWbu6J9').delete().then(() => {
            console.log('Delete success');
        }).catch(err => {
            console.log(err);
        })
    }

    readData = () => {
        //đọc dữ liệu 1 lần
        // db.collection('users').get().then(function (snap) {
        //     snap.forEach(item => console.log(item.id + ' - ' + JSON.stringify(item.data())));
        // }).catch(function (error) {
        //     console.log("Error getting document:", error);
        // });

        db.collection('users').onSnapshot(function (snap) {
            snap.forEach(item => console.log(item.data()))
        });

    }

    filter = () => {
        db.collection('users').where('age', '>=', 25).get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });
    }

    paging = () => {
        
    }
    render() {
        this.readData();
        this.filter();
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h3>Cloud Firestore</h3>
                    </div>

                    <div className="col-12">
                        <div className="btn btn-info" onClick={this.addData}>
                            Thêm dữ liệu
                        </div>

                        <div className="btn btn-danger" onClick={this.delete}>
                            Xóa
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CloudFireStore;