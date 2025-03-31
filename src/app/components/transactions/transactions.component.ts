import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { State } from '../state/state';
import { ConsultasaldoService } from 'src/app/servicios/consultasaldo.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
  providers: [DatePipe]
})
export class TransactionsComponent implements OnInit {
  horaActual: string;
  fechaActual: string;
  saldoCuenta: any;
  tipoCuenta: any;
  nroCuenta: any;
  mostrarSaldo: boolean = false;

  constructor(private datePipe: DatePipe, public state: State, private consultasaldoService: ConsultasaldoService) {}

  ngOnInit(): void {
    this.actualizarFechaHora();
    setInterval(() => this.actualizarFechaHora(), 1000);
  }

  actualizarFechaHora(): void {
    const ahora = new Date();
    this.horaActual = this.datePipe.transform(ahora, 'HH:mm:ss');
    this.fechaActual = this.datePipe.transform(ahora, 'dd/MM/yyyy');
  }

  getSaldo():void{
    this.consultasaldoService.getSaldo().subscribe((data)=>{
      console.log(data);
      this.tipoCuenta = data.tipoCuenta;
      this.nroCuenta = data.numeroCuenta;
      this.saldoCuenta = data.saldo;
      this.mostrarSaldo = true;
    }
    );
  }
}
