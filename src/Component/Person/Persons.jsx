import React, { useContext } from 'react';
import Person from './Person';
import SimpleContext from '../Context/SimpleContext';

const Persons = () => {
    const {state,handleDeletePerson,handleChangePerson} = useContext(SimpleContext)
    return (
        <div>
            {state.persons.map(person =>
                <Person
                    key={person.id}
                    personDelete={() => handleDeletePerson(person.id)}
                    personEdit={(event) => handleChangePerson(event, person.id)}
                    fullName={person.fullName}
                />)}
        </div>
    )
}
export default Persons;