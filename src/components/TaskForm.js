import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('');

  // BUG: Missing form validation - allows empty tasks to be added
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(text);
    setText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
