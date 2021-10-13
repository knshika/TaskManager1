import React, { useState } from 'react';
import { v1 as uuid } from 'uuid';
import TaskList from './TaskList';
import TodoModal from './TodoModal';

const DEFAULT_TASK = {
  title: '',
  description: '',
  deadline: '',
  status: '',
};

const DEFAULT_TASKS = [
  {
    id: uuid(),
    title: 'Task1',
    description: 'Start Adding your Tasks',
    created_at: '12 Oct',
    updated_at: '13 Oct',
    deadline: '15 Oct',
    status: 'Pending',
  },
  {
    id: uuid(),
    title: 'Task2',
    description: 'Start Doing your Tasks',
    created_at: '12 Oct',
    updated_at: '13 Oct',
    deadline: '15 Oct',
    status: 'Pending',
  },
];

const TaskManager = () => {
  const [show, setShow] = useState(false);
  const [selectedTask, setSelectedTask] = useState(DEFAULT_TASK);
  const [tasks, setTasks] = useState(DEFAULT_TASKS);

  const closeEditModal = () => {
    setSelectedTask(DEFAULT_TASK);
    setShow(false);
  };

  const createTask = (newTask) => setTasks((val) => [...val, newTask]);

  const removeTask = (task) => setTasks((val) => val.filter((t) => t.id !== task.id));

  const updateTask = (updated) => {
    setTasks(tasks.map((task) => (task.id === updated.id ? { ...task, ...updated } : task)));
  };

  /**
   * When user clicks submit on the task modal
   */
  const onTaskUpdateFinish = () => {
    const now = new Date().toISOString();

    // if id is present that means we were editing a task
    if (selectedTask.id) {
      updateTask({ ...selectedTask, updated_at: now });
    } else {
      // if id isnt present we are creating a new task
      createTask({
        ...selectedTask,
        created_at: now,
        updated_at: now,
        id: uuid(),
      });
    }

    // after updating/creating task reset the data and hide modal
    closeEditModal();
  };

  return (
    <>
      <div className="flex flex-row h-screen">
        <div className="flex-2 bg-red-300 p-6">
          <button
            type="button"
            className="p-2 m-1 bg-white-200 text-xl"
            onClick={() => setShow(true)}
          >
            +
          </button>
        </div>

        <div className="flex-1 bg-yellow-300 flex items-start">
          <TaskList
            tasks={tasks}
            onRemove={removeTask}
            onEdit={(task) => {
              setSelectedTask(task);
              setShow(true);
            }}
          />
        </div>
      </div>

      <TodoModal
        show={show}
        task={selectedTask}
        onUpdate={(data) => setSelectedTask((val) => ({ ...val, ...data }))}
        onFinish={onTaskUpdateFinish}
        onClose={closeEditModal}
      />
    </>
  );
};

export default TaskManager;
