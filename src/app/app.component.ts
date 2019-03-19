import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo1= 'Bruno Morais';
  titulo2="Quem sou"
  titulo3="Lista de Displinas Cursada por Período"
  biografia="Sou acadêmico de sistema de informação no CEULP/ULBRA estou cursando o quinto período o desempenho uma vida acadêmica ativa, nas horas vagas gosto de ir a praia e ouvir músicas. Tenho interesse em assuntos como economia, negócios e política.";
  minhas_informacoes=[{"endereco":"Endereços","dados_pessoais":"Dados Pessoais","dados_profissionais":"Dados Profissionais"}];
  endereco=["Rua 04 Loteamento Eldorado - Luzimangues - Tocantins - Brasil","Email: bruno.1moraisbezerra@gmail.com"];
  dados_pessoais=["Nascido em 01-08-1998", "Sexo: Masculino", "Solteiro"];
  dados_profissionais=["Profissão: Estudante", 	"Universidade: CEULP/ULBRA", "Curso: Sistemas de informação", "Enteresses: Economia, Tecnologia e Política", "Empresa: Tribunal de Justiça do Tocantins","Cargo: Técnico N1" ]
  lista_de_disciplinas=[
  {"periodo":"1º Período","nome":["Algoritmos e Programação I ","Introduç,ão a computação","Fundamentos da matematica","Cultura Religiosa"]},
  { "periodo":"2º Período","nome":["Algoritmos II","Logica de Predicados","Fundamentos de Sistemas de Informação"]},
  { "periodo":"3º Período","nome":["Estruturas de Dados I","Banco de Dados I","Cálculo I","Linguagem de Programação Orientada a Objetos I","Engenharia de Software I "]},
  { "periodo":"4º Período","nome":["Estruturas de Dados II","Banco de Dados II","Linguagem de Programação Comercial I","Engenharia de Software II "]}];
}
