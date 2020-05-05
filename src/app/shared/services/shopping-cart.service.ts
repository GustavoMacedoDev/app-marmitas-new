import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { CartItem } from '../models/cart-item.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  items: CartItem[] = [];

  constructor(private snackBar: MatSnackBar){}

  clear(){
    this.items = [];
  }

  addItem(item:MenuItem){
    let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id);
    if(foundItem){
      this.increaseQty(foundItem);
    }else{
      this.items.push(new CartItem(item));
    }
    let msg = "Você adicionou o item " + "  " + item.nome;
    this.snackBar.open(msg, "ADD", { duration: 3000 })
  }

  addItemMesa(itemMesa:MenuItem, mesa:any){
    console.log("mesa" + mesa);
    let foundItem = this.items.find((mItem)=> mItem.menuItem.id === itemMesa.id);
    if(foundItem){
      this.increaseQty(foundItem);
    }else{
      this.items.push(new CartItem(itemMesa));
    }
    let msg = "Você adicionou o item " + "  " + itemMesa.nome;
    this.snackBar.open(msg, "ADD", { duration: 3000 })
  }

  increaseQty(item: CartItem){
    item.quantidade = item.quantidade + 1;
  }

  decreaseQty(item: CartItem){
    item.quantidade = item.quantidade - 1;
    if (item.quantidade === 0){
      this.removeItem(item);
    }
  }

  removeItem(item:CartItem){
    this.items.splice(this.items.indexOf(item), 1)
    this.snackBar.open(`Você removeu o item ${item.menuItem.nome}`);
  }

  total(): number{
    return this.items
      .map(item => item.value())
      .reduce((prev, value)=> prev+value, 0)
  }
}
