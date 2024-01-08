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
  const todoListUL          = document.querySelector( ElementIDs.TodoList );

  // Listeners 
  // agrega una nueva tarea 
  newDescriptionInput.addEventListener('keyup', (event) => {    // cuando preciona y suelta la tecla
    if ( event.keyCode !== 13 ) return;
    if ( event.target.value.trim().length === 0 ) return;       // borra los espacios al principio y al final

    todoStore.addTodo( event.target.value );
    displayTodos();
    event.target.value = '';
  });

  // marcar finalizada una tarea
  todoListUL.addEventListener( 'click', ( event ) => {
    const element = event.target.closest('[data-id]');   // busca en el elemento padre la clase data-id  
    todoStore.toggleTodo( element.getAttribute('data-id') );
    displayTodos();
  });

  // borrar una tarea
  todoListUL.addEventListener( 'click', ( event ) => {
    const isDistroyElement = event.target.className === 'destroy';
    const element = event.target.closest('[data-id]');
    if ( !element || !isDistroyElement ) return;

    todoStore.deleteTodo( element.getAttribute('data-id') );
    displayTodos();
  });
}

