/*CALCULO DESCONTO INSS 2020
1045,00 = 7,5%
1045,01 a 2089,60 = 9%
2089,61 a 3134,40 = 12%
3134,41 a 6101,06 = 14%*/



var capturando = ''


function capturar(){
	capturando = document.querySelector('#digiteSalario').value;
	document.getElementById('valor').innerHTML = capturando;
}

var pegaSalario = document.querySelector('#digiteSalario');
var button = document.querySelector('#confirmar');

faixa1 = 78.37
faixa2 = 94.01
faixa3 = 125.37
faixa4 = 415.33

salario = document.querySelector('#valor');
	function salario(){
/* realiza cálculo de 7,5%*/
		if(salario <= 1045.00){
			salario = (salario * 0.075)
		}/* realiza cálculo de 9% e soma a faixa 1*/
			else if(salario >= 1045.01 && salario <= 2089.60){
					salario = ((salario - 1045.01) * 0.09) + faixa1
			}	/* realiza cálculo de 12% e soma a faixa 1 e 2*/
				else if(salario >= 2089.61 && salario <= 3134.40){
						salario = ((salario - 2089.61) * 0.12) + faixa1 + faixa2
				}	/* realiza cálculo de 14% e soma a faixa 1, 2 e 3*/	
					else if(salario >= 3134.41){
							salario = ((salario - 3134.41) * 0.14) + faixa1 + faixa2 + faixa3
					}
		console.log(salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})); //Converte para moeda Real Brasil*/
}