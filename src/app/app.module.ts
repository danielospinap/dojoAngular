import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//material
import { MaterialModule } from './material.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';




import { ReactiveFormsModule } from '@angular/forms';
import {GithubService  } from './services/github.service';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,

  ],
  imports: [
    MaterialModule,
    BrowserModule,
		FormsModule,
    BrowserAnimationsModule,
    HttpModule

  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
