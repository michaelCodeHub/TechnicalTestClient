
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import {
  FlashMessagesModule,
  FlashMessagesService
} from "angular2-flash-messages";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";
import { PersonListComponent } from './person-list/person-list.component';
import { PersonSearchComponent } from './person-search/person-search.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PersonListComponent,
    PersonSearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule,
  ],
  providers: [FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
