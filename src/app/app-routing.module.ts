import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { DetalleRolesComponent } from './components/detalle-roles/roles-detalle.component';
import { DetalleUserComponent } from './components/detalle-user/user-detalle.component';
import { RolesComponent } from './components/roles/roles.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [{
  path: ' ',
  component: AppComponent
},
{
  path: 'user',
  component: UsersComponent,
  
  
},
{
  path: 'user/info/:id',
  component: DetalleUserComponent,
  
  
},
{
  path: 'rol',
  component: RolesComponent,
  
  
},
{
  path: 'rol/info/:id',
  component: DetalleRolesComponent,
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
