import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.scss";

export class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <section className="container">
          <h3>Welcome to the Memory Card Game</h3>
          <p>
            <span>&nbsp;&nbsp;&nbsp;L</span> orem ipsum dolor sit amet,
            consectetur adipisicing elit. Iste, accusantium obcaecati a ex ullam
            eveniet ratione dolorum labore pariatur? Necessitatibus.
          </p>
          <Link className="btn" to="/game">Start</Link>
        </section>
      </div>
    );
  }
}

export default LandingPage;
