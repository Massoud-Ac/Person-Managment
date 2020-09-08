import React from 'react';

const Person = ({ personDelete, fullName, personEdit }) => {
    debugger
    return (
        <div className="card text-white bg-info mb-3 mt-3 w-25 mx-auto">
            <div className="card-body text-center">
                <p className="d-block">{`${fullName}`}</p>
                <div className="input-group justify-content-center">
                    <input type="text" className="form-control w-50" placeholder={fullName} onChange={personEdit} />
                    <div className="input-group-prepend">
                        <button className="btn btn-danger fa fa-trash btn-sm" onClick={personDelete}></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Person;
