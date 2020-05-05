import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProdutoDto } from 'src/app/shared';
import { ProdutoService } from 'src/app/shared/services';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'src/app/shared/models/menu-item.model';

@Component({
  selector: 'app-lista-lanches-categoria',
  templateUrl: './lista-lanches-categoria.component.html',
  styleUrls: ['./lista-lanches-categoria.component.css']
})
export class ListaLanchesCategoriaComponent implements OnInit {

  produtos: ProdutoDto[];

  @Input() menuItem: MenuItem
  @Output() add = new EventEmitter()

  constructor(private produtoService: ProdutoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.produtoService.listaProdutosPorCategoria(this.route.snapshot.params['id'])
      .subscribe(res => this.produtos = res);
  }

  emitAddEvent(){
    this.add.emit(this.menuItem);
  }

  

}
