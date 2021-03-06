import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddBookingComponent } from "./components/add-booking/add-booking.component";
import { ListBookingComponent } from "./components/list-booking/list-booking.component";

const routes: Routes = [
  { path: "add-booking", component: AddBookingComponent },
  { path: "list-booking", component: ListBookingComponent },
  { path: "**", pathMatch: "full", redirectTo: "add-booking" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
