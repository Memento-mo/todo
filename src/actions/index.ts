import * as TYPES from './types';
import { TodoTypes } from '../types/types';

const dispatchInfo = (type: string, payload: any): TodoTypes => {
  return {
    type,
    payload,
  };
};

export const getTodos = () => (dispatch: Function): void =>
  dispatch(dispatchInfo(TYPES.GET_TODOS, null));

export const addTodo = (title: string) => (dispatch: Function): void =>
  dispatch(dispatchInfo(TYPES.ADD_TODO, title));

export const deleteTodo = (id: number) => (dispatch: Function): void =>
  dispatch(dispatchInfo(TYPES.DELETE_TODO, id));

export const saveTodo = (id: number, title: string) => (
  dispatch: Function
): void => dispatch(dispatchInfo(TYPES.SAVE_TODO, { id, title }));
