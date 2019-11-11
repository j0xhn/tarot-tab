import React from "react";
import { render } from "react-dom";
import Card from "./Card";

class App extends React.Component {
  render() {
    return (
      <div className="Aligner column">
        <div>
          <h1>tarotab</h1>
        </div>
        <div className="Aligner">
          <Card
            name="Card 4"
            url="https://www.instagram.com/"
            about="social media"
          />
        </div>
      </div>
    );
  }
}
render(React.createElement(App), document.getElementById("root"));
