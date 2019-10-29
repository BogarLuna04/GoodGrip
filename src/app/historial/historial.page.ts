import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  eventSource = [];

  calendar = {
    mode: 'month',
    currentDate: new Date()
  }

  constructor() { }

  ngOnInit() {
  }

  changeMode(mode){

  }

  next(){

  }

  back(){

  }
}
