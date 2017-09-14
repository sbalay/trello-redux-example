import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BoardActions from '../../../redux/boards/actions';
import { propTypes as boardPropTypes } from '../../../redux/boards/reducer';

import BoardsList from './layout';

class BoardsListContainer extends Component {
  componentWillMount() {
    this.props.dispatch(BoardActions.getBoards());
  }

  handleDeleteBoard = boardId => {
    this.props.dispatch(BoardActions.deleteBoard(boardId));
  };

  handleAddNewBoard = (boardName, boardColor) => {
    this.props.dispatch(BoardActions.addBoard(boardName, boardColor));
  };

  render() {
    return this.props.loading ? (
      <h1>Loading</h1>
    ) : (
      <BoardsList
        boards={this.props.boards}
        onDeleteBoard={this.handleDeleteBoard}
        onAddNewBoard={this.handleAddNewBoard}
      />
    );
  }
}

const mapStateToProps = store => ({
  boards: store.boards.list
});

BoardsListContainer.propTypes = {
  loading: boardPropTypes.loading,
  boards: PropTypes.arrayOf(boardPropTypes.board)
};

export default connect(mapStateToProps)(BoardsListContainer);
