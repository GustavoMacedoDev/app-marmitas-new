import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MesaService } from 'src/app/shared/services/mesa.service';
import { MesaDto } from 'src/app/shared/interfaces/mesa.dto';
import { ProdutoDto } from 'src/app/shared';
import { ProdutoService, ShoppingCartService } from 'src/app/shared/services';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-lancamento-mesa',
  templateUrl: './lancamento-mesa.component.html',
  styleUrls: ['./lancamento-mesa.component.css'],
  animations: [
    trigger('row', [
      state('ready', style({opacity: 1})),
      transition('void => ready', animate('300ms 0s ease-in', keyframes([
        style({opacity:0, transform: 'translateX(-30px)', offset:0}),
        style({opacity:0.8, transform: 'translateX(10px)', offset:0.8}),
        style({opacity:1, transform: 'translateX(0px)', offset:1})
      ]))),
      transition('ready => void', animate('300ms 0s ease-out', keyframes([
        style({opacity:1, transform: 'translateX(0px)', offset:0}),
        style({opacity:0.8, transform: 'translateX(-10px)', offset:0.2}),
        style({opacity:0, transform: 'translateX(30px)', offset:1})
      ])))
    ])
  ]
})
export class LancamentoMesaComponent implements OnInit {

  id: string;
  mesa: MesaDto;
  produtos: ProdutoDto[];
  rowState = 'ready';

  constructor(
              private route: ActivatedRoute,
              private mesaService: MesaService,
              private produtoService: ProdutoService,
              private shoppingCartService: ShoppingCartService
              ) { }

  ngOnInit(): void {
    this.id  = this.route.snapshot.params['id'];
    this.buscaMesaPorId();
    this.buscaProdutos();
  }

  buscaMesaPorId() {
    this.mesaService.buscaMesaPorId(this.id)
      .subscribe(res => this.mesa = res);
    
  }

  buscaProdutos() {
    return this.produtoService.listarProdutosQuiosque().subscribe(res => this.produtos = res);
  }

  addItem(produto: any, mesa: any){
    this.shoppingCartService.addItemMesa(produto, mesa);
  }

  items(): any[] {
    return this.shoppingCartService.items;
  }

  clear(){
    this.shoppingCartService.clear()
  }

  removeItem(item: any){
    this.shoppingCartService.removeItem(item)
  }

 // addItem(item: any){
  //  this.shoppingCartService.addItem(item)
 // }

  total(): number {
    return this.shoppingCartService.total();
  }

}
