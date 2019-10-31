import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
  
})
export class HistorialPage implements OnInit {

  eventSource = [];

  calendar = {
    mode: 'month',
    currentDate: new Date(),
    formatMonthTitle: 'MMMM \'de\' yyyy'
  }

  viewTitle = '';

  constructor() { }

  ngOnInit() {
  }

  changeMode(mode){
    this.calendar.mode = mode;
  }

  next(){
    var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slideNext();
  }

  back(){
    var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slidePrev();
  }

  onViewTitleChanged(title){
    this.viewTitle = title;
  }

}

