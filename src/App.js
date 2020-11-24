import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Persons from './Component/Person/persons'
import NewPerson from './Component/Person/NewPerson'
import SimpleContext from './Context/context'

const App = () => {
    const [getPersons, setPersons] = useState([]);
    const [getSinglePerson, setSinglePerson] = useState("");
    const [getShowPerson, setShowPerson] = useState(false);


    const handleDeletePerson = (id) => {
        const person = [...getPersons]
        const persons = person.filter(node => node.id !== id)
        setPersons(persons)
        toast.warning("حذف با موفقیت انجام شد", {
            closeOnClick: true,
            position: 'top-right'
        })
    }
    const handleShowPerson = () => {
        setShowPerson(!getShowPerson)
    }
    const handleUpdatePerson = (event, id) => {
        const allperson = getPersons;
        const personIndex = allperson.findIndex(node => id === node.id);
        const person = allperson[personIndex];
        person.fullName = event.target.value;
        const persons = [...allperson];
        persons[personIndex] = person;
        setPersons(persons)
    }
    const handleNewPerson = () => {
        const persons = [...getPersons]
        const person = {
            id: Math.floor(Math.random() * 30),
            fullName: getSinglePerson
        }
        if (person.fullName !== "" && person.fullName !== null) {
            persons.push(person)
            setPersons(persons);
            setSinglePerson("");
            toast.success("شخص جدید با موفقیت ثبت گردید", {
                position: "top-right",
                closeOnClick: true
            })
        }
        else {
            toast.error("لطفا مقادیر اجباری را پر کنید!", {
                position: "top-right",
                closeOnClick: true,
                closeButton: true
            })
        }
    }
    const setPerson = (event) => {
        setSinglePerson(event.target.value)
    }
    const getContext = () => {
        return {
            persons: getPersons,
            person: getSinglePerson,
            handleDeletePerson: handleDeletePerson,
            handleUpdatePerson: handleUpdatePerson,
            handleNewPerson: handleNewPerson,
            setPerson: setPerson
        }
    }

    let showPerson = null
    if (getShowPerson) {
        showPerson = <Persons
        // persons={persons}
        // deletePerson={this.handleDeletePerson}
        // updatePerson={this.handleUpdatePerson} 
        />
    }
    return (
        <SimpleContext.Provider value={getContext()}>
            <div className="text-center rtl">
                <h4 className="alert alert-primary">لیست اشخاص</h4>
                <NewPerson />
                <button className={getShowPerson ? "btn btn-danger mt-2 mb-2 mx-auto" : "btn btn-success mt-2 mb-2 mx-auto"}
                    onClick={handleShowPerson}>
                    {getShowPerson ? 'پنهان کردن اشخاص' : 'نمایش اشخاص '}</button>
                {showPerson}
            </div>
            <ToastContainer />
        </SimpleContext.Provider>
    );
}

export default App;