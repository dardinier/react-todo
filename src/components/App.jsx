import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = ({ todos, addTodo, toggleTodo }) => (
  <div className="mdc-typography">
    <Header />
    <div className="mdc-top-app-bar--fixed-adjust">
      <div className="col">
        <TodoForm onSubmit={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} />
      </div>
    </div>
  </div>
);

App.propTypes = {
  todos: PropTypes.arrayOf().isRequired,
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default App;
