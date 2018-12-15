import React, { Component } from "react";
import { Form,TextArea, Header } from "semantic-ui-react";
import "./App.css";
import AccordianText from "./components/AccordianText";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        text:""
    }
  }
  
   setText = (e)=>{
    e.preventDefault();
    this.setState({
      text:e.target.value
    })


  }
  render() {
    return (
      <div className="App">
      <div className="workArea">
      
      
        <Form>
          <TextArea rows={1} onInput={this.setText} value={this.state.text} autoHeight placeholder="Enter text to edit here" />
        </Form>
        <Header as="h1">{this.state.text}</Header>
        <AccordianText />
      </div>
      </div>
    );
  }
}

export default App;
