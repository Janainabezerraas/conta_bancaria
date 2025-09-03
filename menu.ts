import readlinesync = require('readline-sync');
import { colors } from './src/util/colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca} from './src/model/ContaPoupanca';

export function main() {

    let opcao: number;

    const contacorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

    while(true) {
        console.log(colors.bg.black, colors.fg.green, "**************************************************");
        console.log("");
        console.log("             BANCO DO BRAZIL COM Z                ");
        console.log("");
        console.log("**************************************************");
        console.log("");
        console.log("          1 - Criar Conta                         ");
        console.log("          2 - Listar todas as Contas              ");
        console.log("          3 - Buscar Conta por Numero             ");
        console.log("          4 - Atualizar Dados da Conta            ");
        console.log("          5 - Apagar Conta                        ");
        console.log("          6 - Sacar                               ");
        console.log("          7 - Depositar                           ");
        console.log("          8 - Transferir valores entre Contas     ");
        console.log("          9 - Sair                                ");
        console.log("");
        console.log("**************************************************");
        console.log("                                                  ", colors.reset);

        console.log("Entre com a opcao desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 9) {
            console.log(colors.fg.yellowstrong,"\nBanco do Brazil com Z - O seu futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0)
        }

        switch(opcao) {
            case 1:
                console.log(colors.fg.bluestrong, "\n\nCriar conta\n\n", colors.reset);

                keyPress()
                break;
            case 2:
                console.log(colors.fg.bluestrong, "\n\nListar todas as contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.bluestrong, "\n\nConsultar dados da conta - por numero\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.bluestrong, "\n\nAtualizar dados da conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.bluestrong, "\n\nApagar uma conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.bluestrong, "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.bluestrong, "\n\nDeposito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.bluestrong, "\n\nTransferencia entre contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.bluestrong, "\nOpcao ivalida!\n", colors.reset);

                keyPress()
                break;
        }
    }
}

export function sobre(): void{
    console.log("\n********************************************************");
    console.log("Projeto desenvolvido por: Janaina Bezerra");
    console.log("Email: janainabdas@gmail.com");
    console.log("github.com/Janainabezerraas");
}
main();

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}