import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditpopupPage } from './editpopup.page';

const routes: Routes = [
  {
    path: '',
    component: EditpopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditpopupPageRoutingModule {}
