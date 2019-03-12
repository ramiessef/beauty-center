import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { BodyComponent } from './body/body.component';
import { ServicesComponent } from './services/services.component';
import { HaderComponent } from './hader/hader.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    BodyComponent,
    ServicesComponent,
    HaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


