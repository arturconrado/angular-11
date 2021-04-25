import { Component, OnInit } from '@angular/core';
import { CalculadoraService} from './service/calculadora.service';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;
  // injestao de dependencia
  constructor( private calculadoraService: CalculadoraService) {}

  ngOnInit() {
    this.limpar();
  }

  /**
   * Inicializa todos os operadores para o valor padrao
   *
   * @return void
   */
  limpar(): void{
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado =  null;
    this.operacao = null
  }

  /**
   * adiciona o numero selecionado para o calculo posteriormente
   *
   * @param string numero
   * @return void
   */

  adicionaNumero(numero: string): void{
    if(this.operacao == null){
      this.numero1 = this.concatenaNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenaNumero(this.numero2, numero);
    }
  }

  /**
   * retorna o valor concatenado. trata do separador condicional
   *
   * @param string numAtual
   * @param string numConcat
   * @return string
   */

  concatenaNumero(numAtual: string, numConcat: string): string {
    // caso contanha apenas '0' ou null, reinicie o valor
    if (numAtual === '0' || numAtual === null){
      numAtual = '';
    }
    // primeiro digito é '.', concatena '0' antes do ponto
    if (numConcat === '.' && numAtual === ''){
      return '0.';
    }
    // caso '.' digitado e ja contenha um '.', apenas retorna
    if(numConcat === '.' && numAtual.indexOf('.') > -1){
      return numAtual;
    }
    return numAtual + numConcat;
  }

  /**
   *  Executa logica quando um operado for selecionado.
   *  caso ja possua uma operacao selecionada, executas a operacao anterios e define uma nova
   */
  difinirOperacao(operacao: string): void {
  //apenas define a operacao caso nao exista uma
    if (this.operacao === null){
      this.operacao = operacao;
      return;
    }
    /* caso operacao definida e numero 2 selecionado, efetua o calculo da operacao */
    if (this.numero2 !== null){
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      );
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  /**
   * efetua o calculo de uma operacao
   *
   * @return void
   */

  calcular(): void{
    if (this.numero2 === null){
      return;
    }
    this.resultado = this.calculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    );
  }

  /**
   * retorna o valor a ser exibido na tela da calculadora.
   *
   * @return void
   */
  get display(): string{
    if (this.resultado !== null){
      return this.resultado.toString();
    }
    if (this.numero2 !== null){
      return this.numero2;
    }
    return this.numero1;
  }

}
