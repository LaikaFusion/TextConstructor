import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
      <div className="center">
        {/* <div className="titleWord"> */}
          <pre>
            {decodeURIComponent(
              "___%20____%20_%20%20_%20___%20%0A%20%7C%20%20%7C___%20%20%5C%2F%20%20%20%7C%20%20%0A%20%7C%20%20%7C___%20_%2F%5C_%20%20%7C"
            )}
          </pre>
        {/* </div>
        <div className="titleWord"> */}
          <pre>
            {decodeURIComponent(
              "____%20____%20_%20%20_%20____%20___%20____%20_%20%20_%20____%20___%20____%20____%20%0A%7C%20%20%20%20%7C%20%20%7C%20%7C%5C%20%7C%20%5B__%20%20%20%7C%20%20%7C__%2F%20%7C%20%20%7C%20%7C%20%20%20%20%20%7C%20%20%7C%20%20%7C%20%7C__%2F%20%0A%7C___%20%7C__%7C%20%7C%20%5C%7C%20___%5D%20%20%7C%20%20%7C%20%20%5C%20%7C__%7C%20%7C___%20%20%7C%20%20%7C__%7C%20%7C%20%20%5C%20"
            )}
          </pre>
        </div>
      // </div>
    );
  }
}
