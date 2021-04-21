import { Component, OnInit } from '@angular/core';
import { CalculadoraService} from "./service/calculadora.service";

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  //injestao de dependencia
  constructor( private calculadoraService: CalculadoraService) { }

  ngOnInit() {
  }

}
