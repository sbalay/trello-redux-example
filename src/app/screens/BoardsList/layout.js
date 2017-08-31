import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ROUTES } from '../../../config/routes';
import { propTypes as boardPropTypes } from '../../../redux/boards/reducer';
import './styles.css';

const BoardsList = ({ boards, onDeleteBoard }) => (
  <ul>
    {boards.map(board => (
      <div className="board-card" key={board.id}>
        <Link to={ROUTES.BOARD_DETAIL(board.id)}>
          <h2>{board.name}</h2>
        </Link>
        <button onClick={() => onDeleteBoard(board.id)}>X</button>
      </div>
    ))}
  </ul>
);

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(boardPropTypes.board),
  onDeleteBoard: PropTypes.func.isRequired
};

export default BoardsList;
