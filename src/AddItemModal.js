// src/AddItemModal.js
import React from 'react';
import './Modal.css'; // Make sure to use the same CSS file for styling

const AddItemModal = ({ isOpen, onClose, onAddItem, newItemName, setNewItemName }) => {
  if (!isOpen) return null;

  const handleAdd = () => {
    if (newItemName.trim()) {
      onAddItem(newItemName);
      setNewItemName('');
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Přidat novou položku</h2>
        <input 
          type="text" 
          value={newItemName} 
          onChange={(e) => setNewItemName(e.target.value)} 
          placeholder="Název položky" 
        />
        <div className="modal-buttons">
          <button onClick={handleAdd}>Přidat</button>
          <button onClick={onClose}>Zavřít</button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
