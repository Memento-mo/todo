import React, { useState } from 'react';

import { TodoType } from '../types/types';

import './item.css';

type TodoPropsType = {
  todo: TodoType;
  handleDelete: (id: number) => void;
  saveTodo: (id: number, title: string) => void;
};

const Item = ({ todo, handleDelete, saveTodo }: TodoPropsType) => {
  const [title, setTitle] = useState('');
  const [isShow, setShow] = useState(false);

  return (
    <div className="mt-3">
      <div className="card">
        <div className="card-body">
          <div className={isShow ? 'active' : 'non-active'}>
            <input
              type="text"
              className="form-control active mr-3"
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              className="btn btn-success"
              onClick={() => {
                title === '' ? '' : saveTodo(todo.id, title);
                setShow(false);
              }}
            >
              Save
            </button>
          </div>
          <div className={`todo-main ${isShow ? 'non-active' : 'active'}`}>
            <h3 className="todo-title">{todo.title}</h3>
            <div className="buttons">
              <button
                onClick={() => setShow(true)}
                type="button"
                className="btn btn-primary"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(todo.id)}
                type="button"
                className="btn btn-danger ml-3"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
