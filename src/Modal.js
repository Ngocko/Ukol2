import React from 'react';
import './Modal.css'; // We'll create this CSS file next

const Modal = ({ isOpen, onClose, onAddItem, newItemName, setNewItemName }) => {
  if (!isOpen) return null;

  const handleAddItem = () => {
    onAddItem();
    setNewItemName('');
    onClose();
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
          <button onClick={handleAddItem}>Přidat</button>
          <button onClick={onClose}>Zavřít</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
