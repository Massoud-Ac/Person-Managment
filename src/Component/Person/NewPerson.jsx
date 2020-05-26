import React, { useContext } from 'react';
import SimpleContext from '../Context/SimpleContext';

const CreatePerson = () => {
    const context = useContext(SimpleContext)
    const { handleCreatePerson, setPerson, state } = context
    return (
        <div className="m-2 p-2">
            <form className="form-inline justify-content-center" onSubmit={(event) => handleCreatePerson(event)}>
                <div className="input-group w-25">
                    <input type="text" className="form-control"
                        onChange={(event) => setPerson(event)}
                        value={state.person}
                    />
                    <div className="input-group-prepend">
                        <button className="btn btn-success btn-sm fa fa-plus-square" type="submit" />
                    </div>
                </div>
            </form>
        </div>
    );
}
export default CreatePerson;