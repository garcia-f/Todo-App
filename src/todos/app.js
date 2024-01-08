import html from './app.html?raw';    // el ?raw es para indicar que necesito importar un archivo html
import todoStore from '../store/todo.store.js';
import { renderTodos } from './use-cases/render-todos.js';


const ElementIDs = {
  TodoList:     '.todo-list',
  NewTodoInput: '#new-todo-input',
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

  // Referencias HTML
  const newDescriptionInput = document.querySelector( ElementIDs.NewTodoInput );

  // Listeners     - cuando preciona y suelta la tecla
  newDescriptionInput.addEventListener('keyup', (event) => {
    if ( event.keyCode !== 13 ) return;
    if ( event.target.value.trim().length === 0 ) return;

    todoStore.addTodo( event.target.value );
    displayTodos();
    event.target.value = '';
  });

}

