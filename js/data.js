
let novaData = document.querySelector('.nova-data');


let data1 = new Date();
data1.setDate(data1.getDate());
let ano = data1.getFullYear();
let dia = data1.getDate(); if(dia<10){dia='0'+dia};
let mes = (data1.getMonth()+1); if(mes<10){mes='0'+mes};

novaData.innerHTML = (((`Você acessou meu currículo em ${dia}/${mes}/${ano}.`)));
