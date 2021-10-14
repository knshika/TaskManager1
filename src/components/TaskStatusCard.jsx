/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskList from './TaskList';

const lists = ['Pending', 'InProgress', 'Finished', 'Backlogs'];

const TaskStatusCard = ({
  tasks, onRemove, onEdit, onCreate,
}) => {
  // const getTasks = (prefix) => tasks.filter((val) => val.status === prefix).map((task) => ({ ...task, prefix }));

  // eslint-disable-next-line max-len
  const generateLists = () => lists.reduce((data, statusVal) => ({ ...data, [statusVal]: [] }), {});

  const [elements, setElements] = useState(generateLists());

  useEffect(() => {
    setElements(generateLists());
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];

    const [removedElement, newSourceList] = onRemove(sourceList, result.source.index);
    listCopy[result.source.droppableId] = newSourceList;

    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = onCreate(
      destinationList,
      result.destination.index,
      removedElement,
    );

    setElements(listCopy);
  };

  return (
    <div className="flex flex-col h-full w-full">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-row ">
          {lists.map((statusVal) => (
            <TaskList
              elements={elements[statusVal]}
              key={statusVal}
              prefix={statusVal}
              tasks={tasks}
              onRemove={onRemove}
              onEdit={onEdit}
            />
          ))}
        </div>
      </DragDropContext>
      {/* <h1>Requested</h1>
      <div className="flex flex-col">
        <TaskCard />
      </div> */}
    </div>
  );
};

export default TaskStatusCard;
