import { Component, OnInit } from '@angular/core';
import { PedidoDto } from 'src/app/shared';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import * as jspdf from 'jspdf';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pagamento } from 'src/app/shared/interfaces/pagamento.dto';
import { PagamentoService } from 'src/app/shared/services/pagamento.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl : './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class OrderConfirmationComponent implements OnInit {

  pedidosAbertos: PedidoDto[];
  pedidosFechados: PedidoDto[];
  pedido: PedidoDto;
  mesa: string = "mesa";
  pagamentos: Pagamento[];

  constructor(
              private pedidoService: PedidoService,
              private pagamentoService: PagamentoService,
              config: NgbModalConfig,
              private modalService: NgbModal
              ) {
                config.backdrop = 'static';
                config.keyboard = false;
               }

  open(content, id) {
    this.modalService.open(content);
    this.pagamentoService.findPagamentosByIdPedido(id).subscribe(res => this.pagamentos = res);
    
  }


  ngOnInit(): void {
    this.listarPedidos();
  }

  listarPedidos() {
    this.pedidoService.listarPedidosAtivosPorOpcao(2).subscribe(res => this.pedidosAbertos = res);
    this.pedidoService.listarPedidosInativosPorOpcao(2).subscribe(res => this.pedidosFechados = res);
  }

  listaPedido(id: number) {
    
  }

    geraPdf() {
    var doc = new jspdf();

    doc.text("123", 15, 15);
    
    doc.output("dataurlnewwindow");
  }
  

}
