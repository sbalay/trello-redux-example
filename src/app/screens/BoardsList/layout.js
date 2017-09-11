import React from 'react';
import PropTypes from 'prop-types';

import { propTypes as boardPropTypes } from '../../../redux/boards/reducer';

import BoardCard from './Components/BoardCard';

function BoardsList({ boards, onDeleteBoard }) {
  return (
    <ul>
      {boards.map(board => (
        <BoardCard key={board.id} id={board.id} name={board.name} onDeleteBoard={onDeleteBoard} />
      ))}
    </ul>
  );
}

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(boardPropTypes.board).isRequired,
  onDeleteBoard: PropTypes.func.isRequired
};

export default BoardsList;
