import React, { Fragment } from 'react';
import SimpleContext from '../Context/SimpleContext';


const Header = ({ count }) => {
    let badgeStyle = ""
    if (count < 2) badgeStyle = 'badge-danger'
    if (count >= 2 && count <= 4) badgeStyle = 'badge-warning'
    if (count > 4) badgeStyle = 'badge-success'

    return (
        <SimpleContext.Consumer >
            {context => (
                <Fragment>
                    <div className="alert alert-warning">
                        <h3>{context.state.appTitle}</h3>
                    </div>
                    <h5 className="alert alert-light">تعداد اشخاص <span className={`badge badge-pill ${badgeStyle}`}>{context.state.persons.length}</span></h5>
                </Fragment>
            )}
        </SimpleContext.Consumer>
    );
}

export default Header;