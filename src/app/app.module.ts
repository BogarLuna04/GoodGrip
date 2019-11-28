import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';
import {IonicModule, IonicRouteStrategy, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { Tab1PageModule } from './tab1/tab1.module';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { MenuComponent } from './menu/menu.component';
import { HoyComponent } from './hoy/hoy.component';
import { DiasJugadosComponent } from './dias-jugados/dias-jugados.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { RegistrosPage } from './registros/registros.page';
import { BLE } from '@ionic-native/ble/ngx';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    InicioSesionComponent,
    MenuComponent,
    HoyComponent,
    DiasJugadosComponent,
    TutorialComponent,
    RegistrosPage,
    
  ],
  entryComponents: [],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      Tab1PageModule,
      IonicStorageModule.forRoot(),

    ],
  providers: [
    StatusBar,
    SplashScreen,
    BLE,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
