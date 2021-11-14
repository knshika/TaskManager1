/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

const TaskList = ({
  onRemove, onEdit, listTitle, items, updateTask,
}) => (
  <div className="flex flex-col w-1/4 uppercase text-gray-600 h-full max-h-full  overflow-auto relative">
    <h2 className="bg-gray-100 capitalize font-serif text-xl p-2 sticky top-0 text-center mb-2">
      {listTitle}
    </h2>

    <Droppable droppableId={`${listTitle}`}>
      {(provided) => (
        <div className="flex-1 min-w-[270px]" {...provided.droppableProps} ref={provided.innerRef}>
          {items.map((task, index) => (
            <TaskCard
              key={task.id}
              task={task}
              index={index}
              onEdit={onEdit}
              onRemove={onRemove}
              updateTask={updateTask}
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
