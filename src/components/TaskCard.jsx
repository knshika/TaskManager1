import React from 'react';

const TaskCard = ({ task, onEdit, onRemove }) => (
  <div className="flex flex-col cursor-move p-2 bg-yellow-100 m-2">
    <div className="flex flex-col">
      <span>{task.title}</span>
      <span>{task.description}</span>
    </div>

    <div>
      <div>
        Created :
        {task.created_at}
      </div>
      <div>
        Updated :
        {task.updated_at}
      </div>
      <div>
        Deadline :
        {task.deadline}
      </div>
    </div>

    <div>Pending</div>

    <div>
      <button type="button" onClick={() => onEdit(task)}>
        Edit
      </button>
      <button type="button" onClick={() => onRemove(task)}>
        Delete
      </button>
    </div>
  </div>
);

export default TaskCard;
