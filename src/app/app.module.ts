import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { Tab1PageModule } from './tab1/tab1.module';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { ConexionesComponent } from './conexiones/conexiones.component';
import { MenuComponent } from './menu/menu.component';
import { HoyComponent } from './hoy/hoy.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { DiasJugadosComponent } from './dias-jugados/dias-jugados.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { BLE } from '@ionic-native/ble/ngx';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    InicioSesionComponent,
    RegistroComponent,
    ConexionesComponent,
    MenuComponent,
    HoyComponent,
    EstadisticasComponent,
    DiasJugadosComponent,
    TutorialComponent,
  ],
  entryComponents: [],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      Tab1PageModule,
    ],
  providers: [
    BLE,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
