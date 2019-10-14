import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    let heading =
      'Duis consectetur aliqua laborum proident et nulla do occaecat magna.';
    let subheading = 'Occaecat laborum reprehenderit esse ipsum.';

    return (
      <div className="Home">
        <section className="hero is-medium is-danger is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">{heading}</h1>
              <div className="is-two-thirds column is-paddingless">
                <h2 className="subtitle is-4">{subheading}</h2>
              </div>
              <a href="learnMore" className="button is-large" id="learn">
                Learn more
              </a>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns pd is-desktop">
              <div className="column is-1 has-text-centered">
                <i className="fa fa-cog is-primary"></i>
              </div>
              <div className="column is-one-third-desktop">
                <p className="title">
                  <strong>
                    Ullamco est eiusmod sunt Lorem velit enim in commodo
                    adipisicing velit in laborum nulla.
                  </strong>
                </p>
              </div>
              <div className="column">
                <p>
                  Deserunt commodo minim eiusmod Lorem minim excepteur dolore.
                </p>
              </div>
            </div>
          </div>

          <div className="columns pd">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">
                    “There are two hard things in computer science: cache
                    invalidation, naming things, and off-by-one errors.”
                  </p>
                  <p className="subtitle">- Jeff Atwood</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">
                    “There are two hard things in computer science: cache
                    invalidation, naming things, and off-by-one errors.”
                  </p>
                  <p className="subtitle">- Jeff Atwood</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">
                    “There are two hard things in computer science: cache
                    invalidation, naming things, and off-by-one errors.”
                  </p>
                  <p className="subtitle">- Jeff Atwood</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
