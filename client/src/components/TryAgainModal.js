import React from 'react';

import Button from './Button/Button';

import Classes from '../SASS/components/TryAgainModal.module.scss';

const TryAgainModal = props => {
    return (
        <div className={Classes.Backdrop}>
            <div className={Classes.Modal}>
                <div className={Classes.Text}>
                    {props.children}
                </div>
                <div className={Classes.BtnDiv}>
                    <Button clicked={props.onCloseModal} >Got it</Button>
                </div>
            </div>
        </div>
    );
};

export default TryAgainModal;