import React, { Component } from 'react';
import Persons from './Component/Persons';



class App extends Component {
    state = {
        persons: [
            { id: 0, name: "مسعود", lname: "ابراهیمی" },
            { id: 1, name: "پدرام", lname: "تهرانچی" },
            { id: 2, name: "مجید", lname: "شاه آبادی" },
            { id: 3, name: "فرید", lname: "عرب" },
        ]
    }
    render() {
        const { persons } = this.state
        return (
            <div>
                <Persons persons={persons} />
            </div>
        );
    }
}

export default App;