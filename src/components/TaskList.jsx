/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

const TaskList = ({
  onRemove, onEdit, prefix, elements,
}) => (
  <div className="flex-1 m-2  uppercase text-gray-600 p-2 h-full">
    <h2 className="bg-gray-100 font-serif text-xl p-2">{prefix}</h2>
    <Droppable droppableId={`${prefix}`}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {elements.map((task, index) => (
            <TaskCard
              key={task.id}
              task={task}
              index={index}
              onEdit={() => onEdit(task)}
              onRemove={() => onRemove(task)}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>

    {/* {tasks.map((task) => (
      <TaskCard
        key={task.id}
        task={task}
        onEdit={() => onEdit(task)}
        onRemove={() => onRemove(task)}
      />
    ))} */}
  </div>
);

export default TaskList;
