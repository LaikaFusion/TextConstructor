import React, { Component } from "react";
import { Form, TextArea, Header } from "semantic-ui-react";
import "./App.css";
import AccordianText from "./components/AccordianText";
import change from "./transforms/change.js";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      orginalText: ""
    };
  }
  //this is what runs when you type in the top text box
  textareaChange = e => {
    e.preventDefault();
    this.setState({
      orginalText: e.target.value,
      text: e.target.value
    });
  };
  //this translates a string put into one using unicode
  transformText = (str, type) => {
    return change(str, type);
  };
  //the top bit is to make it so the name on the page works as the key for requesting the change
  setFullText = type => {
    const strippedType = type.toLowerCase().replace(/\s+/g, "");
    this.setState({
      text: this.transformText(this.state.orginalText, strippedType)
    });
  };
  render() {
    return (
      <div className="App">
        <div className="workArea">
          <Form>
            <TextArea
              rows={1}
              onInput={this.textareaChange}
              value={this.state.orginalText}
              autoHeight
              placeholder="Enter text to edit here"
            />
          </Form>
          <Header as="h1">{this.state.text}</Header>
          <AccordianText setFullText={this.setFullText} />
        </div>
      </div>
    );
  }
}

export default App;
