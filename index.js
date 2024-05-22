// Funções simuladas gets() e print() para simular o ambiente de execução
let input = "";
let currentLine = 0;

function gets() {
    return input[currentLine++];
}

function print(output) {
    console.log(output);
}

// Função para calcular o nível de Rankeadas
function calcularNivelRankeado(vitorias, derrotas) {
    // Calcula o saldo de Rankeadas
    let saldoVitorias = vitorias - derrotas;

    // Determina o nível baseado no saldo de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna uma mensagem com o saldo de vitórias e o nível alcançado
    return `O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso da função com valores de entrada
input = ["75", "15"]; // Exemplo de entrada: 75 vitórias e 15 derrotas

const vitorias = parseInt(gets());
const derrotas = parseInt(gets());

const resultado = calcularNivelRankeado(vitorias, derrotas);
print(resultado);
