
// class Pessoa {
//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade
//     }

//     apresentar() {
//         console.log(`meu nome é ${this.nome} e tenho ${this.idade} de idade`)
//     }
// }

// class Funcionario extends Pessoa {
//     #salario = 0
//     constructor(nome, idade, cargo, salario) {
//         super(nome,idade)
//         this.cargo = cargo
//         this.#salario = salario
//     }

//     get salario() {
//         return this.#salario
//     }

//     mostrarInformacoes() {
//         console.log(`${this.nome} ${this.idade} ${this.cargo} ${this.salario}`)
//     }

//     aumentarSalario(valor) {
//         if (valor > 0) {
//             this.#salario += this.#salario * valor / 100
//         } else {
//             console.log('insira um valor válido')
//         }
//     }
        
    
// }

// class Gerente extends Funcionario {
//     constructor(nome, idade, cargo, salario, departamento) {
//         super(nome, idade, cargo, salario) 
//         this.departamento = departamento
//     }

//     mostrarDepartamento() {
//         console.log(`${this.nome} ${this.cargo} ${this.departamento}`)
//     }
    
// }


// const funcionario1 = new Funcionario('joão', 26, 'Desenvolvedor', 4100)
// const gerente1 = new Gerente('Geraldo', 43, 'Gerente', 8000, 'TI')

// funcionario1.apresentar()
// funcionario1.mostrarInformacoes()
// console.log('\n')

// gerente1.apresentar()
// gerente1.mostrarInformacoes()
// gerente1.mostrarDepartamento()

// console.log(gerente1.salario)

// gerente1.aumentarSalario(10)

// console.log(gerente1.salario)

// gerente1.aumentarSalario(-10)


// console.log(gerente1.salario)

// gerente1.aumentarSalario(10)

// console.log(gerente1.salario)


class contaBancaria {
    #saldo = 0
    constructor(titular, saldo) {
        this.titular = titular
        this.#saldo = saldo
    }

    get saldo() {
        return this.#saldo
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor
        } else {
            console.log('insira um valor válido')
        }
    }

    sacar(valor) {
        if (valor > 0) {
            if (valor <= this.#saldo) {
                this.#saldo -= valor
            } else {
                console.log('saldo insuficiente')
            }
        } else {
            console.log('valor inválido')
        }
    }
}

class ContaPoupanca extends contaBancaria {
    constructor(titular, saldo, taxaRendimento) {
        super(titular, saldo)
        this.taxaRendimento = taxaRendimento
    }


    aplicarRendimento() {
        let valor = 0
        valor = this.saldo
        valor *= this.taxaRendimento  / 100 
            super.depositar(valor)
    }
}

const conta = new contaBancaria('joão', 3000)

const conta1 = new ContaPoupanca('carlos', 5000, 10)

conta1.aplicarRendimento()

console.log(conta1.saldo)




