import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conexiones',
  templateUrl: './conexiones.component.html',
  styleUrls: ['./conexiones.component.scss'],
})
export class ConexionesComponent implements OnInit {

  public form = [
    { val: 'Guante', isChecked: true },
    { val: 'Guante2', isChecked: false },
    { val: 'Guante3', isChecked: false },
    { val: 'Guante4', isChecked: false },
    { val: 'Guante5', isChecked: false }

  ];
  ngOnInit() {}

}
