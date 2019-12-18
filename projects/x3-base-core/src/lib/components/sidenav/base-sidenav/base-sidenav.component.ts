import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'core-base-sidenav',
  templateUrl: './base-sidenav.component.html',
  styleUrls: ['./base-sidenav.component.scss'],
})
export class BaseSidenavComponent implements OnInit {

  @ViewChild('sidenav', {static: true})
  sidenav;

  constructor() {
  }

  ngOnInit() {
  }

  open() {
    this.sidenav.open();
  }

  close() {
    this.sidenav.close();
  }

  toggle() {
    this.sidenav.toggle();
  }

}
