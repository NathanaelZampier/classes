// class Carro {
//     constructor(valor1,valor2,valor3) {
//         this.marca = valor1
//         this.modelo = valor2
//         this.ano = valor3
//     }
//     buzina() {
//         return this.modelo +  ' buzinou: bii';
//     }
// }



// const uno = new Carro('fiat', 'uno', 2001);
// const gol = new Carro('volkswagen', 'gol', 2013);
// console.log(uno.buzina())
// console.log(gol.buzina())


// class Jogador {
//     constructor (nome, idade, time) {
//         this.nome = nome
//         this.idade = idade 
//         this.time = time
//     }

//     apresentar() {
//         console.log(`meu nome é ${this.nome}`)
//     }
// }

// const jogador1 = new Jogador('lebron', 41, 'lakers');
// const jogador2 = new Jogador('curry', 38 , 'warriors');

// console.log(jogador1 instanceof Jogador)

// jogador1.apresentar()


// class Carro {
//     constructor(nome,modelo,ano) {
//         this.nome = nome
//         this.modelo = modelo
//         this.ano = ano
//         this.velocidade = 0
//     }

//     mostrarInfo() {
//         console.log(`${this.nome}  ${this.modelo}  ${this.ano}`)
//     }

//     acelerar() {
//         this.velocidade += 10 
//         console.log(`${this.velocidade}`)
//     }

//     frear() {
//         if (this.velocidade > 0) {
//             this.velocidade -= 10
//         } else {
//             console.log('o carro parou')
//             return
//         }
//         console.log(`${this.velocidade}`)
//     }
// }

// const carro1 = new Carro('Toyota', 'Corolla', 2020)


// carro1.mostrarInfo()

// carro1.acelerar()

// carro1.acelerar()

// carro1.frear()

// carro1.frear()

// carro1.frear()

// class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome
//         this.sobrenome = sobrenome
//     }

//     get nomeCompleto() {
//         return `${this.nome} ${this.sobrenome}`
//     }
// }

// const pessoa = new Pessoa('joao', 'pedro')

// console.log(pessoa.nomeCompleto)


// class Pessoa {
//     constructor(nome) {
//         this.nome = nome
//     }

//     get nomeCompleto() {
//         return this.nome
//     }

//     set nomeCompleto(novoNome) {
//         this.nome = novoNome
//     }
// }


// class Produto {
//     constructor(nome, preco, quantidade) {
//         this.nome = nome
//         this.preco = preco
//         this.quantidade = quantidade
//     }

    

//     get valorTotal() {
//         return this.preco * this.quantidade
//     }

//     set alterarQuantidade(novaQuantidade) {
//         this.quantidade = novaQuantidade
//     }
// }

// const produto1 = new Produto('teclado', 150, 3)
// const produto2 = new Produto('mouse', 80, 2)

// produto1.alterarQuantidade = 5


// console.log(produto1.valorTotal)
// console.log(produto2.valorTotal)


// class Usuario {
//     constructor(nome, idade, email) {
//         this.nome = nome
//         this.idade = idade
//         this.email = email
//     }

//     get informacoes() {
//         return `nome: ${this.nome} | idade: ${this.idade} | email: ${this.email}`
//     }

//     set alterarIdade(novaIdade) {
//         if (novaIdade >= 0) {
//             this.idade = novaIdade
//         } else {
//             console.log('idade invalida')
//         }
//     }
// }

// const usuario1 = new Usuario('joao', 20, 'joao@hotmail.com')

// console.log(usuario1.informacoes)

// usuario1.alterarIdade = -5

// console.log(usuario1.informacoes)



// class Usuario {
//     static apresentarSistema() {
//         return 'sistema de usuario'
//     }
// }



// class Calculadora {
//     static somar(a,b) {
//         return a +  b
//     }
// }

// console.log(Calculadora.somar(10,20))


// class Calculadora {
//     static somar(a,b) {
//         return a + b
//     }

//     static subtrair(a,b) {
//         return a - b
//     }

//     multiplicar(a,b) {
//         return a * b
//     }

