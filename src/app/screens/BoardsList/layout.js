import React from 'react';
import PropTypes from 'prop-types';

import { propTypes as boardPropTypes } from '../../../redux/boards/reducer';

import BoardCard from './Components/BoardCard';
import AddBoardModal from './Components/AddBoardModal';
import './styles.css';

function BoardsList({ boards, onDeleteBoard }) {
  return (
    <div className="board-list-container">
      <AddBoardModal />
      <div className="boardlist">
        {boards.map(board => (
          <BoardCard key={board.id} id={board.id} name={board.name} onDeleteBoard={onDeleteBoard} />
        ))}
      </div>
    </div>
  );
}

BoardsList.propTypes = {
  boards: PropTypes.arrayOf(boardPropTypes.board).isRequired,
  onDeleteBoard: PropTypes.func.isRequired
};

export default BoardsList;
