import React from 'react';

import Button from '../../components/Button/Button';
import planetImage from '../../static/images/planets_new.png';
import cookImage from '../../static/images/cooking.png';
import Classes from '../../SASS/containers/Instruction/InsOverview.module.scss';

const InsOverview = props => {

    return (
        <div className={Classes.InsOverview}>
            
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Background</h1>
                <hr />           
                <div className={Classes.InsReminder}>
                    <p><i>*** Please read carefully. You will complete a comprehension quiz at the end. ***</i></p>
                   
                </div> 
                <p> Imagine there are two colored planets. One planet is <b>RED</b>, and the other planet is <b>BLUE</b>. 
                    Both planets are inhabited by a strange <b>SPACE FISH</b>. On the <b>RED PLANET</b>, fish are mainly <b>RED</b>.
                    On the <b>BLUE PLANET</b>, fish are mainly <b>BLUE</b>.<br></br>

                    <img src={planetImage} alt="planets"/><br></br>
                    
                    <b>Important</b>: The strange space fish only reveal their color <b>after</b> being cooked! Prior to cooking, it is 
                    <b> impossible</b> to tell the color of a fish.</p>
                    
                    {/* 3/4 of the fish are RED, 
                    and 1/4 are BLUE. On the <b>BLUE planet</b> , the proportions are <b>reversed</b>: 3/4 of the fish are BLUE, 
                    and 1/4 are RED.</p> */}
           
                <img src={cookImage} alt="cooking"/><br></br><br></br><br></br>
                <hr />
                <Button clicked={props.goToInstruction}>Next</Button>
            </div>
        </div>
    );
};

export default InsOverview;