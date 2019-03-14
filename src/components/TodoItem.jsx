import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({
  id, task, completed, onToggle,
}) => {
  const handleClick = (event) => {
    event.preventDefault();
    onToggle(id);
  };

  return (
    <div>
      <label htmlFor={id}>
        <input type="checkbox" checked={completed} onClick={handleClick} />
        {task}
      </label>
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoItem;
