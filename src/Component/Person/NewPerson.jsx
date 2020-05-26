import React from 'react';
import SimpleContext from '../Context/SimpleContext';


const CreatePerson = () => {
    return (
        <SimpleContext.Consumer>
            {context => (
                <div className="m-2 p-2">
                    <form className="form-inline justify-content-center" onSubmit={(event) => context.handleCreatePerson(event)}>
                        <div className="input-group w-25">
                            <input type="text" className="form-control"
                                onChange={(event) => context.setPerson(event)}
                                value={context.state.person}
                            />
                            <div className="input-group-prepend">
                                <button className="btn btn-success btn-sm fa fa-plus-square" type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            )}

        </SimpleContext.Consumer>
    );
}

export default CreatePerson;