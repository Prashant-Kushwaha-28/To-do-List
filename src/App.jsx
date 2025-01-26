import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [toDoItems, setToDoItems] = useState([
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Walk the dog', completed: false },
  ]);

  const handleAddItem = (newItem) => {
    setToDoItems([...toDoItems, newItem]);
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

  const handleEditItem = (itemId, newText) => {
    setToDoItems(
      toDoItems.map((item) =>
        item.id === itemId ? { ...item, text: newText } : item
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <ToDoList
        toDoItems={toDoItems}
        onAddItem={handleAddItem}
        onDeleteItem={handleDeleteItem}
        onMarkCompleted={handleMarkCompleted}
        onEditItem={handleEditItem}
      />
    </div>
  );
}

export default App;