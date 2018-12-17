import React, { Component } from "react";
import { Form, TextArea, Header } from "semantic-ui-react";
import "./App.css";
import AccordianText from "./components/AccordianText";
import change from "./transforms/change.js";
const GraphemeSplitter = require('grapheme-splitter')

const combos = require("./transforms/combining") 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      orginalText: "",
      pwLetter: { char: "", pos: -1 }
    };
    this.splitter = new GraphemeSplitter();

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
  setCurrentWorkingLetter = (letter, position) => {
    this.setState({
      pwLetter: { char: letter, pos: position }
    });
  };
  setLetter = type=>{
    if(this.state.pwLetter.char===''){
      return;
    }
    const strippedType = type.toLowerCase().replace(/\s+/g, "");
    const newLetter = this.transformText(this.state.orginalText[this.state.pwLetter.pos], strippedType);
    let splitStr = this.splitter.splitGraphemes(this.state.text);
    splitStr[this.state.pwLetter.pos] = newLetter;
    const changedPWL = {...this.state.pwLetter, char:newLetter}
    this.setState({
      text: splitStr.join(''),
      pwLetter: changedPWL
    });
  }
  decorateLetter=indexOfMark =>{
    if(this.state.pwLetter.char===''){
      return;
    }
    const newLetter =this.state.pwLetter.char + String.fromCodePoint(parseInt(combos.data.standard[indexOfMark],16));
    let splitStr = this.splitter.splitGraphemes(this.state.text)
    splitStr[this.state.pwLetter.pos] = newLetter;
    const changedPWL = {...this.state.pwLetter, char:newLetter}
    this.setState({
      text: splitStr.join(''),
      pwLetter: changedPWL
    });
  }
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
          {/* This is one of the ways you can use multipoint unicode in an array */}
          <Header as="h1">
            { this.splitter.splitGraphemes(this.state.text).map((e, i) => {
              return (
                <span key={i} onClick={()=>{this.setCurrentWorkingLetter(e,i)}} className="singleChar">
                  {e}
                </span>
              );
            })}
          </Header>
          <AccordianText currentLetter={this.state.pwLetter.char} setLetter={this.setLetter} setFullText={this.setFullText} decorateLetter={this.decorateLetter} />
        </div>
      </div>
    );
  }
}

export default App;
