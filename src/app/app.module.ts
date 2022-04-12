import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrossComponent } from './cross/cross.component';
import { CircleComponent } from './circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    CrossComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
