import React from 'react';

import Button from '../../components/Button/Button';
import thankYouImage from '../../static/images/thank-you.jpg'
import Classes from '../../SASS/containers/Instructions/InsOverview.module.scss';

const InsOverview = props => {

    return (
        <div className={Classes.InsOverview}>
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Overview</h1>
                <hr />
                <p>First, you are going to read a fictional scenario involving a few characters. 
                    Your job is to judge the main character based on their act and to provide a 
                    certainty rating on your judgment. Please read all instructions carefully. <i>You 
                    will be asked to complete a comprehension quiz at the end of the instructions.</i> 
                    Thank you for your participation!</p>
                <hr />
                <img src={thankYouImage} alt="thank you"/>
                <Button clicked={props.goToInstruction}>Next</Button>
            </div>
        </div>
    );
};

export default InsOverview;