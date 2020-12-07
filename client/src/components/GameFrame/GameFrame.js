import React from 'react';
import Agent from '../Agent/Agent';
import Action from '../Action/Action';
import classes from './GameFrame.module.css';


const GameFrame = props => {
    return (
        <div className={classes.GameFrame}>
            {/* agents */}
            <Agent agent_id="instr_frame" >BELIEFS OF PLAYERS</Agent> 
            <Agent agent_id="A">?</Agent>
            <Agent agent_id="A_name">YOU</Agent>
            <Agent agent_id="B">?</Agent>
            <Agent agent_id="B_name">NIKOS</Agent>
            <Agent agent_id="C">?</Agent>
            <Agent agent_id="C_name">NEIL</Agent>

            {/* actions */}
            <Action action_id="border_frame"></Action>
            <Action action_id="instr_frame">YOUR ACTIONS</Action>
            <Action action_id="ask_frame">ASK</Action>
            <Action action_id="aB">Ask Nikos</Action>
            <Action action_id="aC">Ask Neil</Action>
            {/* <Action action_id="tell_frame">TELL</Action>
            <Action action_id="tBb">Tell Nikos blue</Action>
            <Action action_id="tCb">Tell Neil blue</Action>
            <Action action_id="tBr">Tell Nikos red</Action>
            <Action action_id="tCr">Tell Neil red</Action>
            <Action action_id="conf_sentence">Confidence</Action>
            <Action action_id="conf_frame_background"></Action>
            <Action draggable="true" action_id="conf_frame"></Action> */}
            {/* <Action action_id="conf_node"></Action> */}
        </div>
    );
};

export default GameFrame; 