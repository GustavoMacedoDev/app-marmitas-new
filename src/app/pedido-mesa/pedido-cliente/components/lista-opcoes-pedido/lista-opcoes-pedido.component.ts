import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/shared/models/menu-item.model';
import { ProdutoService } from 'src/app/shared/services';

@Component({
  selector: 'app-lista-opcoes-pedido',
  templateUrl: './lista-opcoes-pedido.component.html',
  styleUrls: ['./lista-opcoes-pedido.component.css']
})
export class ListaOpcoesPedidoComponent implements OnInit {

  menu: Observable<MenuItem[]>;
  id;

  constructor(
              private router: Router,
              private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    console.log(this.id);
  }

  opcao(id) {
    this.router.navigate(['/opcao/'+ id]);

    return id;
  }

  pratos() {
    this.router.navigate(['/pratos']);
  }

}
