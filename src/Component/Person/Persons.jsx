import React, { useContext } from 'react';
import Person from './Person';
import PersonContext from '../Context/SimpleContext';

const Persons = () => {
    const {handleChangePerson,handleDeletePerson,state} = useContext(PersonContext)
    return (
        <div>
            {state.persons.map(person =>
                <Person
                    key={person.id}
                    fullName={person.fullName}
                    personDelete={() => handleDeletePerson(person.id)}
                    personEdit={event => handleChangePerson(event, person.id)}

                />)}
        </div>
    )
}
export default Persons;