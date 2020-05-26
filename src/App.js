import React, { Component } from 'react';
import Persons from './Component/Persons';

import './App.css'

class App extends Component {
    state = {
        persons: [],
        person: "",
        showPerson: false

    }
    handleShowPerson = () => {
        this.setState({ showPerson: !this.state.showPerson })
    }
    handleDeletePerson = id => {
        const persons = [...this.state.persons];
        const filteredPerson = persons.filter(n => n.id !== id);
        this.setState({ persons: filteredPerson });
    }
    handleChangePerson = (event, id) => {
        const { persons } = this.state
        // روش اول
        const personsIndex = persons.findIndex(n => n.id === id)
        persons[personsIndex].fullName = event.target.value
        // روش دوم
        // مشکل دارد عدم دسترسی به Index 
        // persons[id].fullName = event.target.value
        this.setState({ persons })
        //روش سوم 
        // const { persons: allPersons } = this.state
        // const personIndex = allPersons.findIndex(p => p.id === id)
        // const person = allPersons[personIndex]
        // person.fullName = event.target.value
        // const persons = [...allPersons]
        // persons[personIndex] = person
    }
    handleCreatePerson = () => {
        const persons = [...this.state.persons]
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullName: this.state.person
        }
        persons.push(person)
        this.setState({ persons, person: "" })
    }
    setPerson = (event) => {
        this.setState({ person: event.target.value })
    }
    render() {
        const { persons, showPerson } = this.state
        let person = null
        if (showPerson) person = <Persons persons={persons}
            personDelete={this.handleDeletePerson}
            personEdit={this.handleChangePerson} />
        return (
            <div>
                <h4>مدیریت کننده اشخاص</h4>
                <h5>{`تعداد اشخاص : ${persons.length}`}</h5>
                <div>
                    <input type="text"
                        onChange={this.setPerson}
                        value={this.state.person}
                    />
                    <button onClick={this.handleCreatePerson}>اضافه</button>
                </div>
                <button onClick={this.handleShowPerson}>{showPerson ? "عدم نمایش " : "نمایش"}</button>
                {person}

            </div>
        );
    }
}

export default App;