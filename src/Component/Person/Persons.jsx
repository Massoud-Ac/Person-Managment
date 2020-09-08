import React, { useContext } from 'react';
import Person from './Person';
import SimpleContext from '../Context/SimpleContext';

const Persons = ({persons , handleDeletePerson , handleChangePerson}) => {
    return (
        <div>
            {persons.map(person =>
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