import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './alert/alert.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CrearoperacionesComponent } from './crearoperaciones/crearoperaciones.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AlertComponent,
    HeroComponent,
    HomeComponent,
    LoginComponent,    
    MenuComponent,
    TransactionsComponent,
    CrearoperacionesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule   
  ],
  exports: [
    HeaderComponent,
    AlertComponent,
    HeroComponent,    
  ]
})
export class ComponentsModule { }
