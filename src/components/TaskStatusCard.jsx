/* eslint-disable max-len */
import React, { useMemo } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import TaskList from './TaskList';

const TaskStatusCard = ({
  tasks, onRemove, onEdit, updateTask,
}) => {
  const taskLists = useMemo(() => {
    // const lists = {}; // { inprogress: [...], pending: [...] }
    // for (const task of tasks) {
    //   if (lists[task.status]) {
    //     lists[task.status].push(task);
    //   } else {
    //     lists[task.status] = [task];
    //   }
    // }
    // return lists;

    const value = tasks.reduce(
      (_lists, task) => {
        const lists = _lists;
        if (lists[task.status]) {
          lists[task.status].push(task);
        } else {
          lists[task.status] = [task];
        }
        return lists;
      },
      {
        pending: [],
        inprogress: [],
        finished: [],
        backlogs: [],
      },
    );

    return value;
  }, [tasks]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const status = result.destination.droppableId;
    const taskId = result.draggableId;

    updateTask({ id: taskId, status });
  };

  return (
    <div className="flex flex-row h-full w-full max-w-full overflow-auto space-x-4">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(taskLists).map(([status, items]) => (
          <TaskList
            items={items}
            key={status}
            listTitle={status}
            tasks={tasks}
            onRemove={onRemove}
            onEdit={onEdit}
            updateTask={updateTask}
          />
        ))}
      </DragDropContext>
    </div>
  );
};

export default TaskStatusCard;
