import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddBoardModal from './layout';
import './styles.css';

class AddBoardModalContainer extends Component {
  state = { visible: false };

  handleOpenModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCloseModal = () => {
    this.setState({
      visible: false
    });
  };

  handleSubmit = value => {
    if (!value.boardName || !value.boardColor) {
      /* eslint-disable no-alert */
      window.alert('You should give a board name and color');
      /* eslint-enable no-alert */
    } else {
      this.props.onSubmit(value.boardName, value.boardColor);
      this.handleCloseModal();
    }
  };

  render() {
    return (
      <AddBoardModal
        onSubmit={this.handleSubmit}
        visible={this.state.visible}
        onOpenModal={this.handleOpenModal}
        onCloseModal={this.handleCloseModal}
      />
    );
  }
}

AddBoardModalContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default AddBoardModalContainer;
