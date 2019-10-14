import React, { Component } from 'react';
import axios from 'axios';

import './Faq.css';

class Faq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faqs: []
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(result => {
      const faqs = result.data.slice(0, 10);
      this.setState({ faqs });
    });
  }

  render() {
    return (
      <div className="Faq">
        <div className="container">
          <section className="section">
            <h1 className="title">FAQ</h1>
            <h2 className="subtitle is-4">
              Commodo laboris excepteur enim et proident eu deserunt non
              occaecat.
            </h2>

            <div className="columns">
              {this.state.faqs.map(faq => (
                <div className="column is-one-third">
                  <div className="card">
                    <div className="card-content">
                      <p className="title">{faq.title}</p>
                      <p className="answer">{faq.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Faq;
