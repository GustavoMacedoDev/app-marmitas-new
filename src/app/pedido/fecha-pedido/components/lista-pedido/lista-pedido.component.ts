import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PedidoDto } from 'src/app/shared';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import * as jsPdf from  'jspdf';
import { ActivatedRoute } from '@angular/router';
import { ListaPedido } from 'src/app/shared/interfaces/lista-pedido.dto';
@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.css']
})
export class ListaPedidoComponent implements OnInit {

  pedido: ListaPedido;
  dados: any;
  @ViewChild('content') content: ElementRef;

  constructor(
              private pedidoService: PedidoService,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.pedidoService.listaPedidoById(this.route.snapshot.params['id'])
    .subscribe(res => this.pedido = res);
  }

  imprimir(){
    let doc = new jsPdf();

    let specialElementHandlers = {
      '#editor': function(element, renderer) {
        return true;
      } 
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 5, 5, {
      'width': 70,
      'elementHandlers': specialElementHandlers
    });

    doc.output('dataurlnewwindow');
  }


}
