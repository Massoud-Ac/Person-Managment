import React from 'react';
import Person from './Person';
import SimpleContext from '../Context/SimpleContext';


const Persons = () => {
    return (
        <SimpleContext.Consumer>
            {context => (
                <div>
                    {context.state.persons.map(person =>
                        <Person
                            key={person.id}
                            personDelete={() => context.handleDeletePerson(person.id)}
                            personEdit={(event) => context.handleChangePerson(event, person.id)}
                            fullName={person.fullName}
                        />)}
                </div>
            )}
        </SimpleContext.Consumer>
    );
}
export default Persons;