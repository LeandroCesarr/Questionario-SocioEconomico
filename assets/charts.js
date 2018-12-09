var ctx1  = document.getElementsByClassName("idade");
var ctx2  = document.getElementsByClassName("sexo");
var ctx3  = document.getElementsByClassName("corRaca");
var ctx4  = document.getElementsByClassName("religion");
var ctx5  = document.getElementsByClassName("estadoCivil");
var ctx6  = document.getElementsByClassName("yasuo");
var ctx7  = document.getElementsByClassName("filhos");
var ctx8  = document.getElementsByClassName("jobs");
var ctx9  = document.getElementsByClassName("periodoTrabalho");
var ctx10 = document.getElementsByClassName("estado");
var ctx11 = document.getElementsByClassName("municipio");
var ctx12 = document.getElementsByClassName("domicilio");
var ctx13 = document.getElementsByClassName("tempoMoradia");
var ctx14 = document.getElementsByClassName("comQuemMora");
var ctx15 = document.getElementsByClassName("pessoasFamilia");
var ctx16 = document.getElementsByClassName("atividadeRemunerada");
var ctx17 = document.getElementsByClassName("pcsCasa");
var ctx18 = document.getElementsByClassName("locomocao");
var ctx19 = document.getElementsByClassName("rendaFamiliar");
var ctx20 = document.getElementsByClassName("periodoEstudo");
var ctx21 = document.getElementsByClassName("escolaridade");
var ctx22 = document.getElementsByClassName("informatica");
var ctx23 = document.getElementsByClassName("informaticaTipos");
var ctx24 = document.getElementsByClassName("idioma");
var ctx25 = document.getElementsByClassName("jaEstudoufatec");

var chartGraph1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ["Até 20 anos", "De 21 a 30 anos", "De 31 a 40", "Acima de 40"],
        datasets: 
            [{
                label: "Taxa",
                data: [53,33,9,5],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
}); 

var chartGraph2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ["Masculino", "Feminino"],
        datasets: 
            [{
                label: "Taxa",
                data: [81, 19],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
}); 

