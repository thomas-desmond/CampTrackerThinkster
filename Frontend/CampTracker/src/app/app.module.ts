import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CampListComponent } from './camp-list/camp-list.component';
import { AddUpdateCampComponent } from './add-update-camp/add-update-camp.component';
import { HttpClientModule } from '@angular/common/http';
import { CampService } from './camp.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CampListComponent,
    AddUpdateCampComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CampService],
  bootstrap: [AppComponent]
})
export class AppModule { }
