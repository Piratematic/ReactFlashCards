import React from "react";
import FlashCard from "./FlashCard";
import { Card, } from "semantic-ui-react";


const FlashCards = (props) => (
  <card.group iremsPerRow ={3}>
    { props.flashCards.map( card => (
      <FlashCard {...flashCard}/>
    ))}
  </card.group>
);


export default FlashCards;