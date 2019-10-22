import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public form = [
    { val: 'Datos del jugador', isChecked: true },
    { val: 'Conexiones', isChecked: false },
    { val: 'Historial', isChecked: false },
    { val: 'Tutorial', isChecked: false },
    { val: 'Nuevo juego', isChecked: false }

  ];
  constructor() { }

  ngOnInit() {}

}
