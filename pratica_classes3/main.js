class Funcionario {
    #salario = 0
    constructor(nome, cargo, salario) {
        this.nome = nome
        this.cargo = cargo
        this.#salario = salario
    }

    get salario() {
        return this.#salario
    }

    set salario(novoSalario) {
        if (novoSalario > 0) {
            this.#salario = novoSalario
        } else {
            console.log('salário inválido')
        }
    }

    mostrarInformaçoes() {
        console.log(`${this.nome} | ${this.cargo} | ${this.salario}`)
    }
}


class Gerente extends Funcionario {
    constructor(nome, cargo, salario, departamento) {
        super(nome, cargo, salario) 
        this.departamento = departamento
    }

    mostrarDepartamento() {
        console.log(`${this.nome} ${this.cargo} ${this.departamento}`)
    }
}


const funcionario1 = new Funcionario('João', 'Desenvolvedor', 4100)

const gerente1 = new Gerente('Carlos', 'Gerente', 8000, 'TI')

console.log(funcionario1.salario)

funcionario1.salario = 5000

console.log(funcionario1.salario)

funcionario1.salario = -1000

