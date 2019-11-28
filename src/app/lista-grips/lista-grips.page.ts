import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-grips',
  templateUrl: './lista-grips.page.html',
  styleUrls: ['./lista-grips.page.scss'],
})
export class ListaGripsPage implements OnInit {

  lista: Array<any> = [
    {
      titulo: "Grip #1",
      description: "MALO",
      icon: "radio-button-on",
      color: "red",
      redirectTo: "/estadisticas"
    },
    {
      titulo: "Grip #2",
      description: "REGULAR",
      icon: "radio-button-on",
      color: "orange",
      redirectTo: "/estadisticas"
    },
    {
      titulo: "Grip #3",
      description: "EXCELENTE",
      icon: "radio-button-on",
      color: "green",
      redirectTo: "/estadisticas"
    },
    {
      titulo: "Grip #4",
      description: "REGULAR",
      icon: "radio-button-on",
      color: "orange",
      redirectTo: "/estadisticas"
    },
    {
      titulo: "Grip #5",
      description: "MALO",
      icon: "radio-button-on",
      color: "red",
      redirectTo: "/estadisticas"
    },
    {
      titulo: "Grip #6",
      description: "EXCELENTE",
      icon: "radio-button-on",
      color: "green",
      redirectTo: "/estadisticas"
    },
    {
      titulo: "Grip #7",
      description: "EXCELENTE",
      icon: "radio-button-on",
      color: "green",
      redirectTo: "/estadisticas"
    },
    {
      titulo: "Grip #8",
      description: "REGULAR",
      icon: "radio-button-on",
      color: "red",
      redirectTo: "/estadisticas"
    },
    {
      titulo: "Grip #9",
      description: "EXCELENTE",
      icon: "radio-button-on",
      color: "green",
      redirectTo: "/estadisticas"
    },
    {
      titulo: "Grip #10",
      description: "REGULAR",
      icon: "radio-button-on",
      color: "orange",
      redirectTo: "/estadisticas"
    },
    {
      titulo: "Grip #11",
      description: "EXCELENTE",
      icon: "radio-button-on",
      color: "green",
      redirectTo: "/estadisticas"
    },
    {
      titulo: "Grip #12",
      description: "EXCELENTE",
      icon: "radio-button-on",
      color: "green",
      redirectTo: "/estadisticas"
    },
    {
      titulo: "Grip #13",
      description: "MALO",
      icon: "radio-button-on",
      color: "red",
      redirectTo: "/estadisticas"
    },
    {
      titulo: "Grip #14",
      description: "EXCELENTE",
      icon: "radio-button-on",
      color: "green",
      redirectTo: "/estadisticas"
    },
    {
      titulo: "Grip #15",
      description: "EXCELENTE",
      icon: "radio-button-on",
      color: "green",
      redirectTo: "/estadisticas"
    },
    {
      titulo: "Grip #16",
      description: "EXCELENTE",
      icon: "radio-button-on",
      color: "green",
      redirectTo: "/estadisticas"
    },
    {
      titulo: "Grip #17",
      description: "EXCELENTE",
      icon: "radio-button-on",
      color: "green",
      redirectTo: "/estadisticas"
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}
