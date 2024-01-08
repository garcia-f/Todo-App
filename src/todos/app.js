import html from './app.html?raw';    // el ?raw es para indicar que necesito importar un archivo html
import todoStore from '../store/todo.store.js';
import { renderTodos } from './use-cases/render-todos.js';


const ElementIDs = {
  TodoList: '.todo-list',
}


/**
 * 
 * @param {String} elementId 
 * @returns Retorna el html 
 */
export const App = ( elementId ) => {

  const displayTodos = () => {
    const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
    renderTodos( ElementIDs.TodoList, todos );
  }


  // funcion anonima autoinvocada
  ( () => {

    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append( app );
    displayTodos();

  })()

}

