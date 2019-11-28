import { Component, ViewChild } from '@angular/core';
import { Item, StoragesService } from '../services/storages.service';
import { Platform, ToastController } from '@ionic/angular';
import { List } from 'ionic-angular';

@Component({
  selector: 'app-lista-grips',
  templateUrl: './lista-grips.page.html',
  styleUrls: ['./lista-grips.page.scss'],
})
export class ListaGripsPage{
  
  items:Item[]=[];
  newItem: Item = <Item>{};


  @ViewChild('mylist', { static: true }) mylist: List;

  constructor(private storageService: StoragesService, private plt: Platform, private toastController: ToastController) { 
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }

  addItem(){
    this.newItem.modified=Date.now();
    this.newItem.id=Date.now();
 
    this.storageService.addItem(this.newItem).then(item=>{
      this.newItem =<Item>{};
      this.loadItems();
    });
  }

  loadItems(){
    this.storageService.getItem().then(items=>{
      this.items= items;
    });
  }

  updateItem(item:Item){
    item.title= 'UPDATED: ${item.title}';
    item.modified = Date.now();

    this.storageService.updateItem(item).then(item=> {
      this.showToast('Tiro actualizado');
      this.mylist.closeSlidingItems();
      this.loadItems();
    });  }

    deleteItem(item:Item){
      this.storageService.delateItem(item.id).then(item => {
        this.showToast('Tiro eliminado');
        this.loadItems();
      });
    }

    async showToast(msg){
      const toast = await this.toastController.create({
        message: msg, 
        duration:2000
      });
      toast.present();
    } 


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

}

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}
