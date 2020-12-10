import Agent from '../Agent/Agent';
import Action from '../Action/Action';
import Scores from '../Scores/Scores';
import classes from './PlanetFrame.module.css';


    


const PlanetFrame = props => {
    
    return (
        <div className={classes.PlanetFrame} style={{display: props.display}}>
            {/* game interface */}
            <Agent left={'18%'} agent_id="instr_frame" >Which Planet did the Fisherman travel?</Agent> 
            
            {/* Planet Blue */}
            <Agent left={'5%'} agent_id="BPlanet">
                <h3>BLUE</h3>    
            </Agent>
            

            {/* Planet Red */}
            <Agent left={'36%'} agent_id="RPlanet">
                <h3>RED</h3>
            </Agent>
        

            {/* Scores */}
            {/* score history */}
            <Scores score_id="instr_frame" >HISTORY</Scores> 
            <Scores score_id="B_name" >NIKOS</Scores>
            <Scores score_id="C_name" >NEIL</Scores>

            {/* B Scores */}
            <Scores id="B1" score_id="B1" ></Scores> 
            <Scores id="B2"  score_id="B1"   top={'17%'} ></Scores> 
            <Scores id="B3" score_id="B1"  top={'24%'} ></Scores>  
            <Scores id="B4" score_id="B1"  top={'31%'} ></Scores> 
            <Scores id="B5" score_id="B1" top={'39%'} ></Scores> 
            <Scores id="B6" score_id="B1"  top={'46%'} ></Scores> 
            <Scores id="B7" score_id="B1"  top={'53%'} ></Scores> 
            <Scores id="B8" score_id="B1"  top={'60%'} ></Scores> 
            <Scores id="B9" score_id="B1"  top={'67%'} ></Scores> 
            <Scores id="B10" score_id="B1"  top={'74%'} ></Scores> 

    

            {/* C scores  */}
            <Scores id="C1" score_id="C1" ></Scores>  

            <Scores id="C2" score_id="C1"  top={'17%'}></Scores> 
            <Scores id="C3" score_id="C1"  top={'24%'} ></Scores> 
            <Scores id="C4" score_id="C1"  top={'31%'} ></Scores> 
            <Scores id="C5" score_id="C1"  top={'39%'} ></Scores> 
            <Scores id="C6" score_id="C1"  top={'46%'} ></Scores> 
            <Scores id="C7" score_id="C1"  top={'53%'} ></Scores> 
            <Scores id="C8" score_id="C1"  top={'60%'} ></Scores> 
            <Scores id="C9" score_id="C1" top={'67%'} ></Scores> 
            <Scores id="C10" score_id="C1" top={'74%'} ></Scores>   

    
            

            
          

            <Action action_id="border_frame"></Action>

            {props.children}
        </div>
        
    );
};


export default PlanetFrame; 


