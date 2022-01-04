import { trigger, style, transition, animate } from '@angular/animations';

export const fadeInOut =  [
    trigger('simpleFadeAnimation', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('0.5s ease-in', style({
          opacity: 1
        }))
      ]),

      transition(':leave', [
        style({
          opacity: 1
        }),
        animate('0.5s ease-out', style({
          opacity: 0
        }))
      ]),
    ])
  ];
