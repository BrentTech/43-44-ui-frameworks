'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
//const Controller = require('@adonis/controller');
// console.log(Controller.count.val);
// let count = Controller.count.val;
let count = 0;

Route.on('/').render('index');
// Route.post('/increment', Controller.increment);

 Route.post('/increment', ({view}) => {
  count++;
  return view.render('counter', {count});
 });
 Route.post('/decrement', ({view}) => {
  count--;
  return view.render('counter', {count});
 });

// Route.post('/increment')
Route.on('/counter').render('counter', {count});

