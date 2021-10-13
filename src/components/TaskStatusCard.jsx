import React from 'react';
// import Draggable from 'react-draggable';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

const TaskStatus = () => (
  <div className="flex flex-col absolute cursor-move p-2 bg-red-100 h-full m-auto">
    <h1>Requested</h1>
    <Droppable DroppableId="Requested">
      {(provided) => (
        // <div {...provided.droppableProps} ref={provided.innerRef} className="flex flex-col">
        <div ref={provided.innerRef} className="flex flex-col">
          <TaskCard />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);

export default TaskStatus;
