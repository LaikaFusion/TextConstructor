import React, { Component } from "react";
import { Accordion, Header, Icon } from "semantic-ui-react";
import StyleSelect from "./StyleSelect";
import LetterSelect from "./LetterSelect";

export default class AccordianText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1
    };
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Header size="large">
            <Icon name="dropdown" />
            Full Word Editting
          </Header>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <StyleSelect setFullText={this.props.setFullText} />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Header size="large">
            <Icon name="dropdown" />
            Individual Letter Editting
          </Header>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <LetterSelect
            decorateLetter={this.props.decorateLetter}
            setLetter={this.props.setLetter}
            currentLetter={this.props.currentLetter}
            homogylphLetter={this.props.homogylphLetter}
          />
        </Accordion.Content>
      </Accordion>
    );
  }
}
