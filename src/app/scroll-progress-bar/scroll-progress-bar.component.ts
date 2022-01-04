import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from "@angular/core";
import { fromEvent} from "rxjs";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "app-scroll-progress-bar",
  templateUrl: "./scroll-progress-bar.component.html",
  styleUrls: ["./scroll-progress-bar.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class ScrollProgressBarComponent implements OnInit {
  @Output() progressValue = new EventEmitter();
  progressValue$: any;

  constructor() {}

  ngOnInit() {
    this.getprogressValue();
  }

  getprogressValue() {
    this.progressValue$ = fromEvent(window, "scroll").pipe(
      map(() => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        return Math.round((winScroll / height) * 100);
      }),
      tap((v:any) => this.progressValue.emit(v))
    );
  }
}
