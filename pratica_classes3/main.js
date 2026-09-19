// class Funcionario {
//     #salario = 0
//     constructor(nome, cargo, salario) {
//         this.nome = nome
//         this.cargo = cargo
//         this.#salario = salario
//     }

//     get salario() {
//         return this.#salario
//     }

//     set salario(novoSalario) {
//         if (novoSalario > 0) {
//             this.#salario = novoSalario
//         } else {
//             console.log('salário inválido')
//         }
//     }

//     mostrarInformacoes() {
//         console.log(`${this.nome} | ${this.cargo} | ${this.salario}`)
//     }
// }


// class Gerente extends Funcionario {
//     constructor(nome, cargo, salario, departamento) {
//         super(nome, cargo, salario) 
//         this.departamento = departamento
//     }

//     mostrarDepartamento() {
//         console.log(`${this.nome} ${this.cargo} ${this.departamento}`)
//     }
// }


// const funcionario1 = new Funcionario('João', 'Desenvolvedor', 4100)

// const gerente1 = new Gerente('Carlos', 'Gerente', 8000, 'TI')

// console.log(funcionario1.salario)

// funcionario1.salario = 5000

// console.log(funcionario1.salario)

// funcionario1.salario = -1000

// gerente1.mostrarInformacoes()

// gerente1.salario = 9000


// gerente1.mostrarInformacoes()

// class Produto {
//     constructor(nome, preco, quantidade) {
//         this.nome = nome
//         this.preco = preco
//         this.quantidade = quantidade
//     }

//     pra que serve o parenteses apos a declaração do nome do get? é tipo pegue o tal e retorne isso?

//     get valorTotal () {
//         return this.preco * this.quantidade
//     }

//     e no set? pra que serve o () é tipo aplique isso se for isso, mas tipoo quando declaro o novaQuantidade, o js cria uma var na hora e dai?

//     set alterarQuantidade(novaQuantidade) {
//         if (this.quantidade > 0) {
//             this.quantidade = novaQuantidade
//         }
//     }
// }

// const produto1 = new Produto('teclado', 150, 3)

// console.log(produto1.valorTotal)

// produto1.quantidade = 5

// console.log(produto1.valorTotal)


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

//     // nao sei responder a pergunta chat, sei que o static ele trabalha na propria classes, invez da instancia isso?

//     dividir(a,b) {
//         if (b === 0) {
//             console.log('insira um numero correto')
//         } else {
//             return a / b
//         }
//     }
// }

//     nesse caso fazendo os testes aqui, eu tenho o retorno da msg de erro addListener, e um undefined, esse undefined é certo ele aparecer?

// const calculadora = new Calculadora


// console.log(Calculadora.subtrair(10,20))

// console.log(calculadora.dividir(10,0))


// class Pessoa {
//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade
//     }

//     apresentar() {
//         console.log(`olá meu nome é ${this.nome} e tenho ${this.idade} anos`)
//     }
// }

// class Funcionario extends Pessoa {
//     #salario = 0
//     constructor(nome, idade, cargo, salario) {
//         super(nome, idade)
//         this.cargo = cargo
//         this.#salario = salario
//     }

//     get salario() {
//         return this.#salario
//     }

//     set salario(novoSalario) {
//         if (this.salario <= 0) {
//             console.log('valor invalido')
//         } else {
//             this.#salario = novoSalario
//         }
//     }

//     mostrarInformacoes() {
//         console.log(`${this.nome} | ${this.idade} | ${this.cargo} | ${this.salario}`)
//     }
// }

// class Gerente extends Funcionario {

//     // aqui eu preciso sempre fazer o constructor repetindo os parametro passados antes, ou posso fazer so departamento, sem declarar todos os this
//     constructor(nome, idade, cargo, salario, departamento) {
//         super(nome, idade, cargo, salario)
//         this.departamento = departamento
//     }

//     mostrarDepartamento() {
//         console.log(`${this.nome} | ${this.cargo} | ${this.departamento}`)
// }
// }

// const gerente1 = new Gerente('roberto', 40, 'Gerente', 8000, 'TI')



// console.log(gerente1.mostrarDepartamento())


// class Veiculo {
//     #velocidade = 0
//     constructor(marca, modelo) {
//         this.marca = marca
//         this.modelo = modelo
//     }
    
//     get velocidade() {
//         return this.#velocidade
//     }

//     set velocidade(novaVelocidade) {
//         if (novaVelocidade >= 0 && novaVelocidade <= 300) {
//             this.#velocidade = novaVelocidade
//         } else {
//             console.log(`velocidade inválida`)
//         }
//     }

//     acelerar(valor) {
//         this.velocidade += valor
//     }
// }


