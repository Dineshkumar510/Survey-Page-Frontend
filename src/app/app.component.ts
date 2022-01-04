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

  name = "Angular";
  progressValue = 0;
  isShow:boolean = true;
  title = 'feedback';
  className: string | undefined;
  window: any;

  constructor(public toastService: ToastService,
    private toastr: ToastrService,
    ) 
  {}

  ngOnInit(): void {
    

    window.onscroll = () => {
      this.myFunction();
    }

    
    var header = document.getElementsByClassName("chart-scale");
    var btns = document.getElementsByClassName("btn-scale");
    for (var i = 0; i<btns.length; i++){
      btns[i].addEventListener('click', () => {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
      });
    }

  }

  myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar")!.style.width = scrolled + "%";
  }


  showSuccess() {
    this.toastr.success('Your Feedback submitted successfully 🤗');
  }


  getProgressValue(v : any) {
    this.progressValue = v;
  }

 
}
