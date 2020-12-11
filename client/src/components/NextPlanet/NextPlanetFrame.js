import React from 'react';
import Classes from './NextPlanetFrame.module.css';


const NextPlanetFrame = props => {
   
    return (
        <div className={Classes.NextPlanetFrame} style={{display: props.display}}>
            
                <h1>Well done! Please press continue to proceed to the next village! :)</h1>
        
        </div>
    );
};

export default NextPlanetFrame; 


