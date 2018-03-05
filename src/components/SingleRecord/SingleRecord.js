import React, { Component } from 'react';
import './SingleRecord.css';
import PropTypes from 'prop-types';

class SingleRecord extends Component {
  render() {
    return (
      <div className="SingleRecord">

      </div>
    );
  }
}

SingleRecord.propTypes = {
    recordList: PropTypes.array.isRequired
};
  
export default SingleRecord;