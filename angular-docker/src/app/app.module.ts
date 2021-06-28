import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlabamaComponent } from './components/alabama/alabama.component';
import { SweetComponent } from './components/sweet/sweet.component';

@NgModule({
  declarations: [
    AppComponent,
    AlabamaComponent,
    SweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
