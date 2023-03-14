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
}