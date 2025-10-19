async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConver = await consultaCEP.json();
        if(consultaCEPConver.erro)
            {
                throw Error('Cep não existente!')
            }
            var cidade = document.getElementById('cidade');
            var logradouro = document.getElementById('endereco');
            var estado = document.getElementById('estado');
            var bairro = document.getElementById('bairro');

            bairro.value = consultaCEPConver.bairro
            cidade.value = consultaCEPConver.localidade;
            logradouro.value = consultaCEPConver.logradouro;
            estado.value = consultaCEPConver.uf;

        console.table(consultaCEPConver);
        return consultaCEPConver;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente ! </p>`
        console.log(erro)
    }
}

/*let ceps = ['01001000','01001001','25581112'];
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
Promise.all(conjuntoCeps).then(respostas => console.log(respostas));*/

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value))












/*.then(resposta => resposta.json())
.then(r => {
    if(r.erro){
        throw Error('Esse CEP não existe!')
    }else{
            console.table(r)
        }
    }  
)
.catch(erro => console.log(erro)).finally(mensagem => console.log('Processamento concluído!'));
*/