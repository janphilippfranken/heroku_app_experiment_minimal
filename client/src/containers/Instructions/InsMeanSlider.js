import React from 'react';

import Button from '../../components/Button/Button';
import TryAgainModal from '../../components/TryAgainModal';
import Classes from '../../SASS/containers/Instructions/InsMeanSlider.module.scss';
// import script from '../../utils/InsBeliefSlider/InsBeliefSliderUtil';

import { useState, useEffect } from 'react';

const w = window;

const x_1 = w.create_data(0.5, 0.005)[0];	// see create_beta_plots.js for details about data creation and plot functions
const y_1 = w.create_data(0.5, 0.005)[1];

const InsMeanSlider = props => {
    const [showModal, setShowModal] = useState(false);
    const [meanBelief, setMeanBelief] = useState(50);
    // If we want to load a script
    // useEffect(() => {
    //     script(() => {
    //         setScriptLoaded(true);
    //     });
    // }, []);

    useEffect(() => {
        w.create_plot_start(x_1, y_1, 0.5, 'PlotContainer', 'Unethical', 'Ethical');
        w.create_plot_start(w.x, w.y, 0.5, 'PlotContainer', 'Unethical', 'Ethical');

    }, []);
    const sliderHandler = (e) => {
        // const belief = parseInt(document.getElementById('beliefSlider').value);
        setMeanBelief(e.target.value);
        w.create_plot_start(w.x, w.y, e.target.value / 100, 'PlotContainer', 'Unethical', 'Ethical', "");
        document.getElementById('beliefOutput').value = Math.round(w.transform_bel_slider_val(e.target.value));
    }

    const nextButtonHandler = () => {
        const belief = parseInt(document.getElementById('beliefOutput').value);
        if (belief === 66) {
            return props.goToInstruction();
        }
        setShowModal(true);
    };
    const closeModalHandler = () => {
        setShowModal(false);
    };
    const tryAgainModal = (
        <TryAgainModal onCloseModal={closeModalHandler}>
            <h2>Please read the instructions more carefully! <span role="img" aria-label="emoji">&#128517;</span></h2>
        </TryAgainModal>
    );
    return (
        <div className={Classes.InsMeanSlider}>
            {showModal && tryAgainModal}
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Providing your belief</h1>
                <hr />
                <p>
                    For the sake of demonstration, let's provide the initiall assessment together.
                    Let's assume we believe that what Avery did was <b>slightly ethical</b>.
                    To submit this belief, please set the slider to 66. Note 50 indicates that your judgement is
                    indifferent regarding the ethical aspect of the character, while moving to either end
                    indicates a belief that what the character did was either <b>moral (towards right) </b> 
                    or <b>immoral (towards left)</b>.
                </p>
                <hr />

                <div align="center" className={Classes.PlotContainer} id="PlotContainer">
                    <p align="center"><b>Belief slider:</b></p>
                    <input className={Classes.Slider} type="range" min="5" max="95" value={meanBelief} id="beliefSlider" step={0.90909090909} width="20%" onChange={sliderHandler} />
                    <output className={Classes.Output} id="beliefOutput">move slider to rate belief</output>
                </div>
                <br />

                <Button clicked={nextButtonHandler}>Next</Button>
            </div>
        </div>
    );
};

export default InsMeanSlider;