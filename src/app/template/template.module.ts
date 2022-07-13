import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    FooterComponent,
  
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    HomeComponent,
    FooterComponent,
 
  ]
})
export class TemplateModule { }
