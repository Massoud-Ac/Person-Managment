import React, { Fragment, useContext } from 'react';
import SimpleContext from '../Context/SimpleContext';


const Header = () => {
    const context = useContext(SimpleContext)
    const { persons } = context.state
    let badgeStyle = ""
    if (persons.length < 2) badgeStyle = 'badge-danger'
    if (persons.length >= 2 && persons.length <= 4) badgeStyle = 'badge-warning'
    if (persons.length > 4) badgeStyle = 'badge-success'

    return (
        <Fragment>
            <div className="alert alert-warning">
                <h3>{context.state.appTitle}</h3>
            </div>
            <h5 className="alert alert-light">تعداد اشخاص <span className={`badge badge-pill ${badgeStyle}`}>{context.state.persons.length}</span></h5>
        </Fragment>
    )
}
export default Header;