import React from 'react';

import Button from '../components/Button/Button';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Classes from '../SASS/containers/Ethics.module.scss';
import { setTimer } from '../store/actions/timer';
import { changePhase, PHASES } from '../store/actions/gamePhase';

const Ethics = props => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTimer(true, 1, 5));
    }, [dispatch]);

    const goToNotesHandler = () => {
        dispatch(changePhase(PHASES.notes));
    };

    return (
        <div className={Classes.Ethics}>
            <div className={Classes.EthicsForm}>
                <h2>Information for the participants</h2>
                <hr />
                {/* <div className={Classes.ParagraphContainer}>
                    <p><b>Nature of the study.&nbsp;</b>You are about to participate in an experiment in which you will be presented with some fictional scenarios and have to judge the main character of these scenarios based on their actions. After the experiment, we will ask you you to provide some basic demographics (e.g., age/sex etc). Your session should last for around 10 minutes and your responses will be recorded. You will be given full instructions shortly and will be able to ask any questions you may have.</p>
                </div>
                <div className={Classes.ParagraphContainer}>
                    <p><b>Compensation.&nbsp;</b> You will be paid $1.00 for your participation.</p>
                </div>
                <div className={Classes.ParagraphContainer}>
                    <p><b>Risks and benefits.&nbsp;</b><b>Risks and benefits.&nbsp;</b>There are no known risks to participation in this study. Other than the payment mentioned, there no tangible benefits to you, however you will be contributing to our knowledge about moral reasoning and information integration.</p>
                </div>
                <div className={Classes.ParagraphContainer}>
                    <p><b>Confidentiality and use of data.&nbsp;</b>All the information we collect during the course of the research will be processed in accordance with Data Protection Law. In order to safeguard your privacy, we will never share personal information (like names or dates of birth) with anyone outside the research team; if you agree and want to be contacted for future studies, we will add your contact details to our secure participant database. Your data will be referred to by a unique participant number rather than by name. Please note that we will temporarily collect your worker ID to prevent repeated participation, however we will never share this information with anyone outside the research team. We will store any personal data (e.g., audio/video recordings, signed forms) using a password protected, encrypted hard drive. The anonymized data collected during this study will be used for research purposes. With your permission, identifiable data such as recordings may also be used for research or teaching purposes, and may be shared with other researchers or with the general public (e.g., we may make it available through the world wide web, or use it in TV or radio broadcasts).</p>
                </div>
                <div className={Classes.ParagraphContainer}>
                    <p><b>What are my data protection rights?&nbsp;</b>The University of Edinburgh is a Data Controller for the information you provide. You have the right to access information held about you. Your right of access can be exercised in accordance with Data Protection Law. You also have other rights including rights of correction, erasure and objection.  For more details, including the right to lodge a complaint with the Information Commissioner’s Office, please visit www.ico.org.uk. Questions, comments and requests about your personal data can also be sent to the University Data Protection Officer at <a href="mailto:dpo@ed.ac.uk">dpo@ed.ac.uk</a>.</p>
                </div>
                <div className={Classes.ParagraphContainer}>
                    <p><b>Voluntary participation and right to withdraw.&nbsp;</b>Your participation is voluntary, and you may withdraw from the study at any time and for any reason. If you withdraw from the study during or after data gathering, we will delete your data and there is no penalty or loss of benefits to which you are otherwise entitled.</p>
                    <p>If you have any questions about what you’ve just read, please feel free to ask, or contact us later. You can contact us by email at <a href="mailto:nik.theodoropoulos@ed.ac.uk">nik.theodoropoulos@ed.ac.uk</a>. This project has been approved by PPLS Ethics committee. If you have questions or comments regarding your own or your child’s rights as a participant, they can be contacted at 0131 650 4020 or <a href="mailto:ppls.ethics@ed.ac.uk">ppls.ethics@ed.ac.uk</a>.</p>
                </div> */}

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
                <Button clicked={goToNotesHandler}>Accept Hit</Button>
            </div>
        </div>
    );
};

export default Ethics;