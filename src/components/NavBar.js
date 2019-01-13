import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Discover new experiences
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {' '}
                  {/* User */}
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                     <a href="/" className="nav-link" >
                      {' '}
                         <Link className="nav-link" to="/">Home </Link>
                     </a>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                     <a href="/" className="nav-link" >
                      {' '}
                         <Link className="nav-link" to="/">Categories </Link>
                     </a>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                     <a href="/" className="nav-link" >
                      {' '}
                         <Link className="nav-link" to="/">Becaome a Host </Link>
                     </a>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                     <button><Link className="nav-button" to="/">signIn </Link></button>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;