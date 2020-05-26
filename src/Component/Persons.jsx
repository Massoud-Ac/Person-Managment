import React from 'react';
import Person from './Person';


const Persons = ({ persons, personDelete, personEdit }) => {
    return (
        <div>
            {persons.map(person =>
                <Person
                    key={person.id}
                    personDelete={() => personDelete(person.id)}
                    personEdit={(event) => personEdit(event, person.id)}
                    fullName={person.fullName}
                />)}
        </div>
    );
}

export default Persons;