//     dividir(a,b) {
//         if (b === 0) {
//             console.log('não é possivel dividir por 0')
//             return
//         } else {
//             return a / b
//         }
//     }
// }

// const calculadora = new Calculadora()

// console.log(Calculadora.somar(10, 5))
// console.log(Calculadora.subtrair(10, 5))

// console.log(calculadora.multiplicar(10, 5))
// console.log(calculadora.dividir(10, 5))
// console.log(calculadora.dividir(10, 0))



// class Animal {
//     constructor(nome) {
//         this.nome = nome
//     }

//     emitirSom() {
//         console.log('o animal emitiu um som')
//     }
// }

// class Cachorro extends Animal {
//     constructor(nome, raca) {
//         super(nome)

//         this.raca = raca
//     }

//     latir() {
//         console.log(`${this.nome} está latindo`)
//     }
// }

// const cachorro1 = new Cachorro('rex', 'pastor alemão')

// console.log(cachorro1.nome)
// cachorro1.emitirSom()


// class Pessoa {
//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade
//     }

//     apresentar() {
//         console.log(`olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
//     }
// }

// const pessoa1 = new Pessoa('joão', 26)

// class Funcionario extends Pessoa {
//     constructor(nome, idade, cargo, salario) {
//         super(nome, idade)
//         this.cargo = cargo
//         this.salario = salario
//     }

//     mostrarCargo() {
//         console.log(`${this.nome} trabalha como ${this.cargo}`)
//     }

//     apresentar() {
//         super.apresentar() 
//             console.log(`olá, meu nome é ${this.nome} e eu sou ${this.cargo}`)
//     }
// }

// pessoa1.apresentar()

// const funcionario1 = new Funcionario('joão', 26, 'Desenvolvedor', 4100)

// funcionario1.apresentar()
// funcionario1.mostrarCargo()

// class Gerente extends Funcionario {
//     constructor(nome, idade, cargo, salario, departamento) {
//         super(nome, idade, cargo, salario) 
//         this.departamento = departamento
//     }

//     mostrarDepartamento() {
//         console.log(`${this.nome} é ${this.cargo} do departamento de ${this.departamento}`)
//     }
// }

// const gerente1 = new Gerente('Carlos', 35, 'Gerente', 8000, 'TI')

// gerente1.apresentar()
// gerente1.mostrarCargo()
// gerente1.mostrarDepartamento()

// class Animal {
//     constructor(nome) {
//         this.nome = nome
//     }

//     emitirSom() {
//         console.log(`${this.nome} emitiu um som`)
//     }
// }


// class Cachorro extends Animal {
//     constructor(nome) {
//         super(nome)
//     }


//     emitirSom() {
//         console.log(`${this.nome} faz: Au Au`)
//     }
// }

// class Gato extends Animal {
//     constructor(nome) {
//         super(nome)
//     }

//     emitirSom() {
//         console.log(`${this.nome} faz: Miau!`)
//     }
// }


// const cachorro1 = new Cachorro('rex')
// const gato1 = new Gato('mimi')


// gato1.emitirSom()
// cachorro1.emitirSom()


// class Conta {
//     constructor(nome, saldo) {
//         this.nome = nome
//         this.saldo = saldo
//     }
// }

// const conta = new Conta('joão', 1000)



// class Conta {
//     #saldo = 0 

//     depositar(valor) {
//         if (valor > 0) {
//             this.#saldo += valor
//         }
//     }

//     sacar(valor) {
//         if ( valor > 0 && valor > this.#saldo) {
//             this.#saldo -= valor
//         }
//     }

//     mostrarSaldo() {
//         console.log(`saldo : R$ ${this.#saldo}`)
//     }
// }



class ContaBancaria {
    #saldo = 0

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor
        }
    } 

    get saldo() {
        return this.#saldo
    }

    sacar(valor) {
        if (valor > 0 && this.#saldo >= valor) {
            this.#saldo -= valor
        }
    }
}


const conta1 = new ContaBancaria() 

    conta1.depositar(500)
    conta1.sacar(300)

console.log(conta1.saldo)
console.log(conta1.#saldo)