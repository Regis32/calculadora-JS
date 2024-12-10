
// Função para adicionar números ou operadores à tela

function appendToDisplay(value) { //appendToDisplay(): Adiciona os números ou operadores à tela.
    document.getElementById('display').value += value;
}

// Função para limpar a tela

function clearDisplay(){ //clearDisplay(): Limpa o display.
    document.getElementById('display').value = '';
}

// Função para calcular o resultado

function calculateResult(){
    let display = document.getElementById('display').value;
    try{
        let result = eval(display); //Usa a função eval para calcular a expressão
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    } //calculateResult(): Avalia a expressão matemática na tela usando eval() e exibe o resultado. Caso haja um erro (como uma expressão inválida), ela mostra "Erro".
}