import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ROUTES } from '../../../config/routes';
import { propTypes as boardPropTypes } from '../../../redux/boards/reducer';
import './styles.css';

class BoardsList extends PureComponent {
  handleDeleteBoard = id => {
    this.onDeleteBoard(id);
  };

  render() {
    return (
      <ul>
        {this.boards.map(board =>
          <div className="board-card" key={board.id}>
            <Link to={ROUTES.BOARD_DETAIL(board.id)}>
              <h2>
                {board.name}
              </h2>
            </Link>
            <button onClick={this.handleDeleteBoard}>X</button>
          </div>
        )}
      </ul>
    );
  }
}

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(boardPropTypes.board).isRequired,
  onDeleteBoard: PropTypes.func.isRequired
};

export default BoardsList;
