import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/shared/models/menu-item.model';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/shared/services';
import { Categoria } from 'src/app/shared/interfaces/categoria.dto';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { TaxaEntrega } from 'src/app/shared/interfaces/taxa-entrega.dto';
import { TaxaEntregaService } from 'src/app/shared/services/taxa-entrega.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;
  taxa: Observable<TaxaEntrega[]>;

  constructor(
              private produtoService: ProdutoService, 
              private route: ActivatedRoute,
              private taxaService: TaxaEntregaService
              ) { }

  ngOnInit() {
    this.menu = this.produtoService.listarProdutosEntrega();
    this.taxa = this.taxaService.listarTaxas();
  }

  addMenuItem(item: MenuItem){
    console.log(item);
  }

}
