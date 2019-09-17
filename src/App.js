import React, { Component } from 'react';
import FlashCards from "./components/FlashCards";
import { Container, Header, } from "semantic-ui-react";
import FlashCardForm from "./components/FlashCardForm";

class App extends Component {
  state = {
    flash_cards: [
      { id: 1, front: "What is a state?", back: "A plain javascript object that we can store properties in.", },
      { id: 2, front: "What is MVC?", back: "Models, Views, Controllers", },
      { id: 3, front: "What can't be an object?", back: "You can't render an Object as a child", },
    ],
    showForm = false
  };

  getId = () => Math.floor((1 + Math.random()) * 10000);

  addCard = (cardDate) => {
    const cards = this.state.cards.map( card => {
      return { id: this.this.getId(), ...cardData, }
    })
    const cards = { id: this.getId(), ...cardData, }
    this.setState({ cards, ...this.state.cards })
  };

  toggleForm = () => {
    this.state({  })
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header as="h1">Flash Cards</Header>
        <br />
        <Button onClick={this.toggleForm}>Toggle Form</Button>
        <br />
        <FlashCards flashcards={this.state.cards} />
      </Container>
    );
  }
}

const styles = {
  container: {
    marginTop: "25px"
  }
};

export default App;
