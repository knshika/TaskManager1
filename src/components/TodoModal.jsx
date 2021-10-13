import React from 'react';

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
    <div className="flex fixed inset-0 bg-transparent justify-center items-center">
      <div className="flex flex-col bg-green-200  h-2/3 w-1/3 p-2 ">
        <h2 className="p-1 m-1">{task.id ? 'Edit Task' : 'Create a Task'}</h2>

        <input
          className="p-1 m-1"
          value={task.title}
          onChange={handleChange}
          required
          type="text"
          placeholder="Title"
          name="title"
        />
        <textarea
          className="p-1 m-1"
          value={task.description}
          onChange={handleChange}
          required
          placeholder="Description"
          name="description"
        />

        <div className="flex flex-row bg-green-300 p-1 m-1 items-center">
          <h3 className="flex-2">Color</h3>
          <div className="block flex-1 border-none  w-full">
            <button type="button" className="bg-blue-200 p-2 m-2 rounded-2xl">
              *
            </button>
            <button type="button" className="bg-pink-300 p-2  m-2 rounded-2xl">
              *
            </button>
            <button type="button" className="bg-gray-300 p-2  m-2 rounded-2xl">
              *
            </button>
            <button type="button" className="bg-yellow-300 p-2  m-2 rounded-2xl">
              *
            </button>
            <button type="button" className="bg-red-300 p-2  m-2 rounded-2xl">
              *
            </button>
            <input type="color" className=" p-4  rounded-2xl" value="#ff200" />
          </div>
        </div>

        <div className="flex p-1 m-1">
          <label htmlFor="status">
            Task Status
            <select name="status" id="status">
              <option value="Options" default>
                Options
              </option>
              <option value="InProgress">InProgress</option>
              <option value="Finished">Finished</option>
              <option value="Pending">Pending</option>
            </select>
          </label>
        </div>

        <div className="flex p-1 m-1">
          <h3 className=" m-1">Set Deadlline</h3>
          <input className=" m-1" type="date" id="end_date" name="Set End Date" default="" />
          <input className=" m-1" type="time" name="end-time" id="end-time" default="" />
        </div>

        <div className="flex p-1 m-1">
          <button onClick={onClose} className="bg-orange-300" type="button">
            Cancel
          </button>
          <button onClick={onFinish} className="bg-green-300" type="button">
            {task.id ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
