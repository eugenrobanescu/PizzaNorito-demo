import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ContactComponent } from './body/contact/contact.component';
import { HomeComponent } from './body/home/home.component';
import { FoodTemplateComponent } from './body/food/food-template/food-template.component';
import { FoodComponent } from './body/food/food.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './body/about/about.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartComponent } from './body/cart/cart.component';
import { FinalizareComandaComponent } from './finalizare-comanda/finalizare-comanda.component'; // <-- import the module

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,

    ContactComponent,
    HomeComponent,
    FoodTemplateComponent,
    FoodComponent,
    FooterComponent,
    AboutComponent,
    CartComponent,
    FinalizareComandaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