var chartGraph3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ["Branco", "Pardo", "Amarelo", "Preto", "Indigena", "Nao declarado"],
        datasets: 
            [{
                label: "Taxa",
                data: [71, 21, 2, 5, 0, 2],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph4 = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: ["Católico", "Evangélico", "Espirita", "Budista", "Umbanda", "Candomblé", "Agnostico", "Ateu", "Outros"],
        datasets: 
            [{
                label: "Taxa",
                data: [47, 16, 2, 0, 0, 0, 14, 16, 7],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph5 = new Chart(ctx5, {
    type: 'doughnut',
    data: {
        labels: ["Solteiro" , "Casado", "Outros"],
        datasets: 
            [{
                label: "Taxa",
                data: [83, 15, 2],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph6 = new Chart(ctx6, {
    type: 'doughnut',
    data: {
        labels: ["Sim" , "Não"],
        datasets: 
            [{
                label: "Taxa",
                data: [2, 98],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph7 = new Chart(ctx7, {
    type: 'doughnut',
    data: {
        labels: ["Um" , "Dois", "Três", "Não"],
        datasets: 
            [{
                label: "Taxa",
                data: [5, 3, 2, 90],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph8 = new Chart(ctx8, {
    type: 'doughnut',
    data: {
        labels: ["Area" , "Fora", "Desempregado", "Nunca"],
        datasets: 
            [{
                label: "Taxa",
                data: [17, 41, 22, 20],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph9 = new Chart(ctx9, {
    type: 'doughnut',
    data: {
        labels: ["Manhã ou Tarde" , "Manhã e Tarde", "Noite", "Regime"],
        datasets: 
            [{
                label: "Taxa",
                data: [24, 64, 6, 6],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph10 = new Chart(ctx10, {
    type: 'doughnut',
    data: {
        labels: ["SP", "MG"],
        datasets: 
            [{
                label: "Taxa",
                data: [98, 2],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph11 = new Chart(ctx11, {
    type: 'doughnut',
    data: {
        labels: ["Franca", "Restinga", "Ipuã", "Outras"],
        datasets: 
            [{
                label: "Taxa",
                data: [88, 7, 2, 3],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph12 = new Chart(ctx12, {
    type: 'doughnut',
    data: {
        labels: ["Próprio", "Alugado", "Cedido", "Financiado", "Arrendado"],
        datasets: 
            [{
                label: "Taxa",
                data: [75, 5, 10, 10, 0],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph13 = new Chart(ctx13, {
    type: 'doughnut',
    data: {
        labels: ["Um a cinco", "Cinco a dez", "Dez a quinze", "Quinze a vinte", "Mais de vinte"],
        datasets: 
            [{
                label: "Taxa",
                data: [34, 12, 16, 24, 14],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph14 = new Chart(ctx14, {
    type: 'doughnut',
    data: {
        labels: ["Parentes", "Familia do companheiro", "Companheiro", "Abrigo", "Outros"],
        datasets: 
            [{
                label: "Taxa",
                data: [81, 5, 12, 0, 2],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph15 = new Chart(ctx15, {
    type: 'doughnut',
    data: {
        labels: ["De um a três", "De quatro a seis", "Mais que seis"],
        datasets: 
            [{
                label: "Taxa",
                data: [40, 55, 5],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph16 = new Chart(ctx16, {
    type: 'doughnut',
    data: {
        labels: ["Uma", "Duas", "Três", "Quatro", "Cinco", "Mais"],
        datasets: 
            [{
                label: "Taxa",
                data: [26, 47, 22, 5, 0, 0],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph17 = new Chart(ctx17, {
    type: 'doughnut',
    data: {
        labels: ["Um", "Dois", "Três ou mais"],
        datasets: 
            [{
                label: "Taxa",
                data: [38, 34, 28],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph18 = new Chart(ctx18, {
    type: 'doughnut',
    data: {
        labels: ["Ônibus", "Carro", "Moto", "Outros"],
        datasets: 
            [{
                label: "Taxa",
                data: [26, 36, 22, 16],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph19 = new Chart(ctx19, {
    type: 'doughnut',
    data: {
        labels: ["Um", "Dois", "Três", "Quatro", "Cinco", "Mais"],
        datasets: 
            [{
                label: "Taxa",
                data: [3, 19, 34, 19, 7, 17],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph20 = new Chart(ctx20, {
    type: 'doughnut',
    data: {
        labels: ["Manhã", "Noturno"],
        datasets: 
            [{
                label: "Taxa",
                data: [47, 53],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph21 = new Chart(ctx21, {
    type: 'doughnut',
    data: {
        labels: ["Publica", "Particular", "Maior parte em publica", "Maior parte em particular"],
        datasets: 
            [{
                label: "Taxa",
                data: [78, 7, 12, 3],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph22 = new Chart(ctx22, {
    type: 'doughnut',
    data: {
        labels: ["Sim", "Não"],
        datasets: 
            [{
                label: "Taxa",
                data: [97, 3],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph23 = new Chart(ctx23, {
    type: 'doughnut',
    data: {
        labels: ["Excel", "Windows", "Word", "Outros", "Excel, Windows, Word, Outros", "Excel, Windows, Word", "Windows, Word", "Excel, Windows", "Excel, Word, Outros", "Excel, Word", "Em branco", "Inválido"],
        datasets: 
            [{
                label: "Taxa",
                data: [2, 3, 2, 2, 67, 10, 0, 3, 2, 2, 3, 3,],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970", "#0000CD", "#DEB887", "#BC8F8F"],
            }],
    }
});

var chartGraph24 = new Chart(ctx24, {
    type: 'doughnut',
    data: {
        labels: ["Inglês", "Espanhol", "Inglês e Espanhol", "Inglês e Italiano", "Inglês e Alemão", "Não"],
        datasets: 
            [{
                label: "Taxa",
                data: [29, 5, 7, 2, 2, 55],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});

var chartGraph25 = new Chart(ctx25, {
    type: 'doughnut',
    data: {
        labels: ["Sim", "Não"],
        datasets: 
            [{
                label: "Taxa",
                data: [3, 97],
                backgroundColor: ["#00BFFF", "#F08080", "#32CD32", "#FF6347", "#FF1493", "#FF4500", "#00FA9A", "#191970"],
            }],
    }
});
