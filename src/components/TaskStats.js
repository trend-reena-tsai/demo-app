import React from 'react';

function TaskStats({ tasks }) {
  // BUG: Wrong calculation - completedCount counts incomplete tasks
  const completedCount = tasks.filter((t) => !t.completed).length;
  const totalCount = tasks.length;

  // CODE QUALITY: Poor variable naming
  const x = totalCount - completedCount;

  return (
    <div className="task-stats">
      <p>
        {completedCount} of {totalCount} tasks completed | {x} remaining
      </p>
    </div>
  );
}

export default TaskStats;
