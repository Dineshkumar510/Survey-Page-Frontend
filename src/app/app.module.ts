import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ScrollProgressBarComponent } from './scroll-progress-bar/scroll-progress-bar.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';


@NgModule({
  declarations: [
    AppComponent,
    ScrollProgressBarComponent,
    ScrollToTopComponent
  ],
  imports: [
    MatProgressBarModule,
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    PopoverModule.forRoot(),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
