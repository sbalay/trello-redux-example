import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardActions from '../../../../redux/boards/actions';

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

  handleSubmit = ({ boardName, boardColor }) => {
    if (!boardName || !boardColor) {
      /* eslint-disable no-alert */
      window.alert('You should give a board name and color');
      /* eslint-enable no-alert */
    } else {
      this.props.dispatch(BoardActions.addBoard(boardName, boardColor));
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

export default connect()(AddBoardModalContainer);
