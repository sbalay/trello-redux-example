import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ROUTES } from '../../../config/routes';
import BoardActions from '../../../redux/boards/actions';
import { propTypes as boardPropTypes } from '../../../redux/boards/reducer';

class BoardDetailContainer extends Component {
  componentWillMount() {
    this.props.dispatch(BoardActions.getBoard(this.props.match.params.id));
  }

  render() {
    const content = this.props.loading
      ? <h1>Loading</h1>
      : <h1 key={this.props.board.id}>
          {this.props.board.name}
        </h1>;

    return (
      <div>
        <Link to={ROUTES.BOARDS_LIST()}>Back</Link>
        {content}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  loading: store.boards.loading,
  board: store.boards.detail
});

BoardDetailContainer.propTypes = {
  loading: boardPropTypes.loading,
  board: boardPropTypes.board,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default connect(mapStateToProps)(BoardDetailContainer);
