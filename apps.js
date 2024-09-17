const form = document.getElementById("form-atividade");
const imgAprovado = `<img src="./images/aprovado.png" alt="emoji feliz">` 
const imgReprovado = `<img src="./images/reprovado.png" alt="emoji triste">` 
let linhas = '';
const atividades = [];
const notas = [];
const notaMinima = parseFloat(prompt("Digite a nota minima:"));

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
    atualizaMediaFinal();
})

function adicionarLinha() { 
    const inputNomeAtividade = document.getElementById("nomeAtividade").value;
    const inputNumeroAtividade = document.getElementById("numeroAtividade").value;

    if (atividades.includes (inputNomeAtividade)) {
        alert (`a atividade ${inputNomeAtividade} já foi inserida`)
    } else {
        atividades.push(inputNomeAtividade);
        notas.push(parseFloat(inputNumeroAtividade));
    
        let linha = `<tr>`;
        linha += `<td>${inputNomeAtividade}</td>`;
        linha += `<td>${inputNumeroAtividade}</td>`;
        linha += `<td>${inputNumeroAtividade >= notaMinima ? imgAprovado : imgReprovado }</td>`;
        linha += `<tr>`;
    
        linhas += linha
    }

    inputNomeAtividade.value = ''
    inputNumeroAtividade.value = ''
}

function atualizarTabela () {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal () {
    const mediaFinal = calculaMedias();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-resultado-final').innerHTML = mediaFinal >= notaMinima ? 'aprovado' : 'reprovado';
}

function calculaMedias () {
    let somaNotas = 0;
    
    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i];
    }
    
    return somaNotas / notas.length;
}
