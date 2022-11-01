// Variáveis

const arrayPaises = [
    ['ANGOLA','Futebol: A seleção angolana de futebol se classificou para a Copa do Mundo pela primeira vez na sua história em 2005.'],
    ['AUSTRIA','Ski: Com tantas montanhas de neve, não é difícil imaginar que o ski seja um esporte popular por lá'],
    ['BANGLADESH','Cricket: A equipe nacional de cricket de Bangladesh tem o apelido de Tigers.'],
    ['CAMBODJA','Kickboxing: Outros esportes podem até serem populares por lá, mas o kickboxing é o que está em primeiro lugar em popularidade'],
    ['CANADÁ','Hóquei no Gelo: O Canadá é o maior vencedor em competições internacionais de hóquei no gelo, como o Campeonato Mundial e nos Jogos Olímpicos'],
    ['CHINA','Tênis de Mesa: O tênis de mesa é considerado o esporte mais popular na China'],
    ['CUBA','Beisebol: A equipe cubana participou de todos os Jogos Olímpicos de Verão desde 1992 e, desde então, tem sido a mais bem sucedida na competição'],
    ['LETÔNIA','Basquete: Na primeira edição do EuroBasket em 1935 a Letônia se consagrou campeã europeia'],
    ['MONGÓLIA','Luta Livre: Há um feriado na Mongólia chamado "Naadam", também conhecido como "Eriin Gurvan Naadam", neste feriado acontecem eventos de luta-livre mongol'],
    ['NOVA ZELÂNDIA','Rugby: A seleção neozelandesa de Rugby Union é uma das melhores equipes do mundo'],
]

let arrayContagem = []


// querySelector

const btnSortear = document.querySelector('#btnMensagem')
const mensagem = document.querySelector('#boxMensagem')
const paisMensagem = document.querySelector('#paisMensagem')
const esporteMensagem = document.querySelector('#esporteMensagem')
const qtdPaisesSorteado = document.querySelector('#qtdPaisesMensagem')


// Functions

// Function que define todos os elementos do array como '0', conforme quantidade de elementos do array paises
function contagemPaises (array) {
    for (const i in array) {
        arrayContagem[i] = 0
    }
    return arrayContagem
}
contagemPaises(arrayPaises)


// Function anônima de evento 'onclick'

btnSortear.onclick = function () {

    let numSorte = Math.floor(Math.random()*10)
    let paisSorteado = arrayPaises[numSorte][0]
    let esporteSorteado = arrayPaises[numSorte][1]

    arrayContagem[numSorte] += 1

    mensagem.classList.add("block")
    paisMensagem.innerHTML = paisSorteado
    esporteMensagem.innerHTML = esporteSorteado
    qtdPaisesSorteado.innerHTML = `🏆 País foi sorteado ${arrayContagem[numSorte]} vezes`  
    console.log(arrayContagem)
}