import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { IonicModule } from '@ionic/angular';

import { NotificationsPage } from './notifications.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    DeviceDetectorModule.forRoot()
  ],
  declarations: [NotificationsPage]

})
export class NotificationsPageModule {}
