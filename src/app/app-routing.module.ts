import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { Tab1Page } from './tab1/tab1.page';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { ConexionesComponent } from './conexiones/conexiones.component';
import { MenuComponent } from './menu/menu.component';
import { HoyComponent } from './hoy/hoy.component';
import {HistorialComponent} from './historial/historial.component'
import { TutorialComponent } from './tutorial/tutorial.component';
 
const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {path:"login", component:BienvenidaComponent},
  {path:"tabs/tabs1", component:Tab1Page,},
  {path:"inicioSesion", component:InicioSesionComponent,},
  {path:"registro", component:RegistroComponent,},
  {path:"conexiones", component:ConexionesComponent,},
  {path:"menu", component:MenuComponent,},
  {path:"hoy", component:HoyComponent,},
  {path:"historial", component:HistorialComponent,},
  {path:"tutorial", component:TutorialComponent,},

  {path:'',redirectTo:"/login",  pathMatch: 'full'},
  { path: 'login1', loadChildren: './login/login.module#LoginPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
