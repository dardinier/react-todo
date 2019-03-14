import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle }) => (
  <ul className="mdc-list" role="group">
    {todos.map(todo => <TodoItem key={todo.id} {...todo} onToggle={onToggle} />)}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
  })).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
