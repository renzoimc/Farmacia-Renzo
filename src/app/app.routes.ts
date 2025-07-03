import { RedirectCommand, Routes } from '@angular/router';
import { CatalogoPrincipal } from './pages/catalogo/catalogo-principal/catalogo-principal';
import { CarritoPrincipal } from './pages/carrito/carrito-principal/carrito-principal';
import { Nosotros } from './pages/nosotros/nosotros';
import { Contacto } from './pages/contacto/contacto';
import { Pago } from './pages/pago/pago';
import { Login } from './pages/auth/login/login';

export const routes: Routes = [
    { path:'' , component: CatalogoPrincipal },
    {path:'carrito' , component: CarritoPrincipal},
    {path:'productos', component:CatalogoPrincipal},
    {path:'nosotros', component:Nosotros},
    {path:'contacto', component:Contacto},
    {path:'pago', component:Pago},
    {path:'login', component:Login}
];
