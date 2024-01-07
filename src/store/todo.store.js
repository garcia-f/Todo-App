import { Todo } from "../todos/models/todo.models.js";



const Filters = {
  All: 'all',
  Completed: 'Completed',
  Pending: 'Pending',
}

const state = {
  todos: [
    new Todo( 'Piedra del alma' ),
    new Todo( 'Piedra del infinito' ),
    new Todo( 'Piedra del tiempo' ),
  ],
  filter: Filters.All,
}


const initStore = () => {

  console.log(state);
  console.log('InitStore');

}

const loadStore = () => {
  throw new Error('Not implemented');
}

const getTodos = ( filter = Filters.All ) => {

  switch ( filter ) {
    case Filters.All: 
      return [...state.todos];
    
    case Filters.Completed:
      return state.todos.filter( todo => todo.done );     // si todo.doen esta en true lo va a retornar
    
    case Filters.Pending:
      return state.todos.filter( todo => !todo.done );
    
    default:
      throw new Error(`Option ${ filter } is not valid.`);
  }

}


/**
 * Agregar un nuevo Todo 
 * @param {String} description 
 */
const addTodo = ( description ) => {

  if ( !description ) throw new Error('Description is required');
  state.todos.push( new Todo(description) );

}

/**
 * Actualizacion: para saber si esta terminado o no 
 * @param {String} todoId 
 */
const toggleTodo = ( todoId ) => {
  throw new Error('Not implemented');
}

/**
 * Eliminar un Todo
 * @param {String} todoId 
 */
const deleteTodo = ( todoId ) => {
  state.todos = state.todos.filter( todo => todo.id !== todoId );   // crea un nuevo arreglo de todos sin tener en cuenta al todoId
}

/**
 * Para eliminar los Todo completados
 */
const deletedCompleted = () => {
  state.todos = state.todos.filter( todo => todo.done );   // crea un nuevo arreglo de todos, sin tener en cuenta los todo.done === true
}

/**
 * Para seleccionar un filtro
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
  state.filter = newFilter;  
}

/**
 * Para saber cual es el filtro seleccionado
 */
const getCurrentFilter = () => {
  return state.filter;
}



export default {
  addTodo,
  deletedCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
}








