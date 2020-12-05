import React from 'react';

import Classes from '../SASS/containers/End.module.scss';
import { useSelector } from 'react-redux';

const End = props => {
    const participantToken = useSelector(state => state.participantToken);

    return (
        <div className={Classes.End}>
            <div className={Classes.InnerContainer}>
                <h1>You reached the end!!</h1>
                <hr />
                <p>Use this code to get paid or to withdraw your data at any point: {participantToken}</p>
                <hr />
                <img src='https://www.nownovel.com/include/images/icons/round_mountain.png' alt="thank you" />
            </div>
        </div>
    );
};

export default End;