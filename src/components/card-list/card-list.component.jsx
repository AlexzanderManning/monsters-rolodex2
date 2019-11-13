import React from 'react';
import "./card-list.styles.css";
//Where props are passed in in function components.
import { Card } from '../card/card.component';

export const CardList = (props) => (
  <div className='card-list'>
    {props.monsters.map(monster =>(
      <Card key={monster.id} monster={monster}/>
    ))}
  </div>
);

