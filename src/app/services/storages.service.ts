import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage'

export interface Item{
  id: number, // debria ser number
  title: string,
  value: string,
  modified: number
}
const ITEMS_KEYS = 'my-items'
@Injectable({
  providedIn: 'root'
})
export class StoragesService {
  [x: string]: any;

  constructor(private storage: Storage) { }
  addItem( item: Item): Promise<any>{
    return this.storage.get(ITEMS_KEYS).then((items:Item[])=>{
      if(items){
        items.push(item)
        return this.storage.set(ITEMS_KEYS, items);
      }
      else{
        return this.storage.set(ITEMS_KEYS, [item]);
      }
    }); 
  }
  getItem(): Promise<Item[]>{
    return this.storage.get(ITEMS_KEYS);
  } 
  updateItem( item: Item):Promise<any>{
    return this.storage.get(ITEMS_KEYS).then((items:Item[])=>{
      if(!items|| items.length===0 ){
        return null;
      }
      let newItems: Item[]=[];
      for( let i of items){
        if(i.id===item.id){
          newItems.push(item);
        }
        else{
          newItems.push(i);
        }
      }
      return this.storage.set(ITEMS_KEYS, newItems);
    }); 
  }
  delateItem( id: number /**deberia ser number */): Promise<Item>{
    return this.storage.get(ITEMS_KEYS).then((items:Item[])=>{
      if (!items || items.length ===0){
        return null;
      }
      let toKeep: Item[]=[];
        
      for(let i of items){
        if( i.id !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEYS,toKeep);
    });

  }
}
