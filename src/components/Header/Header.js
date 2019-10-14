import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    let menuActive = this.state.isToggleOn ? 'is-active' : '';

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt=""
              width="112"
              height="28"
            />
          </a>

          <div
            className={'navbar-burger burger ' + menuActive}
            onClick={this.handleClick}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div id="navbarBasicExample" className={'navbar-menu ' + menuActive}>
          <div className="navbar-end">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/faq" className="navbar-item">
              FAQ
            </Link>

            <div className="navbar-item">
              <div className="buttons">
                <a href="test" className="button is-primary is-outlined">
                  <i className="fa fa-download"></i>
                  <span>Join now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
