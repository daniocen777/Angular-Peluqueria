import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { TranslateService } from "./services/translate.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TranslatePipe } from "./pipes/translate.pipe";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { HeaderComponent } from "./components/header/header.component";
import { AddBookingComponent } from "./components/add-booking/add-booking.component";

// PrimeNg
import { CalendarModule } from "primeng/calendar";
import { LoginComponent } from "./components/header/login/login.component";
import { ListBookingComponent } from './components/list-booking/list-booking.component';

export function translateFactory(provider: TranslateService) {
  return () => provider.getData();
}

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    HeaderComponent,
    AddBookingComponent,
    LoginComponent,
    ListBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TranslateService,
    // Se cargará el método getData() del servicio "TranslateService" al inicio del app
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps: [TranslateService],
      multi: true
    }
  ],
  // Componentes cargados dinámicamente
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
