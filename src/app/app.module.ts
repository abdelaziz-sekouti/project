import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ AppComponent, HomeComponent, NotFoundComponent ],
	imports: [ BrowserModule, FormsModule, RouterModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
