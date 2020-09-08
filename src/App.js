import React, { Component } from 'react';
import Persons from './Component/Person/Persons';
import { toast, ToastContainer } from 'react-toastify';

import Header from './Component/common/Header';
import SimpleContext from './Component/Context/SimpleContext';
import CreatePerson from './Component/Person/NewPerson';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [],
            person: "",
            toggleShowbtn: false
        }
    }
    handleShowPerson = () => {
        this.setState({ toggleShowbtn: !this.state.toggleShowbtn })
    }
    handleDeletePerson = id => {
        const persons = [...this.state.persons];
        const filteredPerson = persons.filter(n => n.id !== id);
        this.setState({ persons: filteredPerson })
        toast.warning("شخص با موفقیت حذف گردید", {
            autoClose: 1500,
            closeOnClick: true
        })
    }
    handleChangePerson = (event, id) => {
        const persons = [...this.state.persons]
        // روش اول
        const personsIndex = persons.findIndex(n => n.id === id)
        persons[personsIndex].fullName = event.target.value
        this.setState(persons)
        //روش دوم 
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
        debugger
        if (person.fullName !== "" && person.fullName !== " ") {
            persons.push(person)
            this.setState({ person: "" , persons })
            toast.success("شخص با موفقیت ثبت گردید", {
                autoClose: 1500,
                closeOnClick: true
            })
        } else {
            toast.error("لطفا اطلاعات اجباری را وارد کنید", {
                autoClose: 1500,
                closeOnClick: true
            })
        }
    }
    setPerson = (event) => {
        this.setState({ person: event.target.value })
    }
    render() {
        const { toggleShowbtn, persons, person } = this.state
        let showPerson = null
        if (toggleShowbtn) {
            debugger
            showPerson = <Persons
                persons={persons}
                handleChangePerson={this.handleChangePerson}
                handleDeletePerson={this.handleDeletePerson}
            />
        }
        return (
            <div className="text-center rtl">
                <ToastContainer />
                <Header persons={persons} appTitle="مدیریت اشخاص" />
                <CreatePerson
                    handleCreatePerson={this.handleCreatePerson}
                    setPerson={this.setPerson}
                    person={person} />
                <button className={toggleShowbtn ? "btn btn-danger" : "btn btn-info"} onClick={this.handleShowPerson}>{toggleShowbtn ? "عدم نمایش " : "نمایش"}</button>
                {showPerson}
            </div>
        );
    }
}

export default App;
