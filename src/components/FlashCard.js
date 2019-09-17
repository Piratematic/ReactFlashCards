import React from "react"

class FlashCard extends React.Component
  toggleCard = () => {
    this.setState({ showBack: !this.state.showBack, });
  };

render() {
    const { showBack, } = this.state;
    const { back, front } = this.props;
    return (
      <Card onClick={this.togleCard}>
        <Card.Content>
          <Card.Header>
            { showBack ? back : front}
          </Card.Header>  
        </Card.Content>
      </Card>
    );
  );
};

export default FlashCard;