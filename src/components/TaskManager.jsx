import React, { useState } from 'react';
import { v1 as uuid } from 'uuid';
// import TaskList from './TaskList';
import { HiOutlineViewGridAdd } from 'react-icons/hi';

import TaskStatusCard from './TaskStatusCard';
import TodoModal from './TodoModal';

const DEFAULT_TASK = {
  title: '',
  description: '',
  deadline: '',
  status: 'pending',
};

const DEFAULT_TASKS = [
  {
    id: uuid(),
    title: 'Task1',
    description: 'Start Adding your Tasks',
    created_at: '12 Oct',
    updated_at: '13 Oct',
    deadline: '15 Oct',
    status: 'pending',
  },
  {
    id: uuid(),
    title: 'Task2',
    description: 'Start Doing your Tasks',
    created_at: '12 Oct',
    updated_at: '13 Oct',
    deadline: '15 Oct',
    status: 'pending',
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
    // if (!task.description) return;
    const now = new Date().toISOString();

    // if id is present that means we were editing a task
    if (selectedTask.id) {
      updateTask({ ...selectedTask, updated_at: now });
    } else {
      // if id is not present we are creating a new task
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
      <div className="flex flex-row h-screen max-h-full overflow-auto p-4">
        <div className="bg-gray-100 p-6 mr-2">
          <button
            type="button"
            className="p-2 m-1 bg-white-200 border-2 border-gray-800 text-xl"
            onClick={() => setShow(true)}
          >
            <HiOutlineViewGridAdd />
          </button>
        </div>

        <div className="flex flex-col flex-1">
          <h1 className="p-1 mb-2 font-serif uppercase text-4xl text-gray-600 text-center">
            Task Manager
          </h1>

          <TaskStatusCard
            tasks={tasks}
            updateTask={updateTask}
            onCreate={createTask}
            onRemove={removeTask}
            onEdit={(task) => {
              setSelectedTask(task);
              setShow(true);
            }}
          />

          {/* <TaskList
            tasks={tasks}
            onRemove={removeTask}
            onEdit={(task) => {
              setSelectedTask(task);
              setShow(true);
            }}
          /> */}
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
