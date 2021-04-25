import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';
import {inject} from '@angular/core';

describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[CalculadoraService]
  }));
  //TODO TERMINAR AULA DE TESTE E CONTINUAR O CURSO
  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });
  it('should sum to eqaul 2+3 = 5', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    const soma = service.calcular(2, 3, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  });

  it('should subtraction to eqaul 1-7 = -6', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    const subtracao = service.calcular(1, 7, CalculadoraService.SUBTRACAO);
    expect(subtracao).toEqual(-6);
  });

  it('should sum to eqaul 2/4 = 0.5', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    const divisao = service.calcular(2, 4, CalculadoraService.DIVISAO);
    expect(divisao).toEqual(0.5);
  });
  it('should  multiplication to equal 9*5 = 45', () => {
  const service: CalculadoraService = TestBed.get(CalculadoraService);
  const multiplicacao = service.calcular(9, 5, CalculadoraService.MULTIPLICACAO);
  expect(multiplicacao).toEqual(45);
  });

  it('should invalid operation', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    const invalid = service.calcular(1, 4, '%');
    expect(invalid).toEqual(0);
  });
});
