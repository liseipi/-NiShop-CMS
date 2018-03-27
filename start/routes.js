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
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.on('/login').render('auth.login')
Route.post('/login', 'AuthController.signIn')
Route.get('/logout', async ({auth, response})=>{
  await auth.logout()
  return response.redirect('/dashboard')
})

Route.group(()=>{

  Route.get('/', ({response})=>response.redirect('/dashboard'))
  Route.get('/dashboard', 'HomeController.dashboard')

  Route.get('/menu/add', 'MenuController.add')
  Route.post('/menu/add', 'MenuController.addSave').validator('menu')
  Route.get('/menu/list', 'MenuController.list')
  Route.get('/menu/edit/:id', 'MenuController.edit')
  Route.post('/menu/edit/:id', 'MenuController.editSave').validator('menu')
  Route.get('/menu/destroy/:id', 'MenuController.destroy')

  Route.get('/manager/add', 'ManagerController.add')
  Route.post('/manager/add', 'ManagerController.addSave').validator('manager')
  Route.get('/manager/list', 'ManagerController.list')
  Route.get('/manager/edit/:id', 'ManagerController.edit')
  Route.post('/manager/edit/:id', 'ManagerController.editSave').validator('manager_edit')

  Route.get('/role/add', 'RoleController.add')
  Route.post('/role/add', 'RoleController.addSave').validator('role')
  Route.get('/role/list', 'RoleController.list')
  Route.get('/role/edit/:id', 'RoleController.edit')
  Route.post('/role/edit/:id', 'RoleController.editSave').validator('role')
  Route.get('/role/destroy/:id', 'RoleController.destroy')

})//.middleware(['auth', 'role'])
