import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalculadoraComponent} from "../calculadora.component";
import {CalculadoraService} from "../service/calculadora.service";



@NgModule({
  declarations: [
    CalculadoraComponent

  ],
  imports: [
    CommonModule
  ],
  providers:[
    CalculadoraService
  ],
  exports: [
    CalculadoraComponent
  ]

})
export class CalculadoraModule { }
