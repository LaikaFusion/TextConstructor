import React, { Component } from "react";
import {
  Form,
  TextArea,
  Header,
  Segment,
  Icon,
  Button
} from "semantic-ui-react";
import "./App.css";
import AccordianText from "./components/AccordianText";
import change from "./transforms/change.js";
import homogylphs from "./transforms/homogylphs";
import Title from "./components/Title";
import { CopyToClipboard } from "react-copy-to-clipboard";

const GraphemeSplitter = require("grapheme-splitter");

const combos = require("./transforms/combining");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      orginalText: "",
      pwLetter: { char: "", pos: -1 },
      copied: false
    };
    this.splitter = new GraphemeSplitter();
  }
  //this is what runs when you type in the top text box
  textareaChange = e => {
    e.preventDefault();
    this.setState({
      orginalText: e.target.value,
      text: e.target.value,
      pwLetter: { char: "", pos: -1 },
      copied: false
    });
  };
  //this translates a string put into one using unicode
  transformText = (str, type) => {
    return change(str, type);
  };
  //the top bit is to make it so the name on the page works as the key for requesting the change
  setFullText = type => {
    const strippedType = type.toLowerCase().replace(/\s+/g, "");
    if (strippedType === "randomhomogylph") {
      this.homogylphText();
      return;
    }
    if (strippedType === "zalgo") {
      this.zalgo();
      return;
    }
    this.setState({
      text: this.transformText(this.state.orginalText, strippedType)
    });
  };
  homogylphText = () => {
    this.setState({
      text: homogylphs.gylphTransform(this.state.orginalText)
    });
  };
  homogylphLetter = letter => {
    if (this.state.pwLetter.char === "") {
      return;
    }
    let splitStr = this.splitter.splitGraphemes(this.state.text);
    splitStr[this.state.pwLetter.pos] = letter;
    const changedPWL = { ...this.state.pwLetter, char: letter };
    this.setState({
      text: splitStr.join(""),
      pwLetter: changedPWL
    });
  };
  setCurrentWorkingLetter = (letter, position) => {
    this.setState({
      pwLetter: { char: letter, pos: position }
    });
  };
  setLetter = type => {
    if (this.state.pwLetter.char === "") {
      return;
    }
    const strippedType = type.toLowerCase().replace(/\s+/g, "");
    const newLetter = this.transformText(
      this.state.orginalText[this.state.pwLetter.pos],
      strippedType
    );
    let splitStr = this.splitter.splitGraphemes(this.state.text);
    splitStr[this.state.pwLetter.pos] = newLetter;
    const changedPWL = { ...this.state.pwLetter, char: newLetter };
    this.setState({
      text: splitStr.join(""),
      pwLetter: changedPWL
    });
  };
  decorateLetter = indexOfMark => {
    if (this.state.pwLetter.char === "") {
      return;
    }
    const newLetter =
      this.state.pwLetter.char +
      String.fromCodePoint(parseInt(combos.data.standard[indexOfMark], 16));
    let splitStr = this.splitter.splitGraphemes(this.state.text);
    splitStr[this.state.pwLetter.pos] = newLetter;
    const changedPWL = { ...this.state.pwLetter, char: newLetter };
    this.setState({
      text: splitStr.join(""),
      pwLetter: changedPWL
    });
  };
  //todo adapt the one on the actual site
  zalgo = () => {
    const zalgoedSTR = this.splitter
      .splitGraphemes(this.state.orginalText)
      .map((e, i) => {
        for (
          let index = 0;
          index < Math.floor(Math.random() * (23 - 8 + 1) + 8);
          index++
        ) {
          e = `${e}${String.fromCodePoint(
            parseInt(
              combos.data.standard[
                Math.floor(Math.random() * combos.data.standard.length)
              ],
              16
            )
          )}`;
        }
        return e;
      });
    this.setState({
      text: zalgoedSTR.join("")
    });
  };
  onCopy = () => {
    if (this.state.text.length === 0) {
      return;
    }
    this.setState(
      {
        copied: true
      },
      () => {
        setTimeout(() => {
          this.setState({ copied: false });
        }, 5000);
      }
    );
  };
  render() {
    return (
      <div className="App">
        <div className="workArea">
          <Title />
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
          <br />
          <Segment attached>
            <div className="instructions">
              Click a letter for individual editing:
            </div>
            <Header className="textDisplay" as="h1">
              {this.splitter.splitGraphemes(this.state.text).map((e, i) => {
                return (
                  <span
                    key={i}
                    onClick={() => {
                      this.setCurrentWorkingLetter(e, i);
                    }}
                    id={this.state.pwLetter.pos === i ? "selected" : ""}
                    className="singleChar"
                  >
                    {e}
                  </span>
                );
              })}
            </Header>
          </Segment>
          <Button.Group attached="bottom">
            <CopyToClipboard onCopy={this.onCopy} text={this.state.text}>
             
                {this.state.copied ?  <Button className="half" ><span id="one" className="animateText">Copied!</span></Button>: <Button  className="half" ><span id="two" >Copy</span></Button>}
              
            </CopyToClipboard>
            <Button className="half" onClick={this.textareaChange}>Clear</Button>
          </Button.Group>
          <br />
          <AccordianText
            currentLetter={this.state.pwLetter.char}
            setLetter={this.setLetter}
            setFullText={this.setFullText}
            decorateLetter={this.decorateLetter}
            homogylphLetter={this.homogylphLetter}
          />
          <a href="https://github.com/LaikaFusion/ZalgoConstructor">
            <div className="gitRequest">
              <Icon name="github alternate" size="large" />
              Send Pull Requests!
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
