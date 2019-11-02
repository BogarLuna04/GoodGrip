import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GripDerechoPage } from './grip-derecho.page';

const routes: Routes = [
  {
    path: '',
    component: GripDerechoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GripDerechoPage]
})
export class GripDerechoPageModule {}
