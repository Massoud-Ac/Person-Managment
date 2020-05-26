import React from 'react';


const Person = ({ personDelete, fullName, personEdit }) => {
    return (
        <div style={{ cursor: "pointer" }} >
            <p >{`${fullName}`}</p>
            <input type="text" placeholder={fullName} onChange={personEdit} />
            <button onClick={personDelete}>حذف</button>
        </div>
    );
}
export default Person;
