import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList() {
  const [toDoItems, setToDoItems] = useState([]);
  const [newItemText, setNewItemText] = useState('');
  const [editItemId, setEditItemId] = useState(null);
  const [editItemText, setEditItemText] = useState('');

  const handleAddItem = () => {
    const newItem = {
      id: toDoItems.length + 1,
      text: newItemText,
      completed: false,
    };
    setToDoItems([...toDoItems, newItem]);
    setNewItemText('');
  };

  const handleDeleteItem = (itemId) => {
    setToDoItems(toDoItems.filter((item) => item.id !== itemId));
  };

  const handleMarkCompleted = (itemId) => {
    setToDoItems(
      toDoItems.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleEditItem = (itemId) => {
    setEditItemId(itemId);
    setEditItemText(toDoItems.find((item) => item.id === itemId).text);
  };

  const handleSaveEditItem = (itemId, newText) => {
    setToDoItems(
      toDoItems.map((item) =>
        item.id === itemId ? { ...item, text: newText } : item
      )
    );
    setEditItemId(null);
  };

  const handleCancelEditItem = () => {
    setEditItemId(null);
  };

  const handleEditItemTextChange = (e) => {
    setEditItemText(e.target.value);
  };

  return (
    <div>
      <h2>ToDo List</h2>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Add new item"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          className="w-full p-2 border border-gray-400 rounded-lg"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-2"
          onClick={handleAddItem}
        >
          Add
        </button>
      </div>
      <ul className="list-none p-0 m-0">
        {toDoItems.map((item, index) => (
          <ToDoItem
            key={item.id}
            item={item}
            onDeleteItem={handleDeleteItem}
            onMarkCompleted={handleMarkCompleted}
            onEditItem={handleEditItem}
            count={index + 1}
            editItemId={editItemId}
            editItemText={editItemText}
            onSaveEditItem={handleSaveEditItem}
            onCancelEditItem={handleCancelEditItem}
            onEditItemTextChange={handleEditItemTextChange}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;

