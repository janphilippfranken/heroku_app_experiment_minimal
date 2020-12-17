import React from 'react';

import UOEsignature from '../components/uoeSignature/uoeSignature';
import { useSelector } from 'react-redux';
import Timer from '../components/timer/Timer';
import Ethics from '../containers/Ethics';
import Notes from './Notes.js';
import GameInterface from './GameInterface/GameInterface';
import Instructions from './Instruction/Instructions';
// import Experiment from './Experiment/Experiment';
import End from './End';


import { PHASES } from '../store/actions/gamePhase';

import Classes from '../SASS/containers/Layout.module.scss';
import Debrief from './Debrief';

const Layout = props => {
    const timer = useSelector(state => state.timer);
    const gamePhase = useSelector(state => state.gamePhase);

    let currentGamePhase;
    if (gamePhase[PHASES.ethics]) {
        currentGamePhase = <Ethics />;
    } else if (gamePhase[PHASES.notes]) {
        currentGamePhase = <Notes />;
    } else if (gamePhase[PHASES.instruction]) {
        currentGamePhase = <Instructions />;
    } else if (gamePhase[PHASES.experiment]) {
        currentGamePhase = <GameInterface />;
    } else if (gamePhase[PHASES.debrief]) {
        currentGamePhase = <Debrief />;
    } else if (gamePhase[PHASES.end]) {
        currentGamePhase = <End />;
    }

    return (
        <div className={Classes.Container}>
            <UOEsignature />
            <Timer minutes={timer.min} seconds={timer.sec} disableTimer={timer.timer} />
            <main className={Classes.Main}>
                {currentGamePhase}
            </main>
        </div>
    );
};

export default Layout;