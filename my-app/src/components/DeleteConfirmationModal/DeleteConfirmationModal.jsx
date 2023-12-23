import React from 'react';
import './DeleteConfirmationModal.scss';

const DeleteConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="delete-confirmation-modal">
      <p>Are you sure you want to delete this contact?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
};

export default DeleteConfirmationModal;