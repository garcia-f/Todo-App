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

/**
 * Agregar un nuevo Todo 
 * @param {String} description 
 */
const addTodo = ( description ) => {
  throw new Error('Not implemented');
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
  throw new Error('Not implemented');
}

/**
 * Para eliminar los Todo completados
 */
const deletedCompleted = () => {
  throw new Error('NOt implemented');
}

/**
 * Para seleccionar un filtro
 * @param {Object} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
  throw new Error('NOt implemented');  
}

/**
 * Para saber cual es el filtro seleccionado
 */
const getCurrentFilter = () => {
  throw new Error('NOt implemented');
}



export default {
  addTodo,
  deletedCompleted,
  deleteTodo,
  getCurrentFilter,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
}








