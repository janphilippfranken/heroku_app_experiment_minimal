import React from 'react';

import Button from '../../components/Button/Button';
import villagersImage from '../../static/images/crew.png';
import visitImage from '../../static/images/planet_visit.png';
import subjCookImage from '../../static/images/subj_cooking.png';
import Classes from '../../SASS/containers/Instruction/InsTask.module.scss';
import ScrollDivision from '../../components/ScrollDivision/ScrollDivision';

const InsTask= props => {

    return (
        <div className={Classes.InsTask}>
            
            <div className={Classes.InnerContainer}>
                <h1>Instructions: Task</h1>
                <hr />           
                <div className={Classes.InsReminder}>
                    <p><i>*** Please read carefully. You will complete a comprehension quiz at the end. ***</i></p>
                    <p><i>*** Scroll through the division below to see details. ***</i></p>
                </div> 
                <ScrollDivision>
                <p>You are a food consultant travelling to <b>five</b> different space stations to advice the local crew on how to cook fish. Each space station has their own <b>local fish supplier</b> that went to <b>one</b> of the two planets to catch fish. Unfortunately, the crew did not know that the type of salt matters when cooking the space fish. As such, none of the crews recorded whether their local suppllier travelled the RED or BLUE planet to catch their fish.
                    
                </p><br></br>
                    
                <img src={visitImage} alt="planet_visit"/>
                
                <p>To ensure that you give them the correct salt advice for as many fish as possible, you need to <b>decide</b> whether a local fish supplier travelled the RED or BLUE planet to catch their fish (Recall: Fish on the RED planet are mainly RED and have to be cooked with RED SALT; fish from the BLUE planet are mainly BLUE and have to be cooked with BLUE SALT). You will be paid a bonus of £0.25 each time you selected the correct planet (max. bonus = 5 space stations * £0.25 cent = £1.25).</p><br></br>

                <p>On each space station, you first decide to cook one fish from the supplier's catch to get an initial idea about which planet the supplier might have travelled. To not waste your salt, you just cook the fish without salt.</p><br></br>  
                
                <img src={subjCookImage} alt="subj_cooking"/>

                <p>You then ask two local crew members to cook one fish each to gather additional information about the origin of the supplier's catch.</p><br></br> 
        
                <img src={villagersImage} alt="villagers_cooking"/>
    
                <p>Unfortunately, you are not allowed to enter the kitchen while the two crew members are inside, meaning that you can not observe the color of their fish or ask them about their beliefs about which planet the supplier travelled directly. However, each crew member can communicate their beliefs to you via their space headlights. Conveniently, space headlights happen to have two colour settings (blue and red) to communicate either belief (supplier travelld to the BLUE Planet, supplier travelled to the RED Planet). Space headlights also have three brightness settings (1, 2 and 3), allowing crew members to communicate how confident they are in their beliefs.</p><br></br>                

                <p><b>Important:</b> While cooking, the two crew members might <b>talk to each other</b> and <b>influence</b> their beliefs. Thus, you will observe their belief signals <b>multiple times</b> and provide a guess about their relationships with each other. You will be paid an additional £0.25 each time you selected the correct relationship (max. bonus = 5 space stations * £0.25 cent = £1.25).</p><br></br>

                <p><b>Important:</b> You <b>do not</b> know when the two crew members have finished cooking their fish, and they might finish at different times. If they are communicating with each other, their signals could be based on what they have learned from the other person, in addition to, or instead of, what they have learned from their own fish.</p><br></br>
                
                <hr />
                <Button clicked={props.goToInstruction}>Next</Button>
                </ScrollDivision >
            </div>
        </div>
    );
};

export default InsTask;