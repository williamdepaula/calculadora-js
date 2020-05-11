describe("Suite de testes de calculo", function () {
    var Calculadora = require('../../src/js/Calculadora');

    it('deve retornar 5 para 2+3', function() {
        expect(Calculadora.calcular('2+3')).toEqual(5);
    });

    it('deve retornar 1 para 3-2', function () {
        expect(Calculadora.calcular('3-2')).toEqual(1);
    });

    it('deve retornar 6 para 2*3', function () {
        expect(Calculadora.calcular('2*3')).toEqual(6);
    });

    it('deve retornar 1.5 para 3/2', function () {
        expect(Calculadora.calcular('3/2')).toEqual(1.5);
    });

    it('deve retornar 0 para 2*0', function () {
        expect(Calculadora.calcular('2*0')).toEqual(0);
    });

    it('deve retornar erro para 2/0', function () {
        expect(Calculadora.calcular('2/0')).toThrowError;
        expect(Calculadora.calcular('2/0')).toEqual(Infinity);
    });

});