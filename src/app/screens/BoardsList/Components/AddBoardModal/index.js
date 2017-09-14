import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddBoardModal from './layout';
import './styles.css';

class AddBoardModalContainer extends Component {
  state = { visible: false };

  openModal = () => {
    this.setState({
      visible: true
    });
  };

  closeModal = () => {
    this.setState({
      visible: false
    });
  };

  handleSubmit = value => {
    if (!value.boardName || !value.boardColor) {
      window.alert('You should give a board name and color'); //eslint-disable-line
    } else {
      this.props.onSubmit(value.boardName, value.boardColor);
      this.closeModal();
    }
  };

  render() {
    return (
      <AddBoardModal
        onSubmit={this.handleSubmit}
        visible={this.state.visible}
        openModal={this.openModal}
        closeModal={this.closeModal}
      />
    );
  }
}

AddBoardModalContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddBoardModalContainer;
