import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { switchMap, mergeMap, delay, concatMap, mapTo } from 'rxjs/operators';
import { of, from, timer, interval } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  constructor(
    ) {
  }
  ngOnInit() {

    from([1000, 4000, 1000]).pipe(
      mergeMap(data => timer(data)),
      mapTo('gola')
    ).subscribe(
      (data) => console.log(`${data}`)
    );
  }
}

  