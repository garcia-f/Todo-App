import { Todo } from "../todos/models/todo.models.js";



const Filters = {
  All: 'all',
  Completed: 'Completed',
  Pending: 'Pending',
}

const state = {
  todos: [
    new Todo( 'Piedra del alma' ),
    new Todo( 'Piedra del espacio' ),
    new Todo( 'Piedra del tiempo' ),
    new Todo( 'Piedra del poder' ),
    new Todo( 'Piedra del realidad' ),
  ],
  filter: Filters.All,
}


const initStore = () => {
  loadStore();
  console.log('InitStore');
}

const loadStore = () => {
  if ( !localStorage.getItem('state') ) return;

  const { todos = [], filter = Filters.All } = JSON.parse( localStorage.getItem('state') );
  state.todos  = todos;
  state.filter = filter;
}

const saveStateToLocalStorage = () => {
  localStorage.setItem( 'state', JSON.stringify(state) );
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

  saveStateToLocalStorage();

}

/**
 * Actualizacion: para saber si esta terminado o no 
 * @param {String} todoId 
 */
const toggleTodo = ( todoId ) => {

  state.todos = state.todos.map( todo => {
    if ( todo.id === todoId ) {
      todo.done = !todo.done;
    }
    return todo;
  });

  saveStateToLocalStorage();

}

/**
 * Eliminar un Todo
 * @param {String} todoId 
 */
const deleteTodo = ( todoId ) => {
  state.todos = state.todos.filter( todo => todo.id !== todoId );   // crea un nuevo arreglo de todos sin tener en cuenta al todoId
  saveStateToLocalStorage();
}

/**
 * Para eliminar los Todo completados
 */
const deletedCompleted = () => {
  state.todos = state.todos.filter( todo => todo.done );   // crea un nuevo arreglo de todos, sin tener en cuenta los todo.done === true
  saveStateToLocalStorage();
}

/**
 * Para seleccionar un filtro
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
  state.filter = newFilter;
  saveStateToLocalStorage();
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