// class Carro extends Veiculo {
//     constructor(marca, modelo, portas) {
//         super(marca, modelo)
//         this.portas = portas
//     }
    

//     mostrarInformacoes() {
//         console.log(`${this.marca} | ${this.modelo} | ${this.portas} | ${this.velocidade}`)
//     }
    
// }

// const carro1 = new Carro('toyota', 'corolla', '4 portas') 

// carro1.acelerar(100)

// console.log(carro1.velocidade)

// carro1.mostrarInformacoes()


// class CarroEsportivo extends Carro {
//     constructor(marca, modelo, portas, turbo) {
//         super(marca, modelo, portas)
//         this.turbo = turbo
//     }

//     ativarTurbo() {
//         if (this.turbo === true) {
//             this.acelerar(50)
//         } else {
//             console.log('ative o turbo')
//         }
//     }
// }

// const carro2 = new CarroEsportivo('porsche', '911', '2 portas', true)


// carro2.mostrarInformacoes()

// carro2.acelerar(250)

// carro2.mostrarInformacoes()

// carro2.ativarTurbo()

// carro2.mostrarInformacoes()



// class Pessoa {
//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade
//     }

//     apresentar() {
//         console.log(`meu nome é ${this.nome} e tenho ${this.idade} anos`)
//     }
// }

// const pessoa1 = new Pessoa('joão', '23')

// pessoa1.apresentar()


// class Funcionario extends Pessoa {
//     #salario = 0
//     constructor(nome, idade, cargo, salario) {
//         super(nome, idade)
//         this.cargo = cargo
//         this.#salario = salario
//     }

//     get salario() {
//         return this.#salario
//     }

//     set salario(novoSalario) {
//         if (novoSalario <= 0) {
//             console.log('valor inválido')
//         } else {
//             this.#salario = novoSalario
//         }
//     }

//     aumentarSalario(percentual) {
//         if (percentual <= 0) {
//             console.log('valor inválido')
//         } else {
//             this.salario += percentual * this.salario / 100
//         }
//     }

//     mostrarInformacoes() {
//         console.log(`${this.nome} | ${this.idade} | ${this.cargo} | ${this.salario}`)
//     }
// }


// const funcionario1 = new Funcionario('pedro', '18', 'estagiario', 2000)


// class Gerente extends Funcionario {
//     constructor(nome, idade, cargo, salario, departamento) {
//         super(nome, idade, cargo, salario) 
//         this.departamento = departamento
//     }

//     mostrarDepartamento() {
//         console.log(`${this.nome} | ${this.cargo} | ${this.departamento}`)
//     }
// }

// const gerente1 = new Gerente('roberto', 40 , 'Gerente', 9000 , 'TI')

// gerente1.mostrarDepartamento()

// gerente1.salario = 10000


// class Usuario {
//     constructor(nome, email) {
//         this.nome = nome
//         this.email = email
//     }

//     mostrarPerfil() {
//         console.log(`nome: ${this.nome}`)
//         console.log(`email: ${this.email}`)
//     }
// }


// const usuario1 = new Usuario('roberto', 'robertinho@gmail.com')

// usuario1.mostrarPerfil()


// class Administrador extends Usuario {
//     constructor(nome, email, nivelAcesso) {
//         super(nome, email)
//         this.nivelAcesso = nivelAcesso
//     }

//     mostrarPerfil() {
//             console.log(`${this.nome}`)
//             console.log(`${this.email}`)
//             console.log(`nível de acesso: ${this.nivelAcesso}`)
//     }
// }

// console.log('\n')


// const administrador1 = new Administrador('joão', 'joão@gmail.com', 'staff')

// administrador1.mostrarPerfil()


// class Funcionario {
//     constructor(nome, cargo) {
//         this.nome = nome
//         this.cargo = cargo
//     }

//     mostrarPerfil() {
//         console.log(`nome: ${this.nome}`)
//         console.log(`cargo: ${this.cargo}`)
//     }
// }

// class Gerente extends Funcionario {
//     constructor(nome,cargo, departamento) {
//         super(nome, cargo)
//         this.departamento = departamento
//     }

//     mostrarPerfil() {
//         super.mostrarPerfil()
//         console.log(`departamento: ${this.departamento}`)
//     }
// }

// const gerente1 = new Gerente('roberto', 'gerente', 'TI')

// gerente1.mostrarPerfil()


// class Diretor extends Gerente {
//     constructor(nome, cargo, departamento, nivel) {
//         super(nome, cargo, departamento)
//         this.nivel = nivel
//     }

//     mostrarPerfil() {
//         super.mostrarPerfil()
//         console.log(`nivel: ${this.nivel}`)
//     }
// }

// console.log('\n')

// const diretor1 = new Diretor('carlos', 'Diretor de tecnologia', 'TI', 'executivo')

