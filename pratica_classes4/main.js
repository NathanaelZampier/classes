class Produto {
    #preco = 0
    constructor(nome, preco, estoque) {
        this.nome = nome
        this.preco = preco
        this.estoque = estoque
    }

    get preco() {
        return this.#preco
    }

    set preco(novoPreco) {
        if (novoPreco <= 0) {
            console.log('valor inválido')
        } else {
            this.#preco = novoPreco
        }
    }

    mostrarInfo() {
        return `produto: ${this.nome} | preco: ${this.preco} | estoque: ${this.estoque}`
    }

    aplicarDesconto(valor) {
        if (valor <= 0 || valor >= 100) {
            console.log('insira um valor válido')
        } else {
            this.preco -= valor * this.preco / 100
        }
    }
}

const teclado = new Produto('teclado', 150 , 5)

teclado.preco = 300

teclado.aplicarDesconto(10)


class ProdutoDigital extends Produto {
    constructor(nome, preco, estoque, tamanhoArquivo) {
        super(nome, preco, estoque)
        this.tamanhoArquivo = tamanhoArquivo
    }

    mostrarInfo() {
        const retornoInfo = super.mostrarInfo()
        return `${retornoInfo} | tamanho do arquivo: ${this.tamanhoArquivo}`
    }
}

const jogoVirtual = new ProdutoDigital('gta', 100, 999, 96.6)


class Pedido {
    #status = 'pendente'
    constructor(cliente) {
        this.cliente = cliente
        this.produtos = []
    }

    get status() {
        return  this.#status
    }

    pagar(valor) {
        const total = this.calcularTotal() 
        let pagamentoSucesso
        let pagamentoRecusado
        let pagamentoJaEfetuado

        if (this.#status === 'pendente' && this.produtos.length > 0) {

            if (valor === total) {
                this.#status = 'pago'
                pagamentoSucesso = `pagamento efetuado com sucesso`
                return pagamentoSucesso;
            } else {
                pagamentoRecusado = `pagamento recusado`
                return pagamentoRecusado
            }
        } else {
            pagamentoJaEfetuado = `o pagamento ja foi realizado`
            return pagamentoJaEfetuado
        }
    }

    alterarStatus(novoStatus) {
        if (this.#status === 'pendente' && novoStatus === 'pago') {

                if (this.produtos.length === 0) {
                    console.log('o pedido não possui nenhum produto')
                }  else if (this.produtos.length > 0) {
                    this.#status = novoStatus
                }
            
        } else if (this.#status === 'pendente' && (novoStatus === 'enviado' || novoStatus === 'entregue')) {
            console.log('pagamento pendente')
        
        } else if (this.#status === 'pago' && novoStatus === 'enviado') {
            this.#status = novoStatus

        } else if (this.#status === 'enviado' && novoStatus === 'entregue') {
            this.#status = novoStatus
        } else {
            console.log('status inválido')
        }
    }

    adicionarProduto(produto, quantidade) {
        let encontrou = false 

        if (quantidade > 0 && quantidade <= produto.estoque) {

            for (let i = 0; i < this.produtos.length; i++) {

                if (this.produtos[i].produto === produto) {
                    this.produtos[i].quantidade += quantidade 
                    encontrou = true
                }
            }

            if (!encontrou) {
            this.produtos.push({
            produto: produto,
            quantidade: quantidade
            })
            }
            produto.estoque -= quantidade
        } else {
            console.log('produto sem estoque')
        }
    }

    removerProduto(produto, quantidade) {
        let produtoExistente = false 

        for (let i = 0; i < this.produtos.length; i ++) {
            
            if (this.produtos[i].produto === produto) {
                produtoExistente = true

                if (this.produtos[i].quantidade < quantidade) {
                    console.log('quantidade inválida')

                    } else if (quantidade <= 0) {
                    console.log('quantidade inválida')

                    } else if (this.produtos[i].quantidade === quantidade) {
                    produto.estoque += quantidade
                    this.produtos.splice(i, 1)
                    
                    } else if (this.produtos[i].quantidade > quantidade) {
                    this.produtos[i].quantidade -= quantidade
                    produto.estoque += quantidade
                } 
            } 
        }

        if (!produtoExistente) {
            console.log('produto não encontrado')
        }
    }

    cancelarPedido() {
            if (this.#status === 'pendente' || this.#status === 'pago') {
                for (let i = 0; i < this.produtos.length; i++) {
                    this.produtos[i].produto.estoque += this.produtos[i].quantidade
            }
            console.log('pedido cancelado')
            this.#status = 'cancelado'
            this.produtos = []
        } else if (this.#status === 'enviado' || this.#status === 'entregue') {
            console.log('pedido enviado! em caso de cancelamento, realize uma nova operação.')
        } else if (this.#status === 'cancelado') {
            console.log('o cancelamento ja foi requisitado')
        }
    }



    calcularTotal() {
        let total = 0

        for (let i = 0; i < this.produtos.length; i++) {
            total += this.produtos[i].produto.preco * this.produtos[i].quantidade
        }
        return total
    }
} 


const pedido1 = new Pedido('nathan')


pedido1.adicionarProduto(teclado, 2)

console.log(teclado.mostrarInfo())

console.log(jogoVirtual.mostrarInfo())

console.log(pedido1.status)

console.log(pedido1.calcularTotal())

const pagamento = pedido1.pagar(540)

console.log(pagamento)



