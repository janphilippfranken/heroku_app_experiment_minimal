import React, { useState } from 'react';
import axios from 'axios';

import Classes from '../SASS/containers/Debrief.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../components/Button/Button';
import TryAgainModal from '../components/TryAgainModal';
import { changePhase, PHASES } from '../store/actions/gamePhase';

const Debrief = props => {
    const dispatch = useDispatch();
    const participantToken = useSelector(state => state.participantToken);
    const participantData = useSelector(state => state.participantData);
    const conditionsData = useSelector(state => state.conditionData.conditionData);
    const [engaging, setEngaging] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [polor, setPolor] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [prior, setPrior] = useState('');
    const [post, setPost] = useState('');
    const [comment, setComment] = useState('');
    const [showModal, setShowModal] = useState(false);

    const submitDebriefHandler = () => {
        const debriefData = {
            engaging: engaging,
            difficutly: difficulty,
            politicalOrientation: polor,
            age: age,
            gender: sex,
            priorStrategy: prior,
            posteriorStrategy: post,
            comment: comment
        };

        if (prior.split(' ').join('').length === 0 ||
            post.split(' ').join('').length === 0 ||
            age.split(' ').join('').length === 0 ||
            sex.split(' ').join('').length === 0 ||
            polor.split(' ').join('').length === 0 ||
            difficulty.split(' ').join('').length === 0 ||
            engaging.split(' ').join('').length === 0) {
            setShowModal(true);
        } else {
            axios.post(`https://belief-updating-condition-2.firebaseio.com/${participantToken}.json`, {
                participantData: participantData,
                conditionsData: conditionsData,
                debriefData: debriefData,
                token: participantToken,
                date: new Date()
            })
            .then(res => {
                console.log('DATA STORED');
            })
            .catch(err => {
                console.log(err);
            })

            dispatch(changePhase(PHASES.end))
        }
    };

    const closeModalHandler = () => {
        setShowModal(false);
    };

    const modal = (
        <TryAgainModal onCloseModal={closeModalHandler}>
            <h2>Please fill in all the required fields, thank you. <span role="img" aria-label="emoji">&#128517;</span></h2>
        </TryAgainModal>
    );



    return (
        <div className={Classes.Debrief}>
            {showModal && modal}
            <div className={Classes.InnerContainer}>
                <h1>Debrief and demographics</h1>
                <p>Thank you for your contribution to science. When you fill the following questions you'll get a reference code
                which you can use to get paid.
                </p>
                <br />
                <hr />
                <p className={Classes.Asterisk}><i>Questions with * are required.</i></p>
                <div className={Classes.Form}>
                    <div className={Classes.AgeContainer}>
                        <label htmlFor="age">How old are you:<span>*</span>&nbsp;</label>
                        <input type="number" maxLength={3} id="age" min={1} max={100} step={1} value={age} onChange={e => setAge(e.target.value)} />
                    </div>
                    <div className={Classes.GenderContainer}>
                        <label htmlFor="sex">What is your gender:<span>*</span>&nbsp;</label>
                        <select id="sex" value={sex} onChange={e => setSex(e.target.value)}>
                            <option value="noresp" defaultValue></option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other</option>
                            <option value="noresponse">I’d prefer not to respond</option>
                        </select>
                    </div>
                    <div className={Classes.EngagingContainer}>
                        <label htmlFor="engaging">Please rate how <b>ENGAGING</b> you found the learning task:<span>*</span> </label>
                        <select id="engaging" value={engaging} onChange={e => setEngaging(e.target.value)}>
                            <option value="--" defaultValue> </option>
                            <option value="10">10 - Very engaging</option>
                            <option value="9">9</option>
                            <option value="8">8</option>
                            <option value="7">7</option>
                            <option value="6">6</option>
                            <option value="5">5 - Moderately</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="0">0 - Not engaged</option>
                        </select>
                    </div>
                    <div className={Classes.DifficutlyContainer}>
                        <label htmlFor="difficulty">Please rate how <b>DIFFICULT</b> you found the learning task:<span>*</span> </label>
                        <select id="difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                            <option value="--" defaultValue></option>
                            <option value="10">10 - Very difficult</option>
                            <option value="9">9</option>
                            <option value="8">8</option>
                            <option value="7">7</option>
                            <option value="6">6</option>
                            <option value="5">5 - Moderately difficult</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                            <option value="0">0 - Not difficult at all</option>
                        </select>
                    </div>
                    <div className={Classes.PoliticalOrientationContainer}>
                        <label htmlFor="politicalOrientation">Please rate your <b>POLITICAL ORIENTATION</b>:<span>*</span></label>
                        <select id="politicalOrientation" value={polor} onChange={e => setPolor(e.target.value)}>
                            <option value="--" defaultValue></option>
                            <option value="7">7 - Very conservative (right-wing)</option>
                            <option value="6">6 - Conservative (right-wing)</option>
                            <option value="5">5 - Moderately conservative (right-wing)</option>
                            <option value="4">4 - Neutral</option>
                            <option value="3">3 - Moderately liberal (left-wing)</option>
                            <option value="2">2 - Liberal (left-wing)</option>
                            <option value="1">1 - Very liberal (left-wing)</option>
                        </select>
                    </div>
                    <div className={Classes.PriorContainer}>
                        <label htmlFor="prior">What were you thinking when providing your <b>initial judgement</b>? Did you have a specific strategy?<span>*</span></label>
                        <textarea id="prior" value={prior} onChange={e => setPrior(e.target.value)} />
                    </div>
                    <div className={Classes.PosteriorContainer}>
                        <label htmlFor="posterior">What were you thinking when providing your <b>final judgement</b>? Did you have a specific strategy?<span>*</span></label>
                        <textarea id="posterior" value={post} onChange={e => setPost(e.target.value)} />
                    </div>
                    <div className={Classes.CommentsContainer}>
                        <label htmlFor="comments">Do you have any comments regarding the experiment?</label>
                        <textarea id="comments" value={comment} onChange={e => setComment(e.target.value)} />
                    </div>
                </div>
                <Button clicked={submitDebriefHandler}>Next</Button>
            </div>
        </div>
    );
};

export default Debrief;