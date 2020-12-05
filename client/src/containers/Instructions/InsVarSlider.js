import React from 'react';

import Button from '../../components/Button/Button';
import TryAgainModal from '../../components/TryAgainModal';
import Classes from '../../SASS/containers/Instructions/InsVarSlider.module.scss';
// import script from '../../utils/InsBeliefSlider/InsBeliefSliderUtil';

import { useState, useEffect } from 'react';

const w = window;

const x = w.create_data(0.01, 0.005)[0];	// see create_beta_plots.js for details about data creation and plot functions
const y = w.create_data(0.01, 0.005)[1];

const InsVarSlider = props => {
    const [showModal, setShowModal] = useState(false);
    // If we want to load a script
    // useEffect(() => {
    //     script(() => {
    //         setScriptLoaded(true);
    //     });
    // }, []);

    useEffect(() => {
        w.create_plot(x, y, 0.66, 'PlotContainer', 'Unethical', 'Ethical', 550, "", "", '2');
        document.getElementById('varSlider').value = 1;
    }, []);

    const sliderHandler = () => {
        const belief = parseInt(document.getElementById('varSlider').value);
        const variance = w.log_slider(w.transform_con_slider_pos(parseInt(belief)));
        const x = w.create_data(0.66, variance)[0];
        const y = w.create_data(0.66, variance)[1];
        w.create_plot(x, y, 0.66, 'PlotContainer', 'Unethical', 'Ethical', 550, "", "", '2');
        document.getElementById('varOutput').value = belief;
    }

    const nextButtonHandler = () => {
        const belief = parseInt(document.getElementById('varOutput').value);
        if (belief === 10) {
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
        <div className={Classes.InsVarSlider}>
            {showModal && tryAgainModal}
            <div className={Classes.InnerContainer}>
                <h1>Instructions: How sure are you?</h1>
                <hr />
                <p>Let's now submit our <b>certainty</b> rating. Assuming that we are not confident at
                all about our belief, let's provide a unsure rating. To do so, please set the slider
                to 10 indicating that we are quite uncertain about our belief. Note that the visualisation
                illustrates what this confidence score means. Specifically, it captures how much wiggle
                room there is around your belief estimate.
                Very high confidence means being almost certain that your opinion is correct while a
                confidence level of zero means the belief is equally likely to be anything. You will see
                that this curve becomes narrower when you move the confidence slider to the right. This
                means that there is only little room for the black line (your belief) to vary, and so you
                are more certain on your belief.
                <br />
                <br />
                To get the idea, try moving the slider from one end to the other observing how the figure below changes.
                </p>
                <hr />

                <div align="center" className={Classes.PlotContainer} id="PlotContainer">
                    <p align="center"><b>Belief slider:</b></p>
                    <input className={Classes.Slider} type="range" disabled min="5" max="95" value="66" id="beliefSlider" step={0.90909090909} width="20%" onChange={sliderHandler} />

                    <p align="center"><b>Certainty slider:</b></p>
                    <input className={Classes.Slider} type="range" min="1" max="99" defaultValue id="varSlider" step={0.90909090909} width="20%" onChange={sliderHandler} />
                    <output className={Classes.Output} id="varOutput">move slider to rate belief</output>
                </div>
                <br />

                <Button clicked={nextButtonHandler}>Next</Button>
            </div>
        </div>
    );
};

export default InsVarSlider;