import React, { useState } from 'react';
import Persons from './Component/Person/Persons';
import { toast, ToastContainer } from 'react-toastify';

import Header from './Component/common/Header';
import SimpleContext from './Component/Context/SimpleContext';
import CreatePerson from './Component/Person/NewPerson';



const App = () => {
    const [getPersons, setPersons] = useState([])
    const [getSinglePerson, setSinglePerson] = useState("")
    const [getShowPerson, setShowPerson] = useState(true)

    const handleShowPerson = () => {
        setShowPerson(!getShowPerson)
    }
    const handleDeletePerson = id => {
        const persons = [...getPersons];
        const filteredPerson = persons.filter(n => n.id !== id);
        setPersons(filteredPerson);
        toast.warning("شخص با موفقیت حذف گردید", {
            autoClose: 1500,
            closeOnClick: true
        })
    }
    const handleChangePerson = (event, id) => {
        const persons = [...getPersons]
        // روش اول
        const personsIndex = persons.findIndex(n => n.id === id)
        persons[personsIndex].fullName = event.target.value
        setPersons(persons)
        //روش دوم 
        // const { persons: allPersons } = this.state
        // const personIndex = allPersons.findIndex(p => p.id === id)
        // const person = allPersons[personIndex]
        // person.fullName = event.target.value
        // const persons = [...allPersons]
        // persons[personIndex] = person
    }
    const handleCreatePerson = (event) => {
        event.preventDefault()
        const persons = [...getPersons]
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullName: getSinglePerson
        }
        if (person.fullName !== "" && person.fullName !== " ") {
            persons.push(person)
            setPersons(persons)
            setSinglePerson("")
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
    const setPerson = (event) => {
        setSinglePerson(event.target.value)
    }
    const contextValue = {
        persons: getPersons,
        person: getSinglePerson,
        handleChangePerson: handleChangePerson,
        handleCreatePerson: handleCreatePerson,
        handleDeletePerson: handleDeletePerson,
        setPerson: setPerson,
    }
    let showPersons = null
    if (getShowPerson) showPersons = <Persons />
    return (
        <SimpleContext.Provider value={contextValue} >
            <div className="text-center rtl">
                <ToastContainer />
                <Header appTitle="مدیریت اشخاص" />
                <CreatePerson />
                <button className={getShowPerson ? "btn btn-danger" : "btn btn-info"} onClick={handleShowPerson}>{getShowPerson ? "عدم نمایش " : "نمایش"}</button>
                {showPersons}
            </div>
        </SimpleContext.Provider>
    );
}

export default App;