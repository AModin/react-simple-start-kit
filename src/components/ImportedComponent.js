import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader/root';
//Don't forget to require this polyfill if you are using async await
require('babel-polyfill');

class ImportedComponent extends Component {

    constructor() {
        super();
        this.state = {
            loadedData: {
                firstName: "",
                lastName: ""
            }
        }
    }

    componentWillMount() {
        if(process.env.NODE_ENV == 'development') this.loadDummyData();
    }

    async loadDummyData() {
        //check the server.js file and remove the code for this example
        //app.get('/users', (req, res, next) => {
        //res.send([{ "firstName": "John", "LastName": "Doe" }])
        //});
        const users = await fetch('/users').then(res => res.json());
        this.setState({
            loadedData: users[0]
        })
    }

    render() {

        return (
            <Fragment>
                {
                    process.env.NODE_ENV == 'development' &&
                    <Fragment>
                        <h3>This data loaded with async/await(only development mode):</h3>
                        <p>First name: {this.state.loadedData.firstName} <br/>
                        Last name: {this.state.loadedData.lastName}</p>
                    </Fragment>
                    || null
                }

            </Fragment>
        );
    }
}

export default hot(ImportedComponent);