
let data = document.querySelector(".data");
let dia = new Date().getDate(); if(dia<10){dia='0'+dia};
let mes = new Date().getMonth() + 1; if(mes<10){mes='0'+mes};
let ano = new Date().getFullYear();
let dataAtual = ano+"_"+mes+"_"+(dia-1);
data.innerHTML += dataAtual;

let dataFormatada = document.querySelector(".dataFormatada");
let dataNova = (dia)+"/"+(+mes)+"/"+ano;
dataFormatada.innerHTML += dataNova;

let dataIndeferimento = document.querySelector(".dataIndeferimento");
let dataAtual1 = (dia-2)+"/"+mes+"/"+ano;
dataIndeferimento.innerHTML = (`INDEFERIDO REQUERIMENTO DE BAIXA.
DOCUMENTOS SOLICITADOS PARA CORREÇÃO DO PROCEDIMENTO DE BAIXA DE RT NÃO FORAM ENVIADOS NO PRAZO DE 01 
(UM) DIA ÚTIL DA RESPOSTA DO CRF-PR.
* DEVERÁ INICIAR NOVO REQUERIMENTO DE BAIXA DE RESPONSABILIDADE TÉCNICA, ANEXANDO TODOS OS DOCUMENTOS NECESSÁRIOS.
FAVOR CONSULTAR PASSO A PASSO NO LINK https://www.crf-pr.org.br/noticia/visualizar/46459

DATA DA SOLICITAÇÃO – ${dataAtual1}

MOTIVO DO INDEFERIMENTO:
– FALTOU QUEBRA DE VÍNCULO DE TRABALHO; (PÁGINA DA CTPS DO CONTRATO COM DATA DE SAÍDA E ASSINATURA DA 
EMPRESA OU RESCISÃO COM ASSINATURA DA EMPRESA E DO PROFISSIONAL);
– FALTOU DECLARAÇÃO DE BAIXA DA VIGILÂNCIA SANITÁRIA;
– FALTOU APRESENTAR A CTPS COM ANOTAÇÃO/DECLARAÇÃO DA TRANSFERÊNCIA, INDICANDO A DATA DA TRANSFERÊNCIA E O CNPJ 
PARA ONDE FOI TRANSFERIDO; (DOCUMENTO ASSINADO PELA EMPRESA)
PORÉM, PARA AMBOS É OBRIGATÓRIO SER ASSINADA PELA EMPRESA*
OU
- CASO AINDA NÃO POSSUA TODOS OS DOCUMENTOS, PODERÁ APRESENTAR  FORMULÁRIO DE REQUERIMENTO PREENCHIDO 
E ASSINADO *PELO REPRESENTANTE LEGAL E PELO PROFISSIONAL*
(MARCANDO TODOS OS DOCUMENTOS QUE FALTAM E O MOTIVO).
- FALTA ASSINATURA, DO REPRESENTANTE LEGAL, NO REQUERIMENTO DE BAIXA PARA BAIXAR SEM DOCUMENTOS;`);

  let input = document.querySelector('#data');
  let prazo = document.querySelector('.prazo');
  input.valueAsDate = new Date('0000-00-00');

  input.addEventListener('input', () => {
    let input1 = input.value.split("/");
    let hj1 = input1[2]+"-"+input1[1]+"-"+input1[0];
    let inputat = new Date(hj1);
    inputat.setDate(inputat.getDate());
    let myDate = new Date(hj1);
    myDate.setDate(myDate.getDate() + 30);
    let ano2 = myDate.getFullYear();
    let dia2 = myDate.getDate(); if(dia2<10){dia2='0'+dia2};
    let mes2 = (myDate.getMonth()+1); if(mes2<10){mes2='0'+mes2};
    prazo.innerHTML = (((`${dia2}/${mes2}/${ano2}`)));

  });  
