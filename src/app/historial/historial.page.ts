import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
  
})
export class HistorialPage implements OnInit {

  lista: Array<any> = [
    {
      titulo: "Viernes",
      description: "Nov-01-2019",
      redirectTo: "/lista-grips"
    },
    {
      titulo: "Miércoles",
      description: "Nov-06-2019",
      redirectTo: "/lista-grips"
    },
    {
      titulo: "Domingo",
      description: "Nov-10-2019",
      redirectTo: "/lista-grips"
    },
    {
      titulo: "Martes",
      description: "Nov-12-2019",
      redirectTo: "/lista-grips"
    },
    {
      titulo: "Miércoles",
      description: "Nov-13-2019",
      redirectTo: "/lista-grips"
    },
    {
      titulo: "Sábado",
      description: "Nov-16-2019",
      redirectTo: "/lista-grips"
    },
    {
      titulo: "Miércoles",
      description: "Nov-20-2019",
      redirectTo: "/lista-grips"
    },
    {
      titulo: "Jueves",
      description: "Nov-21-2019",
      redirectTo: "/lista-grips"
    },
    {
      titulo: "Domingo",
      description: "Nov-24-2019",
      redirectTo: "/lista-grips"
    },
    {
      titulo: "Miércoles",
      description: "Nov-27-2019",
      redirectTo: "/lista-grips"
    },
    {
      titulo: "Sábado",
      description: "Nov-30-2019",
      redirectTo: "/lista-grips"
    }
  ]

  @ViewChild(CalendarComponent,{static:false}) myCalendar:CalendarComponent;
  eventSource = [];

  event = {
    title: '',
    startTime: '',
    endTime: '',
    allDay: false
  };

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

