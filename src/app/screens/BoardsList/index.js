import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ROUTES } from '../../../config/routes';
import BoardActions from '../../../redux/boards/actions';
import { propTypes as boardPropTypes } from '../../../redux/boards/reducer';

class BoardsListContainer extends Component {
  componentWillMount() {
    this.props.dispatch(BoardActions.getBoards());
  }

  render() {
    return this.props.loading
      ? <h1>Loading</h1>
      : <ul>
          {this.props.boards.map(board =>
            <li key={board.id}>
              <Link to={ROUTES.BOARD_DETAIL(board.id)}>
                {board.name}
              </Link>
            </li>
          )}
        </ul>;
  }
}

const mapStateToProps = store => ({
  boards: store.boards.list
});

export default connect(mapStateToProps)(BoardsListContainer);

BoardsListContainer.propTypes = {
  loading: boardPropTypes.loading,
  boards: PropTypes.arrayOf(boardPropTypes.board)
};
