import React from 'react';
import Button from '../../components/Button/Button';
import Classes from './NextPlanetFrame.module.css';



const NextPlanetFrame = props => {
   
    return (
        <div className={Classes.NextPlanetFrame} style={{display: props.display}}>
            
                <h1>Well done! Please press continue to proceed to the next space station!
                
                </h1>
                <Button position={'absolute'} left={'40%'} top={'105%'} clicked={props.goToGame}>Next</Button>
        </div>
        
    );
};

export default NextPlanetFrame; 


