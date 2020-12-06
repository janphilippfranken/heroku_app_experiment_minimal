import React, { useState } from 'react';

import Button from '../../components/Button/Button';
import Classes from '../../SASS/containers/Instruction/InsQuiz.module.scss';
import vlImage from '../../static/images/vl.png';
import TryAgainModal from '../../components/TryAgainModal';
import { useDispatch } from 'react-redux';
import { changePhase, PHASES } from '../../store/actions/gamePhase';

const InsQuiz = props => {
    const dispatch = useDispatch();
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showCorrectModal, setShowCorrectModal] = useState(false);

    const submitAnswersHandler = () => {
        const answers = Array.from(document.getElementsByClassName('input'));
        const isCorrect = [answers[0].checked, answers[2].checked, !answers[4].checked, answers[6].checked, answers[8].checked, !answers[10].checked].every(i => i);
        if (isCorrect) {
            setShowCorrectModal(true)
        } else {
            setShowErrorModal(true)
        }
    };

    const closeErrorModalHandler = () => {
        props.goToInstruction();
        setShowErrorModal(false);
    };

    const closeCorrectModalHandler = () => {
        setShowCorrectModal(false);
        dispatch(changePhase(PHASES.experiment));
    };
    const tryAgainCorrectModal = (
        <TryAgainModal onCloseModal={closeCorrectModalHandler}>
            <h2>That's great, you got everything right! You can now start the game! <span role="img" aria-label="emoji">&#128518;</span></h2>
        </TryAgainModal>
    );
    const tryAgainErrorModal = (
        <TryAgainModal onCloseModal={closeErrorModalHandler}>
            <h2>You gave at least one wrong answer, please go back and read the instructions more carefully! <span role="img" aria-label="emoji">&#128517;</span></h2>
        </TryAgainModal>
    );
    return (
        <div className={Classes.InsQuiz}>
            {showErrorModal && tryAgainErrorModal}
            {showCorrectModal && tryAgainCorrectModal}
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Comprehension quiz</h1>
                <hr />
                <p>Please answer the following questions before starting the task. These are necessary for ensuring that you
		        read and understood the instructions.</p>
                <div className={Classes.QuizContainer}>
                    <p className={Classes.Qs}><b>Questions</b></p>
                    <p className={Classes.Ts}><b>True</b></p>
                    <p className={Classes.Fs}><b>False</b></p>
                    <hr className={Classes.Hr} />
                    <img className={Classes.Vl} src={vlImage} alt="vertical line" />
                    <input type="radio" name="1" className={[Classes.T1, 'input'].join(" ")} />
                    <input type="radio" name="1" className={[Classes.F1, 'input'].join(" ")} />
                    <input type="radio" name="2" className={[Classes.T2, 'input'].join(" ")} />
                    <input type="radio" name="2" className={[Classes.F2, 'input'].join(" ")} />
                    <input type="radio" name="3" className={[Classes.T3, 'input'].join(" ")} />
                    <input type="radio" name="3" className={[Classes.F3, 'input'].join(" ")} />
                    <input type="radio" name="4" className={[Classes.T4, 'input'].join(" ")} />
                    <input type="radio" name="4" className={[Classes.F4, 'input'].join(" ")} />
                    <input type="radio" name="5" className={[Classes.T5, 'input'].join(" ")} />
                    <input type="radio" name="5" className={[Classes.F5, 'input'].join(" ")} />
                    <input type="radio" name="6" className={[Classes.T6, 'input'].join(" ")} />
                    <input type="radio" name="6" className={[Classes.F6, 'input'].join(" ")} />
                    <li className={Classes.Q1}>1. True.</li>
                    <li className={Classes.Q2}>2. True.</li>
                    <li className={Classes.Q3}>3. False.</li>
                    <li className={Classes.Q4}>4. True.</li>
                    <li className={Classes.Q5}>5. True.</li>
                    <li className={Classes.Q6}>6. False.</li>
                </div>
                <hr />
                <br />
                <Button clicked={submitAnswersHandler}>Next</Button>
            </div>
        </div >
    );
};

export default InsQuiz;