import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GripIzquierdoPage } from './grip-izquierdo.page';

const routes: Routes = [
  {
    path: '',
    component: GripIzquierdoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GripIzquierdoPage]
})
export class GripIzquierdoPageModule {}
