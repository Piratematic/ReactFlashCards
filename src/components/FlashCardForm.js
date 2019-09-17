import React from "react"
import { Form, } from "semantic-ui-react"

class FlashCardForm extends React.Component {
  STATE = { front: "", back: "" , };

  handleChange = (e, { name, value, }) => {
    this.setState({ [name]: value })
  };

  handleSubmit = (e) => {
  e.preventDefault();
    this.props.add(this.state); 
  }

  render () {
    const { front, back, } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        name="front"
        label="Card Front"
        placeholder="CardFront"
        value={front} 
        onClick={this.handleChange} 
        required
      />
       <Form.Input
        name="back"
        label="Card Back"
        placeholder="CardBack"
        value={Back} 
        onClick={this.handleChange}  
        required
      />
      </Form>
    );
  };
};