import { Component, OnInit, ViewChild } from '@angular/core';
import { fadeInOut } from "./animations/animation";

import { ToastService } from './app-service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOut]
  
})
export class AppComponent implements OnInit  {
  @ViewChild("toTopBtn") private toTopBtn: any;

  
  box: any;
  name = "Angular";
  progressValue = 0;
  isShow:boolean = true;
  title = 'feedback';
  className: string | undefined;
  window: any;
  activeButton: any

  constructor(public toastService: ToastService,
    private toastr: ToastrService,
    ) 
  {}


  ngOnInit(): void {

  }

  
  showPhase(event: any){
    this.activeButton = event;
  }


  showSuccess() {
    this.toastr.success('Your Feedback submitted successfully 🤗');
  }


  getProgressValue(v : any) {
    this.progressValue = v;
  }

  
  
 
}
