import React, { Component } from 'react';
import './CustomerTable.css';
import SingleRecord from '../SingleRecord/SingleRecord'
import getCustomerRankList from '../../api/api'

class CustomerTable extends Component {
  constructor(props) {
    super(props);
    this.errorHandler = this.errorHandler.bind(this);
    this.successHandler = this.successHandler.bind(this);
  }
  
  componentDidMount = () => {
    getCustomerRankList()
      .then(this.successHandler)
      .catch(this.errorHandler)
  }; 

  successHandler = data => {
    this.setState({ rankList : rankList })
  }

  errorHandler = error => {
    this.setState({ error : error })
  }    

  render() {
    //const { rankList, error } = this.state;
    return (
      <div className="CustomerTable">

      </div>
    );
  }
}

export default CustomerTable;
