import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ROUTES } from '../../../../../config/routes';
import './styles.css';

class BoardsList extends PureComponent {
  handleDeleteBoard = () => {
    this.props.onDeleteBoard(this.props.id);
  };

  render() {
    return (
      <div className="board-card" key={this.props.id}>
        <Link to={ROUTES.BOARD_DETAIL(this.props.id)}>
          <h2>{this.props.name}</h2>
        </Link>
        <button onClick={this.handleDeleteBoard}>X</button>
      </div>
    );
  }
}

BoardsList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onDeleteBoard: PropTypes.func.isRequired
};

export default BoardsList;
