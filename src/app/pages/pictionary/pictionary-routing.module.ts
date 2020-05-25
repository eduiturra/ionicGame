import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PictionaryPage } from './pictionary.page';

const routes: Routes = [
  {
    path: '',
    component: PictionaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PictionaryPageRoutingModule {}
