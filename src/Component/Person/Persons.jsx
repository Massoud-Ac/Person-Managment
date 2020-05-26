import React, { useContext } from 'react';
import Person from './Person';
import SimpleContext from '../Context/SimpleContext';

const Persons = () => {
    const context = useContext(SimpleContext)
    return (
        <div>
            {context.persons.map(person =>
                <Person
                    key={person.id}
                    fullName={person.fullName}
                    personDelete={() => context.handleDeletePerson(person.id)}
                    personEdit={event => context.handleChangePerson(event, person.id)}

                />)}
        </div>
    )
}
export default Persons;