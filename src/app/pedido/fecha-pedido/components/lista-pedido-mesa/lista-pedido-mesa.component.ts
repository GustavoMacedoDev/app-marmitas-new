import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import { ActivatedRoute } from '@angular/router';
import { PedidoDto } from 'src/app/shared';
import * as jsPdf from  'jspdf';
import { ListaPedido } from 'src/app/shared/interfaces/lista-pedido.dto';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormaPagamentoService } from 'src/app/shared/services/forma-pagamento.service';
import { FormaPagamento } from 'src/app/shared/models/forma-pagamento.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Pagamento } from 'src/app/shared/interfaces/pagamento.dto';
import { MesaDto } from 'src/app/shared/interfaces/mesa.dto';
import { PagamentoService } from 'src/app/shared/services/pagamento.service';

@Component({
  selector: 'app-lista-pedido-mesa',
  templateUrl: './lista-pedido-mesa.component.html',
  styleUrls: ['./lista-pedido-mesa.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ListaPedidoMesaComponent implements OnInit {

  pedido: ListaPedido;
  dados: any;
  @ViewChild('content') content: ElementRef;
  formaPagamentos: FormaPagamento[];
  form: FormGroup;
  formaPagamento: any;
  trocoInput: number;
  totalInput: number;
  mesa: MesaDto;

  constructor(
              private pedidoService: PedidoService,
              private formaPagamentoService: FormaPagamentoService,
              private pagamentoService: PagamentoService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              config: NgbModalConfig, 
              private modalService: NgbModal
              ) { 
                config.backdrop = 'static';
                config.keyboard = false;
              }

  ngOnInit(): void {
    this.gerarForm();
    this.pedidoService.listaPedidoById(this.route.snapshot.params['id'])
    .subscribe(res => this.pedido = res);
    this.formaPagamentoService.listarFormasPagamento().subscribe(res => this.formaPagamentos = res);
  }

  gerarForm() {
    this.form = new FormGroup({
      fPagamento: this.formBuilder.control('', [Validators.required]),
      valorPago: this.formBuilder.control(''),
      troco: this.formBuilder.control('', [Validators.required]),
      total: this.formBuilder.control('')
    })
  }

  open(content) {
    this.modalService.open(content);
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

  salvar() {
    const pagamento: Pagamento = this.form.value;
    pagamento.mesa = this.pedido.mesa;
    console.log(pagamento);

    this.pagamentoService.salvaPagamento(pagamento).subscribe();
  }

}
