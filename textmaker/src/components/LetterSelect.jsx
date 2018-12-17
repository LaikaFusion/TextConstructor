import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";

export default class LetterSelect extends Component {
  render() {
    return (
      <Grid columns={2}>
        <Grid.Column width={12}>
          <Segment>
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
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Segment className="displayletterbox">
            <div className="displayTitle ">Currently Editing:</div>
            <div className="displayLetter">{this.props.currentLetter}</div>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
