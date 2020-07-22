import * as TYPES from '../actions/types';

import { InitialStateType, TodoTypes, TodoType } from '../types/types';

const INITIAL_STATE: InitialStateType = {
  todos: [
    {
      id: 1,
      title: 'Coffee',
      completed: false,
    },
    {
      id: 2,
      title: 'Drink',
      completed: false,
    },
    {
      id: 3,
      title: 'Workout',
      completed: false,
    },
  ],
};

export default (state = INITIAL_STATE, action: TodoTypes): InitialStateType => {
  switch (action.type) {
    case TYPES.GET_TODOS:
      return { ...state };

    case TYPES.ADD_TODO:
      return { ...state, todos: addTodo(action, state) };

    case TYPES.DELETE_TODO:
      return { ...state, todos: deleteTodo(action, state) };

    case TYPES.SAVE_TODO:
      return { ...state, todos: saveTodo(action, state) };

    default:
      return state;
  }
};

const addTodo = (action: TodoTypes, state = INITIAL_STATE) => {
  let id: number;
  if (state.todos.length === 0) {
    id = 1;
  } else {
    id = state.todos[state.todos.length - 1].id + 1 || 1;
  }

  const newTodo = {
    id,
    title: action.payload === '' ? 'Ууупс' : action.payload,
    completed: false,
  };
  return [...state.todos, newTodo];
};

const deleteTodo = (action: TodoTypes, state = INITIAL_STATE) =>
  state.todos.filter((todo) => todo.id !== action.payload);

const saveTodo = (action: TodoTypes, state = INITIAL_STATE) => {
  const index: number = state.todos.findIndex(
    (todo) => todo.id === action.payload.id
  );
  const todo: TodoType = state.todos[index];

  if (!todo) {
    throw new Error('404');
  }

  const newTodo: TodoType = {
    id: todo.id,
    title: action.payload.title,
    completed: todo.completed,
  };

  const newTodos: Array<TodoType> = [
    ...state.todos.slice(0, index),
    newTodo,
    ...state.todos.slice(index + 1),
  ];

  return newTodos;
};
