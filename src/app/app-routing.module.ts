import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemListComponent} from "./item-list/item-list.component";
import {AddItemComponent} from "./add-item/add-item.component";

const routes: Routes = [
  {
    path: "items",
    component: ItemListComponent
  },
  {
    path: "new/item",
    component: AddItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


