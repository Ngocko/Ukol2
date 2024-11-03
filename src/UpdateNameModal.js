import React from 'react';
import './Modal.css';

const UpdateNameModal = ({ isOpen, onClose, newName, setNewName, onUpdateName }) => {
  if (!isOpen) return null;

  const handleUpdate = () => {
    if (newName.trim()) {
      onUpdateName(newName);
      setNewName('');
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Upravit název seznamu</h2>
        <input 
          type="text" 
          value={newName} 
          onChange={(e) => setNewName(e.target.value)} 
          placeholder="Nový název" 
        />
        <div className="modal-buttons">
          <button onClick={handleUpdate}>Uložit</button>
          <button onClick={onClose}>Zavřít</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateNameModal;
