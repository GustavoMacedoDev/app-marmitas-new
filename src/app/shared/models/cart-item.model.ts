import { MenuItem } from './menu-item.model';

export class CartItem {
    constructor(public menuItem: MenuItem,
                public quantidade: number = 1){}
  
    value(): number {
      return this.menuItem.preco * this.quantidade;
    }
  }