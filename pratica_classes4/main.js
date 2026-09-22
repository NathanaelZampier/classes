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
        let pago = false
        const total = this.calcularTotal() 
        let pagamentoSucesso
        let pagamentoRecusado
        let pagamentoJaOuPedidoVazio

        if (this.#status === 'pendente' && this.produtos.length > 0) {

            if (valor === total) {
                pago = true
                this.#status = 'pago'
                pagamentoSucesso = `pagamento efetuado com sucesso`
                console.log(pagamentoSucesso)
                return pago
            } else {
                pago = false
                pagamentoRecusado = `pagamento recusado`
                console.log(pagamentoRecusado)
                return pago
            }
        } else {
            pago = false
            pagamentoJaOuPedidoVazio = `o pagamento ja foi realizado ou carrinho está vazio`
            console.log(pagamentoJaOuPedidoVazio)
            return pago
        }
    }

    verificarEnvio() {
        if (this.#status === 'pago' && this.produtos.length > 0) {
            return true
        } else  {
            return false
    }
}

    alterarStatus(novoStatus) {
        if (this.#status === 'pendente' && novoStatus === 'pago') {

                if (this.produtos.length === 0) {
                    console.log('o pedido não possui nenhum produto')
                    return false
                }  else if (this.produtos.length > 0) {
                    this.#status = novoStatus
                    return true
                }
            
        } else if (this.#status === 'pendente' && (novoStatus === 'enviado' || novoStatus === 'entregue')) {
            console.log('pagamento pendente')
            return false
        
        } else if (this.#status === 'pago' && novoStatus === 'enviado') {
            this.#status = novoStatus
            return true
        } else if (this.#status === 'enviado' && novoStatus === 'entregue') {
            this.#status = novoStatus
            return true
        } else {
            console.log('status inválido')
            return false
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

    enviarPedido() {
        if (this.verificarEnvio()) {
            this.#status = 'enviado'
            console.log('pedido enviado')
        } else {
            console.log('não é possível enviar o pedido')
        }
    }

    finalizarPedido() {

    }
} 


const pedido1 = new Pedido('nathan')


pedido1.adicionarProduto(teclado, 2)

console.log(teclado.mostrarInfo())

console.log(jogoVirtual.mostrarInfo())

console.log(pedido1.status)

console.log(pedido1.calcularTotal())

const totalPedido = pedido1.calcularTotal()

const pagamento = pedido1.pagar(totalPedido)

console.log(pagamento)

const podeEnviar = pedido1.verificarEnvio()


if (podeEnviar) {
    console.log('pagamento realizado, envio liberado!')
} else {
    console.log('pagamento negado, envio não autorizado!')
}


if (pagamento) {
    console.log('o pagamento foi realizado')
} else {
    console.log('o pagamento não foi realizado')
}






