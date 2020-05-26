import React, { Component } from 'react';
import Persons from './Component/Person/Persons';

import './App.css'
import { toast, ToastContainer } from 'react-toastify';
import Header from './Component/common/Header';
import SimpleContext from './Component/Context/SimpleContext';
import CreatePerson from './Component/Person/NewPerson';

class App extends Component {
    state = {
        persons: [],
        person: "",
        showPerson: false,
        appTitle: "مدیریت کننده اشخاص"

    }
    handleShowPerson = () => {
        this.setState({ showPerson: !this.state.showPerson })
    }
    handleDeletePerson = id => {
        const persons = [...this.state.persons];
        const filteredPerson = persons.filter(n => n.id !== id);
        this.setState({ persons: filteredPerson });
        toast.warning("شخص با موفقیت حذف گردید", {
            autoClose: 1500,
            closeOnClick: true
        })
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
    handleCreatePerson = (event) => {
        event.preventDefault()
        const persons = [...this.state.persons]
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullName: this.state.person
        }
        if (person.fullName !== "" && person.fullName !== " ") {
            persons.push(person)
            this.setState({ persons, person: "" })
            toast.success("شخص با موفقیت ثبت گردید", {
                autoClose: 1500,
                closeOnClick: true
            })
        } else {
            toast.error("لطفا اطلاعات اجباری را وارد کنید")
        }
    }
    setPerson = (event) => {
        this.setState({ person: event.target.value })
    }
    render() {
        const { persons, showPerson } = this.state
        const value = {
            state: this.state,
            handleChangePerson: this.handleChangePerson,
            handleCreatePerson: this.handleCreatePerson,
            handleDeletePerson: this.handleDeletePerson,
            setPerson: this.setPerson,
        }
        let showPersons = null
        if (showPerson) showPersons = <Persons persons={persons}
            personDelete={this.handleDeletePerson}
            personEdit={this.handleChangePerson} />
        return (
            <SimpleContext.Provider value={value} >
                <div className="text-center rtl">
                    <ToastContainer />
                    <Header
                        count={persons.length}
                    />
                    <CreatePerson
                        // createPerson={this.handleCreatePerson}
                        // setPerson={this.setPerson}
                        // person={person}
                    />
                    <button className={showPerson ? "btn btn-danger" : "btn btn-info"} onClick={this.handleShowPerson}>{showPerson ? "عدم نمایش " : "نمایش"}</button>
                    {showPersons}
                </div>
            </SimpleContext.Provider>
        );
    }
}

export default App;