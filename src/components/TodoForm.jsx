import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { MDCTextField } from '@material/textfield/index';
import { MDCRipple } from '@material/ripple/index';

const TodoForm = ({ onSubmit }) => {
  const mdcTaskInput = useRef();
  const mdcSubmitButton = useRef();
  const taskInput = useRef();

  useEffect(() => {
    MDCTextField.attachTo(mdcTaskInput.current);
    MDCRipple.attachTo(mdcSubmitButton.current);
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (taskInput.current.value !== '') {
      onSubmit(taskInput.current.value);
      taskInput.current.value = '';
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h5 className="mdc-typography--headline5">Ajouter une tâche :</h5>
      <div className="mdc-text-field mdc-text-field--outlined" ref={mdcTaskInput}>
        <input id="taskInput" className="mdc-text-field__input" ref={taskInput} />
        <div className="mdc-notched-outline">
          <div className="mdc-notched-outline__leading" />
          <div className="mdc-notched-outline__notch">
            <label htmlFor="taskInput" className="mdc-floating-label">Tâche</label>
          </div>
          <div className="mdc-notched-outline__trailing" />
        </div>
      </div>
      <button className="mdc-button mdc-button--outlined todo-form__submit" type="submit" ref={mdcSubmitButton}>Ajouter</button>
    </form>
  );
};

TodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TodoForm;
