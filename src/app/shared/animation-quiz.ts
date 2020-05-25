import { trigger, transition, query, stagger, animateChild, style, animate } from '@angular/animations';

export class AnimationCollection {
    static readonly AnimationQuiz = [
        trigger('stagger', [
          transition(':increment', [
            query(':leave', stagger('.10ms', [animateChild()])),
            query(':enter', stagger('.1s', [animateChild()]))
          ])
        ]),
        trigger(
          'slideInRight',
          [
            transition(
              ':enter', [
                style({transform: 'translateX(100%)', opacity: 0}),
                animate('300ms', style({transform: 'translateX(0)', opacity: 1}))
              ]
            ),
            transition(
              ':leave', [
                style({display: 'none'}),
                animate('10ms', style({ opacity: 0}))
              ]
            )
          ])
      ];
}
