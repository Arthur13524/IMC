function calcularconsumo() {
    var altura, peso, consumo;

    altura = document.getElementById('altura').value
    peso = document.getElementById('peso').value

    consumo = peso / (altura * altura)

 if(consumo <= 18.5) {
     document.getElementById('nome').textContent = consumo + " Você está abaixo do peso!"
 }
 else if((consumo > 18.5) && (consumo <= 24.9)) {
     document.getElementById('nome').textContent = consumo + " Você está no peso ideal!" 
 }
 else if((consumo > 24.9) && (consumo <= 29.9)) {
     document.getElementById('nome').textContent = consumo + " Você está ligeiramente acima do peso!" 
 }
 else if((consumo > 29.9) && (consumo <= 34.9)) {
     document.getElementById('nome').textContent = consumo + " Você está com obesidade grau I!" 
 }
 else if((consumo > 34.9) && (consumo <= 39.9)) {
     document.getElementById('nome').textContent = consumo + " Você está com obesidade grau II!" 
 }
 else {
     document.getElementById('nome').textContent = consumo + " Você está com obesidade grau III!" 
 }
}