import React, { useContext } from 'react'
import SimpleContext from '../../Context/context'

const NewPerson = () => {
    const context = useContext(SimpleContext)
    debugger
    return (
        <div className="m-2 p-2">
            <form
                className="form-inline justify-content-center"
                onSubmit={event => event.preventDefault()}>
                <div className="input-group w-25">
                    <input
                        className="form-control"
                        placeholder="اسم وارد کنید"
                        value={context.person}
                        onChange={(event) => context.setPerson(event)} />
                    <div className="input-group-prepend">
                        <button
                            className="btn btn-success btn-sm fa fa-plus-square"
                            onClick={context.handleNewPerson} />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default NewPerson