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



class Calculadora {
    static somar(a,b) {
        return a +  b
    }
}

console.log(Calculadora.somar(10,20))
