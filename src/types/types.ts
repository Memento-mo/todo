import * as TYPES from '../actions/types';

export type TodoType = {
  id: number;
  title: string;
  completed: boolean;
};

export type InitialStateType = {
  todos: Array<TodoType>;
};

// Type actions
interface GetTodos {
  type: typeof TYPES.GET_TODOS;
  payload: any;
}

interface AddTodo {
  type: typeof TYPES.ADD_TODO;
  payload: string;
}

interface DeleteTodo {
  type: typeof TYPES.DELETE_TODO;
  payload: number;
}

interface SaveTodo {
  type: typeof TYPES.SAVE_TODO;
  payload: { id: number; title: string };
}

export type TodoTypes = AddTodo | GetTodos | DeleteTodo | SaveTodo;
