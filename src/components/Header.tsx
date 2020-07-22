import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { connect, ConnectedProps } from 'react-redux';
import { InitialStateType } from '../types/types';

import { addTodo } from '../actions/index';

const HeaderWrapper = styled.div`
  margin-top: 20px;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 50px;
  font-weight: 400;
`;

const AddTodoElements = styled.div`
  display: flex;
  justify-content: center;
`;

const InputArea = styled.div`
  width: 70%;
  margin-right: 20px;
`;

const mapDispatchToProps = (dispatch: Function) => {
  return {
    addTodo: (title: string): void => addTodo(title)(dispatch),
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

const Header: React.FC<PropsType> = ({ todos, addTodo }) => {
  const [title, setTitle] = useState('');

  // const showTitle = (event: any): void => {
  //   if (event.charCode === 13) {
  //     console.log(title);
  //   }
  // };

  // useEffect(() => {
  //   console.log(title);
  //   document.addEventListener('keypress', (event) => showTitle(event));
  // }, [todos]);

  return (
    <HeaderWrapper>
      <Title>TO-DO LIST</Title>
      <AddTodoElements>
        <InputArea>
          <input
            className="form-control"
            type="text"
            placeholder="Enter you task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputArea>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            title === '' ? '' : addTodo(title);
            setTitle('');
          }}
        >
          Add task
        </button>
      </AddTodoElements>
    </HeaderWrapper>
  );
};

export default connector(Header);
