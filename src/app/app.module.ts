import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule} from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyB58aIqQLA0Pw3HZpt_GcNFz3bgwwLBrbw',
      libraries:['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
