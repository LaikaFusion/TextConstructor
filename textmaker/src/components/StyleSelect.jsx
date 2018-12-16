import React, { Component } from 'react'

export default class StyleSelect extends Component {
  render() {
    return (
      //to do make this utf-8 compatible (needs code points not just the straight letters)
      <div className="selectorBox">
        {[{"ex":"Ⓐ", "name":"Bubble"},{"ex":"ᴀ","name":"Small Caps"},{"ex":"𝔸","name":"Black Board Bold"},{"ex":"𝔄","name":"Fraktur"},{"ex":"𝕬","name":"Fraktur Bold"},{"ex":"🅐", "name":"Bubble Black"},{"ex":"𝓐","name":"Script Bold"},{"ex":"𝒜","name":"Script"},{"ex":"𝐀","name":"Bold"},{"ex":"𝘈","name":"italic"},{"ex":"𝘼", "name":"Italic Bold"},{"ex":"Ꮧ","name":"Fairy"},{"ex":"ǟ","name":"wizard"},{"ex":"🄰","name":"Square"},{"ex":"🅰","name":"Square Black"},{"ex":"А","name":"Russian"},{"ex":"卂","name":"Japenese"},{"ex":"​█","name":"Redacted"},{"ex":"⒜", "name":"Parentheses"},{"ex":"ᴬ","name":"Superscript"},{"ex":"Ａ","name":"Full Width"},{"ex":"∀","name":"Upsidedown"}].map((e,i)=>{
          return <div onClick={()=>{this.props.setFullText(e.name)}} key={i} className="selectBox">{e.ex}<br/>{e.name}</div>
        })}
      </div>
    )
  }
}
