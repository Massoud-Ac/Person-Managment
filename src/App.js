import React, { Component } from 'react';
import Persons from './Component/Persons';

import './App.css'
import { toast, ToastContainer } from 'react-toastify';

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
        toast.warning("شخص با موفقیت حذف گردید")
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
        let person = null
        if (showPerson) person = <Persons persons={persons}
            personDelete={this.handleDeletePerson}
            personEdit={this.handleChangePerson} />
        let badgeStyle = ""
        if (persons.length < 2) badgeStyle = 'badge-danger'
        if (persons.length >= 2 && persons.length <= 4) badgeStyle = 'badge-warning'
        if (persons.length > 4) badgeStyle = 'badge-success'
        return (
            <div className="text-center rtl">
                <ToastContainer />
                <div className="alert alert-warning">
                    <h3>مدیریت کننده اشخاص</h3>
                </div>
                <h5 className="alert alert-light">تعداد اشخاص <span className={`badge badge-pill ${badgeStyle}`}> {persons.length}</span></h5>
                <div className="m-2 p-2">
                    <form className="form-inline justify-content-center" onSubmit={this.handleCreatePerson}>
                        <div className="input-group w-25">
                            <input type="text" className="form-control"
                                onChange={this.setPerson}
                                value={this.state.person}
                            />
                            <div className="input-group-prepend">
                                <button className="btn btn-success btn-sm fa fa-plus-square" type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
                <button className={showPerson ? "btn btn-danger" : "btn btn-info"} onClick={this.handleShowPerson}>{showPerson ? "عدم نمایش " : "نمایش"}</button>
                {person}

            </div>
        );
    }
}

export default App;