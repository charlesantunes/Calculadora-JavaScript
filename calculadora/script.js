function calculadora() {
    //pronpt solicita qualquer valor do usuário, letra e numero.
    //Number(). converte string para número
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potênciação (**)'));
    //! pegunta se a declaração é diferente do tipo número
    // || = ou
    if (!operacao || operacao > 6) {
        alert('Digite uma opção válida entre 1 a 6');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor!'));
        let n2 = Number(prompt('Insira o segundo valor!'));
        let result;

        if (!n1 || !n2) {
            alert('Erro! Digite um número válido')
            calculadora();
        } else {
            //`` crase é para usar strings junto com expressoes e variáveis.
            function soma() {
                result = n1 + n2;
                alert(`${n1} + ${n2} = ${result}`);
                novaOperacao();
            }
            function subtracao() {
                result = n1 - n2;
                alert(`${n1} - ${n2} = ${result}`);
                novaOperacao();
            }
            function multiplicacao() {
                result = n1 * n2;
                alert(`${n1} X ${n2} = ${result}`);
                novaOperacao();
            }
            function divisaoReal() {
                result = n1 / n2;
                alert(`${n1} / ${n2} = ${result}`);
                novaOperacao();
            }
            function divisaoInteira() {
                result = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${result}`);
                novaOperacao();
            }
            function potenciacao() {
                result = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${result}`);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até a próxima!')
                } else {
                    alert('Digite uma opção válida entre 1 ou 2')
                    novaOperacao();
                }
            }

        }
        /* 
        //substituir por switch casa    
        if(operacao == 1){
            soma();        
        }else if(operacao == 2){
            subtracao();
        }else if(operacao == 3){
            multiplicacao();
        }else if(operacao == 4){
            divisaoReal();
        }else if(operacao == 5){
            divisaoInteira();
        }else if(operacao == 6){
            potenciacao();
        } */
        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
        }
    }
}
calculadora();