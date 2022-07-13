import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './template/home/home.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {
    path: '',
    component:LayoutComponent,
    children:[
      {path: 'home', component:HomeComponent},
      {path: 'cliente', component:ClienteComponent}
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
