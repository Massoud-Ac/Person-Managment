import React, { Fragment, useContext } from 'react';
import SimpleContext from '../Context/SimpleContext';

const Header = ({ appTitle }) => {
    const context = useContext(SimpleContext)
    const { persons } = context
    let badgeStyle = ""
    if (persons.length < 2) badgeStyle = 'badge-danger'
    if (persons.length >= 2 && persons.length <= 4) badgeStyle = 'badge-warning'
    if (persons.length > 4) badgeStyle = 'badge-success'

    return (
        <Fragment>
            <div className="alert alert-warning">
                <h3>{appTitle}</h3>
            </div>
            <h5 className="alert alert-light">تعداد اشخاص <span className={`badge badge-pill ${badgeStyle}`}>{context.persons.length}</span></h5>
        </Fragment>
    )
}
export default Header;