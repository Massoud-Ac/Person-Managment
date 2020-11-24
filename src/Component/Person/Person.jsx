import React from 'react'

const Person = ({ person, deletePerson, updatePerson }) => {
    return (
        <div className="card bg-info text-white w-25 mx-auto mb-3 mt-3">
            <div className="card-body text-center">
                <p className="d-block">{`${person.fullName}`}</p>
                <div className="input-group justify-content-center">
                    <input className="w-50 form-control"
                        placeholder={[person.fullName]}
                        onChange={updatePerson} />
                    <div className="input-group-prepend">
                        <button className="btn btn-danger fa fa-trash"
                            onClick={deletePerson} />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Person