// diretor1.mostrarPerfil()


// class Notificacao {
//     constructor(destinatario, mensagem) {
//         this.destinatario = destinatario
//         this.mensagem = mensagem
//     }

//     enviar() {
//         // console.log(`enviando para ${this.destinatario}`)
//         return `mensagem: ${this.mensagem}.`
//     }

//     formatarMensagem() {
//         return `mensagem: ${this.mensagem}`
//     }
// }

// const notificacao1 = new Notificacao('miguel', 'boa tarde')

// notificacao1.enviar()
// notificacao1.formatarMensagem()

// console.log('\n')

// class NotificacaoEmail extends Notificacao {
//     constructor(destinatario, mensagem, assunto) {
//         super(destinatario, mensagem) 
//         this.assunto = assunto
//     }

//     enviar() {
//         const mensagem = super.formatarMensagem()
//     console.log(`enviando E-mail para: ${this.destinatario}`)
//     console.log(`assunto: ${this.assunto}`)
//     console.log(mensagem)
//     }
// }

// const notificacaoEmail1 = new NotificacaoEmail('roberto', 'bom dia', 'cumprimento')

// notificacaoEmail1.enviar()

// console.log('\n')

// class NotificacaoSMS extends Notificacao {
//     constructor(destinatario, mensagem, numero) {
//         super(destinatario, mensagem)
//         this.numero = numero
//     }

//     enviar() {
//         console.log(`Enviando SMS para: ${this.numero}`)
//         console.log(`seu pedido foi enviado`)
//     }
// }


// const notificacaosms1 = new NotificacaoSMS('joão', 'boa noite', '42999946371')

// notificacaosms1.enviar()


// class Calculadora {
    
//     somar(a,b) {
//         return a + b
//     }

//     subtrair(a,b) {
//         return a - b
//     }

//     multiplicar(a,b) {
//         return a * b
//     }

//     dividir(a,b) {
//         if (b === 0) {
//             console.log('não é possível divisão por 0')
//         } else {
//             return a / b
//         }
//     }

//     calcularMedia(a,b) {
//         const resultado = this.somar(a,b)
//         return resultado  / 2
//     }

// }



// const calculadora = new Calculadora

// const resultadoSomar = calculadora.somar(10,20)
// const resultadoSubtrair = calculadora.subtrair(10,20)
// const resultadoMultiplicar = calculadora.multiplicar(10,20)
// const resultadoDivisao = calculadora.dividir(10,20)
// const resultadoMedia = calculadora.calcularMedia(10,40)

// console.log(resultadoMultiplicar)
// console.log(resultadoSubtrair)
// console.log(resultadoSomar)
// console.log(resultadoDivisao)
// console.log(resultadoMedia)



// class Produto {
//     constructor(nome, preco) {
//         this.nome = nome
//         this.preco = preco
//     }

//     mostrarInfo() {
//         return `produto: ${this.nome} | preco: ${this.preco}`
//     }
// }

// class ProdutoPromocao extends Produto {
//     constructor(nome, preco, desconto) {
//         super(nome, preco)
//         this.desconto = desconto
//     }

//     mostrarInfo() {
//         const produto1 = super.mostrarInfo()
//         return `${produto1} | desconto: ${this.desconto}`
//     }
// }

// const teclado = new ProdutoPromocao('teclado', 150, '20%')

// console.log(teclado.mostrarInfo())



// class Funcionario {
//     #salario = 0
//     constructor(nome, cargo, salario) {
//         this.nome = nome
//         this.cargo = cargo
//         this.#salario = salario
//     }

//     get salario() {
//         return this.#salario
//     }

//     set salario(novoSalario) {
//         if (novoSalario <= 0) {
//             console.log(`valor inválido`)
//         } else {
//             this.#salario = novoSalario
//         }
//     }

//     mostrarPerfil() {
//         return `nome: ${this.nome} | cargo: ${this.cargo} | salario: ${this.salario}`
//     }
// }

// const funcionario1 = new Funcionario('joao', 'estagiario', 2000)

// funcionario1.salario = 3000

// console.log(funcionario1.mostrarPerfil())

// console.log(funcionario1.salario)

// class Gerente extends Funcionario {
//     constructor(nome, cargo, salario, departamento) {
//         super(nome, cargo, salario)
//         this.departamento = departamento
//     }

//     mostrarPerfil() {
//         const perfilFuncionario = super.mostrarPerfil()
//         return `${perfilFuncionario} | departamento: ${this.departamento}`
//     }
// }

// const gerente1 = new Gerente('roberto', 'gerente', 8000, 'TI')

// gerente1.salario = 100000

// console.log(gerente1.mostrarPerfil())






























