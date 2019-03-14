import uuid from 'uuid/v4';
import { ADD_TODO, TOGGLE_TODO } from './actionType';

export const addTodo = task => ({
  type: ADD_TODO,
  id: uuid(),
  task,
});


export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});
