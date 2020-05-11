var Calculadora = {
    calcular: function(formula) {
        try {
             var resultado = eval(formula);
        } catch (error){
            resultado = 'Erro';
        } finally {
            return resultado;
        }       
    }
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Calculadora;
}
