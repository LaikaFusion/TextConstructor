import React, { Component } from "react";
import { Form,TextArea, Header } from "semantic-ui-react";
import "./App.css";
import AccordianText from "./components/AccordianText";
import change from "./transforms/change.js";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        text:""
    }
  }
  
   setText = (e)=>{
    e.preventDefault();
    console.log(change(e.target.value,"blackbubble"));
    
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
