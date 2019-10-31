import { Component, OnInit, NgZone} from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';

@Component({
  selector: 'app-conexiones',
  templateUrl: './conexiones.page.html',
  styleUrls: ['./conexiones.page.scss'],
})
export class ConexionesPage implements OnInit {

  public form = [
    { val: 'Guante', isChecked: true },
    { val: 'Guante2', isChecked: false },
    { val: 'Guante3', isChecked: false },
    { val: 'Guante4', isChecked: false },
    { val: 'Guante5', isChecked: false }

  ];

  ngOnInit() {
  }
  devices:any[] = [];

  constructor(private ble: BLE, private ngZone: NgZone) { }
  Scan(){
        this.devices = [];
        this.ble.scan([],15).subscribe(
          device => this.onDeviceDiscovered(device)
        );
      }
      onDeviceDiscovered(device){
        console.log('Discovered' + JSON.stringify(device,null,2));
        this.ngZone.run(()=>{
          this.devices.push(device)
          console.log(device)
        })
      }
}
