/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { HiOutlineClock } from 'react-icons/hi';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdDone } from 'react-icons/md';

const TaskCard = ({
  index, task, onEdit, onRemove, updateTask,
}) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        snapshot={snapshot}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="flex flex-col cursor-move p-2 bg-pink-100 my-2"
      >
        <div className="flex flex-col p-2 items-start">
          <div className="flex flex-row justify-between w-full items-center">
            <div className="uppercase text-gray-500 text-xl ">{task.title}</div>
            <div className="flex flex-row justify-end items-center ">
              <button
                className="mx-2 focus:outline-none"
                type="button"
                onClick={() => updateTask({ id: task.id, status: 'finished' })}
              >
                <span className="flex text-xl border-2 border-gray-900 rounded-full items-center text-gray-900 m-1 opacity-70">
                  <MdDone />
                </span>
              </button>
            </div>
          </div>

          <div className="text-gray-500 text-l py-2">{task.description}</div>
        </div>

        <div className="flex flex-row flex-wrap justify-between items-center text-sm m-1 p-1">
          <div className="flex flex-row items-center rounded-lg bg-red-300  p-1">
            <HiOutlineClock />
            <span>{task.deadline}</span>
          </div>
          <div className="flex flex-row justify-end text-l ">
            <button className="mx-1" type="button" onClick={() => onEdit(task)}>
              <span className="flex text-2xl items-center text-gray-500 m-1">
                <FiEdit />
              </span>
            </button>
            <button className="mx-1" type="button" onClick={() => onRemove(task)}>
              <span className="flex text-2xl items-center text-gray-500 m-1">
                <RiDeleteBin6Line />
              </span>
            </button>
          </div>
        </div>
      </div>
    )}
  </Draggable>
);

export default TaskCard;
