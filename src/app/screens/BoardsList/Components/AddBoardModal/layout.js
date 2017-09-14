import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-awesome-modal';
import { Field, reduxForm } from 'redux-form';

import './styles.css';

const AddBoardModal = ({ handleSubmit, visible, closeModal, openModal }) => (
  <div>
    <button className="add-board-button" onClick={openModal}>
      + Add New Board
    </button>
    <Modal visible={visible} width="400" height="300" effect="fadeInLeft" onClickAway={closeModal}>
      <div className="modal-container">
        <h1>¿what is the name of the new board?</h1>
        <form onSubmit={handleSubmit} name="addBoard">
          <Field component="input" name="boardName" type="text" placeholder="New board name" />
          <Field component="input" name="boardColor" type="text" placeholder="New board color" />
          <div className="modal-buttons-container">
            <button type="submit" className="modal-button">
              Add
            </button>
            <button className="modal-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </form>
      </div>
    </Modal>
  </div>
);

AddBoardModal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'addBoard',
  initialValues: { name: '', color: '' }
})(AddBoardModal);
