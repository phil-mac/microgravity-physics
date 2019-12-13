import React from 'react';

import * as ROUTES from '../../constants/routes';
import {NavLink} from 'react-router-dom';

export default () => {
    return(
        <div>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
            <span> - </span>
            <NavLink to={ROUTES.POMODORO}>Pomodoro</NavLink>
        </div>
    )
}