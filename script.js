const inputCep = document.getElementById('cep')
const inputLogradouro = document.getElementById('logradouro')
const inputBairro = document.getElementById('bairro')
const inputCidade = document.getElementById('cidade')
const spanErro = document.getElementById('spanErro')


inputCep.addEventListener('keyup', handleKeyup)

function handleKeyup(e) {
    e.preventDefault()
    const cep = inputCep.value
    if(cep.length === 8) {
        buscaCep(cep)
        spanErro.innerText = ''
    } else if(cep.length < 8) {
        spanErro.innerText = 'Digite o CEP corretamente!'
        inputLogradouro.value = ''
        inputBairro.value = ''
        inputCidade.value = ''
    }
}

function buscaCep(cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
                .then(body => {
                    status === 200
                        inputLogradouro.value = body.logradouro
                        inputBairro.value = body.bairro
                        inputCidade.value = body.localidade
                })
}