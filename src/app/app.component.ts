import { Component, OnInit } from '@angular/core';
import { ToastService } from './app-service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit  {
  title = 'feedback';

  constructor(public toastService: ToastService,
    private toastr: ToastrService,
    ) 
  {}

  ngOnInit(): void {
    
    var header = document.getElementsByClassName("chart-scale");
    var btns = document.getElementsByClassName("btn-scale") as HTMLCollectionOf<HTMLElement>
    for (var i = 0; i<btns.length; i++){
      btns[i].addEventListener('click', function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
      });
    }

  }

  showSuccess() {
    this.toastr.success('Your Feedback submitted successfully 🤗');
  }

}
