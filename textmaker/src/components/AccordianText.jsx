import React, { Component } from "react";
import { Accordion } from "semantic-ui-react";
import StyleSelect from "./StyleSelect";

export default class AccordianText extends Component {
  constructor(props){
    super(props)
    this.state ={
      activeIndex: 0 
    }
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
      <Accordion fluid>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          Full Word Editting
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <StyleSelect setFullText={this.props.setFullText}/>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          Individual Letter Edit
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            There are many breeds of dogs. Each breed varies in size and
            temperament. Owners often select a breed of dog that they find to be
            compatible with their own lifestyle and desires from a companion.
          </p>
        </Accordion.Content>
      </Accordion>
    );
  }
}
