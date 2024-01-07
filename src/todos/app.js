import html from './app.html?raw';    // el ?raw es para indicar que necesito importar un archivo html


/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

  // funcion anonima autoinvocada
  ( () => {

    const app = document.createElement('div');
    app.innerHTML = html;
    document.querySelector(elementId).append( app );

  })()

}

