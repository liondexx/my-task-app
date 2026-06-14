import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { CompletedComponent } from './pages/completed/completed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskDetailComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
