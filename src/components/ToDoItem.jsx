import React from 'react';

function ToDoItem({
  item,
  onDeleteItem,
  onMarkCompleted,
  onEditItem,
  count,
  editItemId,
  editItemText,
  onSaveEditItem,
  onCancelEditItem,
  onEditItemTextChange,
}) {
  const handleSaveEditItem = () => {
    onSaveEditItem(item.id, editItemText);
  };

  const handleCancelEditItem = () => {
    onCancelEditItem();
  };

  return (
    <li className="flex justify-between py-2">
      {editItemId === item.id ? (
        <input
          type="text"
          value={editItemText}
          onChange={(e) => onEditItemTextChange(e)}
          className="w-full p-2 border border-gray-400 rounded-lg"
        />
      ) : (
        <span className="text-lg">
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => onMarkCompleted(item.id)}
          />{' '}
          {count}. {item.text}
        </span>
      )}
      <div className="flex gap-4">
        {editItemId === item.id ? (
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              onClick={handleSaveEditItem}
            >
              Save
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
              onClick={handleCancelEditItem}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
              onClick={() => onDeleteItem(item.id)}
            >
              Delete
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
              onClick={() => onMarkCompleted(item.id)}
            >
              {item.completed ? 'Mark as incomplete' : 'Mark as completed'}
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              onClick={() => onEditItem(item.id)}
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </li>
  );
}

export default ToDoItem;
