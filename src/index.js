/*const element = document.createElement('h1');
element.innerHTML = 'Hello, platzi Badges!';

const container = document.querySelector('#app');

container.appendChild(element);*/

// -------- HACER ESO MISMO USANDO REACT ----------

//Siempre que quiera utilizar JSX es necesario importar react y react dom para manejar el dom

import React from 'react';
import ReactDOM from 'react-dom';

//JSX
const name = 'Alfredo Pastilla';
//pueden ingresarse tanto como varibles llamar funciones para obtener resultados, es decir expresiones
const jsx = <div>
    <h1>Hello my name is {name}</h1>
    <p>Soy ingeniero de sistemas</p>
</div>;

//CREATE ELEMENT (tipo de elemento, cuales son los atributos, children o inner text)
const element2 = React.createElement('a',{href:'https://google.com'}, 'Ir a google');

const container = document.querySelector('#app');
const container2 = document.querySelector('#app2');

//render pide dos parametros el primero es que elemento queremos mostrar y el segundo es donde queremos mostrarlo es decir en que parte de nuestro html

ReactDOM.render(jsx, container);
ReactDOM.render(element2, container2);


