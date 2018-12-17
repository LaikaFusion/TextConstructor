import React, { Component } from "react";
import { Segment, Grid } from "semantic-ui-react";

export default class StyleSelect extends Component {
  render() {
    return (
      //to do make this utf-8 compatible (needs code points not just the straight letters)

      <Segment>
        <Grid  columns={8} doubling  stretched>
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
            { ex: "ǟ", name: "Wizard" },
            { ex: "A̸̧̜̿̓̍̊̐͌ͣ", name: "Zalgo" },
            { ex: "\u0391", name: "Random Homogylph" }

          ].map((e, i) => {
            return (
              <Grid.Column
                width={2}
                onClick={() => {
                  this.props.setFullText(e.name);
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
    );
  }
}
