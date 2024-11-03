// src/AddMemberModal.js
import React from 'react';
import './Modal.css';

const AddMemberModal = ({ isOpen, onClose, onAddMember, newMemberName, setNewMemberName }) => {
  if (!isOpen) return null;

  const handleAdd = () => {
    if (newMemberName.trim()) {
      onAddMember(newMemberName);
      setNewMemberName('');
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Přidat nového člena</h2>
        <input 
          type="text" 
          value={newMemberName} 
          onChange={(e) => setNewMemberName(e.target.value)} 
          placeholder="Jméno člena" 
        />
        <div className="modal-buttons">
          <button onClick={handleAdd}>Přidat</button>
          <button onClick={onClose}>Zavřít</button>
        </div>
      </div>
    </div>
  );
};

export default AddMemberModal;
