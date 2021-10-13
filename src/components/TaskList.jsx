import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onRemove, onEdit }) => (
  <>
    {tasks.map((task) => (
      <TaskCard
        key={task.id}
        task={task}
        onEdit={() => onEdit(task)}
        onRemove={() => onRemove(task)}
      />
    ))}
  </>
);

export default TaskList;
