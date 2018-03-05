import React, { Component } from 'react';
import './MainContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerTable from '../CustomerTable/CustomerTable'

class MainContainer extends Component {
  render() {
    return (
      <div className="MainContainer">
        <header className="MainContainer-header">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">WebSiteName</a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Page 1</a></li>
                <li><a href="#">Page 2</a></li>
                <li><a href="#">Page 3</a></li>
              </ul>
            </div>
          </nav>        
        </header>
        <div className="">
          <CustomerTable/>
        </div>
      </div>
    );
  }
}

export default MainContainer;
