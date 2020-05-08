import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditpopupPageRoutingModule } from './editpopup-routing.module';

import { EditpopupPage } from './editpopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditpopupPageRoutingModule
  ],
  declarations: [EditpopupPage]
})
export class EditpopupPageModule {}
