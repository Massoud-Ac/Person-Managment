import React from 'react';


const Person = ({ person }) => {
    return (
        <p>{`${person.name} ${person.lname}`}</p>
    );
}

export default Person;
