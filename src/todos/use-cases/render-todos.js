import { createTodoHTML } from "./create-todo-html.js";
import { Todo } from "../models/todo.models.js";


/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = ( elementId, todos = [] ) => {

  // TODO: referencia
  const element = document.querySelector( elementId );

  todos.forEach( todo => {
    element.append( createTodoHTML( todo ) );
  });

}