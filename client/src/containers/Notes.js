import React from 'react';

import Button from '../components/Button/Button';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Classes from '../SASS/containers/Notes.module.scss';
import { setTimer } from '../store/actions/timer';
import { changePhase, PHASES } from '../store/actions/gamePhase';

const Notes = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTimer(true, 1, 5));
    }, [dispatch]);

    const goToInstructionsHandler = () => {
        dispatch(changePhase(PHASES.instructions));
    };
    return (
        <div className={Classes.Notes}>
            <div className={Classes.NotesMainText}>
                <p>Please note that:</p>
                <hr />
                <ul>
                    <li>You will have to complete a comprehension quiz before you can start the experiment.</li>
                    <li>Once you finish correctly the comprehension quiz the main task will start.</li>
                    <li>You will be eligible for full payment once you complete the hit.</li>
                    <li>Please minimize the chances of possible distractions - switch off messengers, music, etc.</li>
                    <li>Please use full-screen mode.</li>
                    <li>You <b>should not</b> use a mobile phone or tablet to participate in that experiment.</li>
                    <li>Do <b>not refresh</b> the page during the experiment.</li>
                </ul>
                <Button clicked={goToInstructionsHandler}>Start</Button>
            </div>
        </div>
    );
};

export default Notes;