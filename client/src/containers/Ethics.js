import React from 'react';

import Button from '../components/Button/Button';

import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import TryAgainModal from '../components/TryAgainModal';
import Classes from '../SASS/containers/Ethics.module.scss';
import debriefClasses from '../SASS/containers/Debrief.module.scss';
import { setTimer } from '../store/actions/timer';
import { changePhase, PHASES } from '../store/actions/gamePhase';
import { storePID } from '../store/actions/participantID';

const Ethics = props => {
    
    const dispatch = useDispatch();
    const [PID, setPID] = useState('');
    const [showErrorModal, setShowErrorModal] = useState(false);

    useEffect(() => {
        dispatch(setTimer(true, 1, 5));
    }, [dispatch]);

    const getPID = (e) => {
        setPID(e.target.value);
    };

    const closeErrorModalHandler = () => {
        setShowErrorModal(false);
    };

    const goToNotesHandler = () => {
        if (PID.length === 24) {
            dispatch(changePhase(PHASES.notes));
            dispatch(storePID({PID: PID}));
        }
        else {
            setShowErrorModal(true);
        }
    };

    const tryAgainErrorModal = (
        <TryAgainModal onCloseModal={closeErrorModalHandler}>
            <h2>Your Prolific ID does not have the correct format! Please make sure to enter the right ID (24 characters) <span role="img" aria-label="emoji">&#128517;</span></h2>
        </TryAgainModal>
    );

    return (
        <div className={Classes.Ethics}>
            {showErrorModal && tryAgainErrorModal}
            <div className={Classes.EthicsForm}>
                <h2>Information for the participants</h2>
                <hr />
                <div className={Classes.ParagraphContainer}>
                    <p><b>Nature of the study.&nbsp;</b>In this experiment, you will travel to fictional space stations to advise the local crew on how to cook space fish. You will judge whether each station's local supplier travelled to a blue or red planet to catch their fish. After the experiment, we will ask you to provide some basic demographics (e.g., age). It should take around 10-15 minutes in total, and your responses will be recorded. You will be given full instructions shortly; you may contact the lead experimenter <a href="mailto:jp.franken@ed.ac.uk">jp.franken@ed.ac.uk</a> with any questions you may have.</p>
                </div>
                <div className={Classes.ParagraphContainer}>
                    <p><b>Compensation.&nbsp;</b>You will be paid £1.00 for your participation + up to $£2.50 bonus based on your performance.</p>
                </div>
                <div className={Classes.ParagraphContainer}>
                    <p><b>Risks and benefits.&nbsp;</b>There are no known risks to participation in this study. Other than the payment mentioned, there are no tangible benefits to you, however you will be contributing to our knowledge about how people learn and reason.</p>
                </div>
                <div className={Classes.ParagraphContainer}>
                    <p><b>Confidentiality and use of data.&nbsp;</b>All the information we collect during the course of the research will be processed in accordance with Data Protection Law. In order to safeguard your privacy, we will never share personal information (like names or dates of birth) with anyone outside the research team. Your data will be referred to by a unique participant number rather than by name. Please note that we will temporarily collect your worker ID to prevent repeated participation, however we will never share this information with anyone outside the research team. The anonymized data collected during this study will be used for research purposes only. With your permission, identifiable data such as recordings may also be used for research or teaching purposes, and may be shared with other researchers or with the general public (e.g., we may make it available through the world wide web, or use it in TV or radio broadcasts).</p></div>
                <div className={Classes.ParagraphContainer}>
                    <p><b>What are my data protection rights?&nbsp;</b>The University of Edinburgh is a Data Controller for the information you provide. You have the right to access information held about you. Your right of access can be exercised in accordance with Data Protection Law. You also have other rights including rights of correction, erasure and objection. For more details, including the right to lodge a complaint with the Information Commissioner's Office, please visit www.ico.org.uk. Questions, comments and requests about your personal data can also be sent to the University Data Protection Officer at dpo@ed.ac.uk.</p></div>
                <div className={Classes.ParagraphContainer}>
                    <p><b>Voluntary participation and right to withdraw.&nbsp;</b> Your participation is voluntary, and you may withdraw from the study at any time and for any reason. If you withdraw from the study during or after data gathering, we will delete your data and there is no penalty or loss of benefits to which you are otherwise entitled.</p></div>
                <div className={Classes.ParagraphContainer}>
                    <p>If you have any questions about what you've just read, please feel free to ask, or contact us later. You can contact us by email at <a href="mailto:jp.franken@ed.ac.uk">jp.franken@ed.ac.uk</a>. This project has been approved by PPLS Ethics committee with the Ref No: 172-2021/2. If you have questions or comments regarding your own or your child's rights as a participant, they can be contacted at 0131 650 4020 or ppls.ethics@ed.ac.uk.</p></div>
                <br></br>

                <p>By accepting this HIT, you consent to the following:</p>
                <hr />
                <ol>
                    <li><b>I agree to participate in this study.</b></li>
                    <li>I confirm that I am at least <b>18 years</b> old or older. </li>
                    <li>I confirm that I have read and understood <b>how my data will be stored and used</b>.</li>
                    <li>I understand that I have the right to <b>terminate this session</b> at any point. </li>
                </ol>
                <hr />
                <br />
                <div className={Classes.ParagraphContainer}>
                    <div className={debriefClasses.CommentsContainer}>
                        <label htmlFor="comments">Before you accept and continue, please copy your Prolific Worker ID in the box below. <b>Note</b>: Its essential that you copy your ID right, otherwise you may not be eligible for payment.</label><br></br>
                        <textarea id="comments" value={PID} onChange={getPID} />
                    </div>
                </div>
               
                <Button clicked={goToNotesHandler}>Accept Hit and Continue</Button>
            </div>
        </div>
    );
};

export default Ethics;