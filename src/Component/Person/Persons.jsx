import React, { useContext } from 'react'
import Person from './person'
import simpleContext from '../../Context/context'

const Persons = () => {
    const context = useContext(simpleContext)
    debugger
    return (
        <div>
            {context.persons.map(person =>
                <Person person={person}
                    deletePerson={() => context.handleDeletePerson(person.id)}
                    updatePerson={(event) => context.handleUpdatePerson(event, person.id)} />
            )}
        </div>
    )
}
export default Persons