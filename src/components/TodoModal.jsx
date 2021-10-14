import React from 'react';
import { BsFiles } from 'react-icons/bs';
import { TiTick } from 'react-icons/ti';

const TodoModal = ({
  show, onClose, task, onUpdate, onFinish,
}) => {
  const handleChange = (e) => {
    onUpdate({ [e.target.name]: e.target.value });
  };

  if (!show) {
    return null;
  }

  return (
    <div className="flex fixed inset-4 bg-gray-100 justify-center items-center">
      <div className="flex flex-col p-8 bg-gray-200 ">
        <div className="flex w-full mb-8 flex-row justify-between items-center">
          <h2 className=" uppercase text-gray-500 text-2xl">
            {task.id ? 'Edit Task' : 'Create a Task'}
          </h2>
          <span className="text-xl">
            <BsFiles />
          </span>
        </div>

        <input
          className=" mb-4 border-b-2 p-2 border-gray-400"
          value={task.title}
          onChange={handleChange}
          required
          type="text"
          placeholder="Title"
          name="title"
        />
        <input
          className=" mb-4 border-b-2 p-2  border-gray-400"
          value={task.description}
          onChange={handleChange}
          required
          type="text"
          placeholder="Description"
          name="description"
        />

        <div className="flex flex-row justify-between   mb-4 items-center">
          <h3 className="text-gray-500 mr-8">Color</h3>
          <div className="flex  border-none justify-between w-full">
            <button
              type="button"
              className="bg-blue-200 flex items-center justify-center rounded-full  h-8 w-8 "
            >
              <TiTick />
            </button>
            <button
              type="button"
              className="bg-pink-300 flex items-center justify-center rounded-full align-middle text-center h-8 w-8"
            >
              <TiTick />
            </button>
            <button
              type="button"
              className="bg-gray-300 flex items-center justify-center rounded-full align-middle text-center h-8 w-8"
            >
              <TiTick />
            </button>
            <button
              type="button"
              className="bg-yellow-300 flex items-center justify-center rounded-full align-middle text-center h-8 w-8"
            >
              <TiTick />
            </button>
            <button
              type="button"
              className="bg-red-300 flex items-center justify-center rounded-full align-middle text-center h-8 w-8"
            >
              <TiTick />
            </button>
          </div>
        </div>

        <div className="flex text-gray-500  mb-4">
          <label htmlFor="status">
            Task Status
            <select className="ml-4 bg-gray-300 p-2" name="status" id="status">
              <option value={task.status} default>
                Pending
              </option>
              <option value={task.status}>InProgress</option>
              <option value={task.status}>Finished</option>
              <option value={task.status}>Backlogs</option>
            </select>
          </label>
        </div>

        <div className="flex items-center mb-4">
          <h3 className=" text-gray-500 mr-4 mb-4">Deadlline</h3>
          <input
            className=" mb-4 text-gray-500 bg-gray-300 p-2"
            type="date"
            id="end_date"
            name="Set End Date"
            default=""
          />
          <input
            className=" mb-4 ml-2 text-gray-500 bg-gray-300 p-2"
            type="time"
            name="end-time"
            id="end-time"
            default=""
          />
        </div>

        <div className="flex uppercase text-gray-700 justify-end">
          <button
            onClick={onClose}
            className="bg-white uppercase p-2 m-2 border-2 border-gray-500"
            type="button"
          >
            Cancel
          </button>
          <button
            onClick={onFinish}
            className="bg-white uppercase p-2 m-2 border-2 border-gray-500"
            type="button"
          >
            {task.id ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
