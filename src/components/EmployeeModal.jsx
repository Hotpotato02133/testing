import React from 'react';

function EmployeeModal({ employee, closeModal, onEdit, onRemove }) {
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <h2>{employee ? `Edit Employee - ${employee.name}` : 'Remove Employee'}</h2>
        {/* Add form elements or confirmation message as needed */}
        <button onClick={onEdit}>Save Changes</button>
        <button onClick={onRemove}>Confirm Removal</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
}

export default EmployeeModal;
