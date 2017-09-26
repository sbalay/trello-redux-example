import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-awesome-modal';
import { Field, reduxForm } from 'redux-form';

import {
  INPUT,
  BOARD_NAME,
  BOARD_COLOR,
  FIELD_TYPE,
  NEW_BOARDNAME,
  NEW_BOARD_COLOR,
  FORM_NAME,
  BUTTON_TYPE
} from './formFieldNames';
import './styles.css';

const modalHeightSize = '300';
const modalWidthSize = '300';

const AddBoardModal = ({ handleSubmit, visible, onCloseModal, onOpenModal }) => (
  <div>
    <button className="add-board-button" onClick={onOpenModal}>
      + Add New Board
    </button>
    <Modal
      visible={visible}
      width={modalWidthSize}
      height={modalHeightSize}
      effect="fadeInLeft"
      onClickAway={onOpenModal}
    >
      <div className="modal-container">
        <h1>what is the name of the new board?</h1>
        <form onSubmit={handleSubmit} name={FORM_NAME}>
          <Field component={INPUT} name={BOARD_NAME} type={FIELD_TYPE} placeholder={NEW_BOARDNAME} />
          <Field component={INPUT} name={BOARD_COLOR} type={FIELD_TYPE} placeholder={NEW_BOARD_COLOR} />
          <div className="modal-buttons-container">
            <button type={BUTTON_TYPE} className="modal-button">
              Add
            </button>
            <button className="modal-button" onClick={onCloseModal}>
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
  onCloseModal: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired
};

export default reduxForm({
  form: FORM_NAME,
  initialValues: { [BOARD_NAME]: '', [BOARD_COLOR]: '' }
})(AddBoardModal);
