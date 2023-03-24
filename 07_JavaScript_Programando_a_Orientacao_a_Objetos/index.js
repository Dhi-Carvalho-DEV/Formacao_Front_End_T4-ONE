import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente()
cliente1.nome = 'Ricardo'
cliente1.cpf = 11122233309

const cliente2 = new Cliente()
cliente2.nome = 'Alice'
cliente2.cpf = 88822233309

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.agencia = 1001
contaCorrenteRicardo.cliente = cliente1

const ContaCorrenteAlice = new ContaCorrente()
ContaCorrenteAlice.agencia = 5666
ContaCorrenteAlice.cliente = cliente2

console.log(ContaCorrenteAlice)
console.log(contaCorrenteRicardo)

contaCorrenteRicardo.depositar(500)
console.log(contaCorrenteRicardo)
contaCorrenteRicardo.transferir(200, ContaCorrenteAlice)

console.log(ContaCorrenteAlice)
console.log(contaCorrenteRicardo)

ContaCorrenteAlice.transferir(300, contaCorrenteRicardo)
console.log(ContaCorrenteAlice)
console.log(contaCorrenteRicardo)
