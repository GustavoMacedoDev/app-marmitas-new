import { Component, OnInit } from '@angular/core';
import { PedidoDto } from 'src/app/shared';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import * as jspdf from 'jspdf';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-confirmation',
  templateUrl : './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class OrderConfirmationComponent implements OnInit {

  pedidos: PedidoDto[];
  pedido: PedidoDto;
  mesa: string = "mesa";

  constructor(
              private pedidoService: PedidoService,
              config: NgbModalConfig,
              private modalService: NgbModal
              ) {
                config.backdrop = 'static';
                config.keyboard = false;
               }

  open(content) {
    this.modalService.open(content);
  }


  ngOnInit(): void {
    this.listarPedidos();
  }

  listarPedidos() {
    this.pedidoService.listarPedidosPorOpcao(2).subscribe(res => this.pedidos = res);
  }

  listaPedido(id: number) {
    
  }

    geraPdf() {
    var doc = new jspdf();

    doc.text("123", 15, 15);
    
    doc.output("dataurlnewwindow");
  }
  

}
