import React from 'react';

import './card.styles.css';

export const Card = props => (

    <div className = 'card-container'>
     
       
        <img alt='monsters' src = {`https://robohash.org/${props.monsters.id}?set=set2size=180x180`}/>
    
          <h1>{props.monsters.name}</h1>
          <h1>{props.monsters.email}</h1>
         
           
    </div>
);