// src/pages/ShoppingListDetailPage.js
import React, { useState } from 'react';
import './App.css';
import AddItemModal from './AddItemModal';
import AddMemberModal from './AddMemberModal';
import UpdateNameModal from './UpdateNameModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const initialListData = {
  name: "Můj nákupní seznam",
  isOwner: true,
  members: [
    { id: 1, name: "Alice", isCurrentUser: true },
    { id: 2, name: "Bob" }
  ],
  items: [
    { id: 1, name: "Chléb", completed: false },
    { id: 2, name: "Mléko", completed: true },
    { id: 3, name: "Vejce", completed: false },
  ]
};

const ShoppingListDetailPage = () => {
  const [listData, setListData] = useState(initialListData);
  const [newItemName, setNewItemName] = useState("");
  const [newMemberName, setNewMemberName] = useState("");
  const [newName, setNewName] = useState(listData.name);
  const [filter, setFilter] = useState("all");
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);

  const handleUpdateName = (name) => {
    setListData({ ...listData, name });
  };

  const addItem = (name) => {
    const newItem = { id: Date.now(), name, completed: false };
    setListData({ ...listData, items: [...listData.items, newItem] });
  };

  const removeItem = (id) => {
    setListData({
      ...listData,
      items: listData.items.filter(item => item.id !== id)
    });
  };

  const toggleItemStatus = (id) => {
    setListData({
      ...listData,
      items: listData.items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    });
  };

  const addMember = (name) => {
    const newMember = { id: Date.now(), name };
    setListData({ ...listData, members: [...listData.members, newMember] });
  };

  // Remove member function
  const removeMember = (id) => {
    setListData({
      ...listData,
      members: listData.members.filter(member => member.id !== id)
    });
  };

  const filteredItems = listData.items.filter(item =>
    filter === "all" ? true : filter === "unresolved" ? !item.completed : item.completed
  );

  return (
    <div>
      <h1>{listData.name}</h1>

      {listData.isOwner && (
        <button onClick={() => setIsNameModalOpen(true)}>Upravit název</button>
      )}

      <h2>Členové</h2>
      <ul>
        {listData.members.map(member => (
          <li key={member.id}>
            {member.name}
            {listData.isOwner && (
              <FontAwesomeIcon 
                icon={faTrashAlt} 
                onClick={() => removeMember(member.id)} 
                style={{ cursor: 'pointer', color: 'red', marginLeft: '10px' }} 
                title="Odstranit člena"
              />
            )}
          </li>
        ))}
      </ul>
      {listData.isOwner && (
        <button onClick={() => setIsMemberModalOpen(true)}>Přidat člena</button>
      )}

      <h2>Položky</h2>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">Všechny</option>
        <option value="unresolved">Nevyřešené</option>
        <option value="resolved">Vyřešené</option>
      </select>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
              {item.name}
            </span>
            <button onClick={() => toggleItemStatus(item.id)}>
              {item.completed ? "Odznačit" : "Označit jako vyřešené"}
            </button>
            <FontAwesomeIcon 
              icon={faTrashAlt} 
              onClick={() => removeItem(item.id)} 
              style={{ cursor: 'pointer', color: 'red', marginLeft: '10px' }} 
              title="Odebrat položku"
            />
          </li>
        ))}
      </ul>
      <button onClick={() => setIsItemModalOpen(true)}>Přidat položku</button>

      {/* Modals */}
      <AddItemModal 
        isOpen={isItemModalOpen} 
        onClose={() => setIsItemModalOpen(false)} 
        onAddItem={addItem} 
        newItemName={newItemName}
        setNewItemName={setNewItemName}
      />
      <AddMemberModal 
        isOpen={isMemberModalOpen} 
        onClose={() => setIsMemberModalOpen(false)} 
        onAddMember={addMember} 
        newMemberName={newMemberName}
        setNewMemberName={setNewMemberName}
      />
      <UpdateNameModal 
        isOpen={isNameModalOpen} 
        onClose={() => setIsNameModalOpen(false)} 
        newName={newName} 
        setNewName={setNewName} 
        onUpdateName={handleUpdateName} 
      />
    </div>
  );
};

export default ShoppingListDetailPage;
