import React from 'react';

const modalContent = ( props ) => {
  return (
    <div style={{textAlign:"center"}}>
      <h3>{props.children}</h3>
      <button onClick={props.clicked}>{props.next}</button>
    </div>
  );
}

export default modalContent;
