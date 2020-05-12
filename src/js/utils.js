var formula = "";

var historico = [];

function escreve_tela(formula) {
    document.getElementById("tela").value = formula;
}

function inserir_formula(novaFormula) {
    formula = novaFormula;
    escreve_tela(novaFormula);
}

function adiciona_simbolo(simbolo) {
    formula += simbolo;
    escreve_tela(formula);

}

function limpar_formula() {
    escreve_tela('');
    formula = "";
}

function salvar_historico() {
    var conteudo_historico = "";
    historico.forEach(item => {
        conteudo_historico +=`<div onclick='inserir_formula("${item}")'>${item}</div>`;
    });
    document.getElementById("historico").innerHTML = conteudo_historico;
}

function calcular_formula() {
    try {
        formula = document.getElementById("tela").value;
        var resultado = Calculadora.calcular(formula);
        historico.push(formula);
        salvar_historico();
    } catch (error) {
        resultado = 'Erro';
    } finally {
        escreve_tela(resultado);
        formula = "";
    }
}

function somente_numeros(event) {
    var chr = String.fromCharCode(event.which);

    if( !chr.match(/^[0-9+\-*/(). ]*$/) ) {
        event.preventDefault();
    }
}