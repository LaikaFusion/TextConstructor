import React, { Component } from "react";
import { Grid, Segment, Tab,Sticky } from "semantic-ui-react";
const combos = require("../transforms/combining") 
const {data} = require('../transforms/homogylphs')
export default class LetterSelect extends Component {
  constructor(props) {
    super(props);
    this.state={}
    this.panes = [
      {
        menuItem: "Letter Transform",
        render: () => (
          <Tab.Pane>
            <Grid columns={6} doubling stretched>
              {[
                { ex: "𝐀", name: "Bold" },
                { ex: "𝘈", name: "italic" },
                { ex: "𝘼", name: "Italic Bold" },
                { ex: "ᴀ", name: "Small Caps" },
                { ex: "ᴬ", name: "Superscript" },
                { ex: "∀", name: "Upsidedown" },
                { ex: "Ａ", name: "Full Width" },
                { ex: "𝔸", name: "Black Board Bold" },
                { ex: "𝔄", name: "Fraktur" },
                { ex: "𝕬", name: "Fraktur Bold" },
                { ex: "𝒜", name: "Script" },
                { ex: "𝓐", name: "Script Bold" },
                { ex: "Ⓐ", name: "Bubble" },
                { ex: "🅐", name: "Bubble Black" },
                { ex: "⒜", name: "Parentheses" },
                { ex: "🄰", name: "Square" },
                { ex: "🅰", name: "Square Black" },
                { ex: "А", name: "Russian" },
                { ex: "卂", name: "Japenese" },
                { ex: "​█", name: "Redacted" },
                { ex: "Ꮧ", name: "Fairy" },
                { ex: "ǟ", name: "wizard" }
              ].map((e, i) => {
                return (
                  <Grid.Column
                    onClick={() => {
                      this.props.setLetter(e.name);
                    }}
                    key={i}
                    className="selectBox"
                  >
                    <div className="selectDemo">{e.ex}</div>
                    <div className="selectName">{e.name}</div>
                  </Grid.Column>
                );
              })}
              {
                (data.hasOwnProperty(this.props.currentLetter))?
                  data[this.props.currentLetter].map((e,i)=>{return(
                    <Grid.Column
                    onClick={() => {
                      this.props.homogylphLetter(e);
                    }}
                    key={i}
                    className="selectBox"
                  >
                    <div className="selectDemo">{e}</div>
                    <div className="selectName">Homogylph</div>
                  </Grid.Column>)
                  })
                :''
              }
            </Grid>
          </Tab.Pane>
        )
      },
      
      {
        menuItem: "Letter Decoration",
        render: () => <Tab.Pane><Grid columns={8} doubling stretched>{combos.data.standard.map((e, i) => {
          return (
            <Grid.Column
              onClick={() => {
               this.props.decorateLetter(i)
              }}
              key={i}
              className="selectBox"
            >
              <div className="comboDemo">{`◌${String.fromCodePoint(parseInt(e,16)) }`}</div>
              
            </Grid.Column>
          );
        })}</Grid></Tab.Pane>
      },
     
    ];
  }
  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column width={12}>
          <Segment>
            <Tab panes={this.panes} />
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
        <Sticky context={contextRef}>

          <Segment className="displayletterbox">
            <div className="displayTitle ">Currently Editing:</div>
            <div className="displayLetter">{this.props.currentLetter}</div>
          </Segment>
          </Sticky>
        </Grid.Column>
      </Grid>
    );
  }
}
