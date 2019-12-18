import {Component} from '@angular/core';
import {FullScreenService} from '../../projects/x3-base-core/src/lib/services/full-screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(public fullScreenService: FullScreenService) {

  }

}
