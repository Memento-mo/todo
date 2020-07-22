import React, { useEffect } from 'react';

import styled from 'styled-components';
import { connect, ConnectedProps } from 'react-redux';

import Item from './Item';

import { getTodos, deleteTodo, saveTodo } from '../actions/index';
import { InitialStateType, TodoType } from '../types/types';

const ListWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getTodos: () => getTodos()(dispatch),
    deleteTodo: (id: number) => deleteTodo(id)(dispatch),
    saveTodo: (id: number, title: string) => saveTodo(id, title)(dispatch),
  };
};

const mapStateToProps = (state: InitialStateType): InitialStateType => {
  return {
    todos: state.todos,
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type PropsType = PropsFromRedux & {};

const List: React.FC<PropsType> = ({
  todos,
  getTodos,
  deleteTodo,
  saveTodo,
}) => {
  useEffect(() => {
    getTodos();
  }, [todos]);
  return (
    <ListWrapper>
      {todos.map((todo: TodoType) => {
        return (
          <Item
            handleDelete={deleteTodo}
            saveTodo={saveTodo}
            todo={todo}
            key={todo.id}
          />
        );
      })}
    </ListWrapper>
  );
};

export default connector(List);
