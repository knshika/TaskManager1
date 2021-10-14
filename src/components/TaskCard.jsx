/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { HiOutlineClock } from 'react-icons/hi';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdOutlineDoneOutline } from 'react-icons/md';

const TaskCard = ({ task, onEdit, onRemove }) => (
  <Draggable draggableId={task.id}>
    {(provided, snapshot) => (
      <div
        ref={provided.inneref}
        snapshot={snapshot}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="flex flex-col cursor-move p-2 w-1/4 bg-pink-100 m-2"
      >
        <div className="flex flex-col p-2 items-start">
          <div className="flex flex-row justify-between w-full items-center">
            <div className=" uppercase text-gray-500 text-xl ">{task.title}</div>
            <div className="flex flex-row justify-end items-center rounded-full border-2 border-gray-500  ">
              <button type="button">
                <span className="flex text-xl items-center  text-gray-600 p-1">
                  <MdOutlineDoneOutline />
                </span>
              </button>
            </div>
          </div>

          <div className="  text-gray-500 text-l py-2">{task.description}</div>
        </div>

        <div className="flex flex-row justify-between items-center  text-sm m-2 p-2">
          <div className="flex flex-row items-center rounded-lg bg-red-300  p-2">
            <HiOutlineClock />
            <span>{task.deadline}</span>
          </div>
          <div className="flex flex-row justify-end text-l my-4">
            <button className="mx-2" type="button" onClick={() => onEdit(task)}>
              <span className="flex text-2xl items-center text-gray-500 m-2">
                <FiEdit />
              </span>
            </button>
            <button className="mx-2" type="button" onClick={() => onRemove(task)}>
              <span className="flex text-2xl items-center text-gray-500 m-2">
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
