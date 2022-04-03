//          Tipos de dados          //

-String = cadeia de caracteres/texto '' ""      `` > pode quebrar linha, interpolação
                                                            console.log( `João ${1 + 1} pão.`)
                                                         
-Number = números: inteiros, reais(float), NaN ou infinity

-Boolean = true/false

-Undefined = não é nada
-Null = algo sem nada dentro

-Object = propriedades/atributos        
            funcionalidades/metodos 
```js  

    { propriedade: "valor",}
```

//  Array = agrupamento de dados/permite quebra de linha//
```js  

    ["João", 36, "Pedro"]
```
-Function
-Symbol
-BigInt


//             Variáveis              //
```js

    var clima = "Quente"
    let clima = "Frio"          // variáveis declaradas e atribuídas com valores
    const name = "João"

```
var -- global  
let -- local
const -- local -- não muda o valor

-Declaração de variáveis conjuntas:
```js  

    let age, isHuman, number, name     // declaração de variáveis conjuntas
    age = 18
    isHuman = true
    number = 23
    name = "João"

    console.log(name, age, isHuman, number)
```

//             Scope               //

- Determina a visibilidade de uma variável
- var = global; funciona fora do escopo
- let & const = local; só funcionam no escopo atual
- var sofre hoisting
- let e const não sofrem hoisting
- let pode ser alterado o valor puxando de um escopo de fora

//          Concatenação e Interpolação          //
```js

    let paes = 22
    let name = "João"
//concatenação
    console.log(`o ` + name `comprou ` + paes `.`)
//interpolação - templetate literals/strings
    console.log(`o ${name} comprou ${paes} .`)

```

//          Object          //
```js

const person = {    //estrutura para determinar um objeto com propriedades
    name: "João",
    age: 18,
    isAdmin:true
}

console.log(`${person.name} tem ${person.age} anos.`) // serve para determinar o que aparecer
```

//          Array           //  
```js

const animals = [ 
    'Lion',  //posição 0
    'Monkey', //posição 1              // encaixa qualquer tipo de dado
    "Cat" //posição 2
]

console.log(animals[0])   // determina o que aparece pela posição
console.log(animals.length)  // demonstra o total de itens no array
```
//              Funções             // //
```js
function nameFunction() {         //estrutura de função
    
}

nameFunction()  // chama a função

// // // // // // // // // 

const sum = function(number1, number2) {          // função anonima / expression
    let total = number1 + number2 
    return total       // soma os dois numeros recebidos/ so funciona dentro do escopo

}

// os "()" representam parametros que estão sendo recebidos

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}.`)
console.log(`o número 2 é ${number2}.`)
console.log(`a soma é ${sum(number1, number2)}.`)

// comparando com um liquidificador

function fazerSuco(fruta1, fruta2) {
        return fruta1 + fruta2
}

const copo = fazerSuco ('banana', 'maça')

console.log(`Você fez um suco de ${copo}.`)

//Função denominadas function sofrem hoisting

    sayMyName('Mayk')

    function sayMyName(name) {
        console.log(name)
    }


///Função denominadas com let, const e var não sofrem hoisting

    const sayMyName = function(name) {
        console.log(name)
    }


    sayMyName('Mayk')
```

// Arrow Function //
```js

const dontSayMyName = () => {          // normalmente atribuida a const
    console.log('Nothing')
}

dontSayMyName()
```
// Callback Function //
```js

function sayMyName (name) {
    console.log("antes de executar o callback")
    name()

    console.log("depois de executar o callback")
}

sayMyName(
    () => {
        console.log("estou em um callback")
    }
)
```

// Constructor Function //
```js

// expressão new
// cria um objeto
// this dentro da função se refere a variavel

function Person(name, age) {
    this.name = name
    this.age = age
} 

const joao = new Person("João", 18)
const ehryck = new Person("Ehryck", 16)
console.log(joao, ehryck)
```
//          Type conversion/coersion         //
```js

//coersion = automatico
console.log("9" + 5)  // resulta em 95 devido aos tipos de dados diferentes

//conversion = feita pelo usuario
console.log(Number("9") + 5)  // resulta em 14m pois o Number troca o tipo de dado
```

//          Manipulação de Strings e Numbers            //
```js


// Contando os caracteres //
let word = "Liquidificador"
console.log(word.length)  // length conta os caracteres

console.log(Number(word).length)

// // // // // // // // // 

let number = 1234
console.log(String(number).length) // necessita transformar numeros em strings p/ contar

// Transformar numero quebrado com 2 casas decimais //

let number = 125.55456111
console.log(number.toFixed(2)) // toFixed determina quantas casas irão aparecer

// Trocar caracteres por outros // - podem ser atribuidos mais de uma função

let number = 125.55456111
console.log(number.toFixed(2).replace(".", ","))   // replace troca o caracter por outro

// Transformar letras minúsculas em maiusculas - viceversa

let word = "Programar é muito bacana!"
console.log(word.toUpperCase())     // maiuscula
console.log(word.toLowerCase())     // minuscula

// Manipulando caracter // // split e join

let phrase = "I wanna be free!"
let myArray = phrase.split(" ") // retira o caracter e separa em array
let phraseWithUnderscore = myArray.join("_") // junta/separa pelo caracter
console.log(phraseWithUnderscore) //exibindo "I_wanna_be_free!"

// Verificando caracteres // // includes

let phrase = "Eu quero viver o Amor!"   
console.log(phrase.includes("Amor")) //maiusculas e minusculas importam

// Criar array com construtor // new

let myArray = new Array('a', 'b', 'c')
console.log(myArray)

// Contar elementos de um array //new e length

let myArray = new Array('aranha', 'boa', 'cavalo')
console.log(myArray.length)

// Transformar string em elementos de array //from

let word = "manipulação"
console.log(Array.from(word))

// push, unshift, pop, shift, slice, splice, indexOf

let techs = ["html", "css", "js"]

techs.push("nodejs") // adiciona como ultimo do array

techs.unshift("sql") // adiciona como primeiro

techs.pop() // remove o ultimo item do array

techs.shift() // remove o primeiro item do array

console.log(techs.slice(1, 3)) // retorna os elementos com base na posição

techs.splice(1,1) // retira um elemento do array, com base na posição e quantidade a partir desejada //posição começa do 0

let index = techs.indexOf('css') //faz uma busca pelo elemento no array
console.log(index)
```

//          Expressões e Operadores         //
```js

// new -  cria um novo objeto

let name = new String("João")
name.surName = "Volpato"
let age = new Number(18)
console.log(name, age)

// typeof - diz o tipo de dado

let age = 18
console.log(typeof age)

// delete - deleta uma propriedade do objeto

const person = {
    name:"João",
    age: 18
}
delete person.age
console.log(person)
```

// Operadores Aritiméticos //
```js

//multiplicação

console.log(3.2 * 5.2) // exibe 16.64

//divisão

console.log(10 / 2) // exibe 5

//soma

console.log(10 + 4) // exibe 14

//subtração

console.log(10 - 2) // exibe 8

//resto da divisão

let remainder

remainder = 11 % 10

console.log(remainder) // exibe 1

//incremento - incrementa um valor

let increment = 0
increment++         
console.log(increment) // exibe 1

//decremento - diminui um valor

let decrement = 2
decrement--    
console.log(decrement) // exibe 1

//exponencial - elevação

console.log(3 ** 3) // exibe 27

//grouping operator - matemática

let total = 2 + 3 * 5
console.log(total) // exibe 17

let total = (2 + 3)*5
console.log(total) // exibe 25

//operadores de comparação

let one = 1
let two = 2

// == significa igual a

console.log(two == 1) // exibe false
console.log(one == "1") // exibe true

// != significa diferente de

console.log(one != two) // exibe true
console.log(one != 1) // exibe false
console.log(one != "1") // exibe false

// === significa estritamente igual a

console.log(one === "1") // exibe false
console.log(one === 1) // exibe true

// !== significa estritamente diferente de

console.log(two !== "2") // exibe true
console.log(two !== 2) // exibe false

// > maior que

let one = 1
let two = 2

console.log(one > two) // exibe false

// >= maior ou igual a

console.log(one >= 1) // exibe true
console.log(two >= 1) // exibe true

// < menor que

console.log(one < two) // exibe true

// <= menor ou igual a

console.log(one <= two) // exibe true
console.log(one <= 1) // exibe true
console.log(one <= 0) // exibe false

// Operadores de atribuição //

// assignment

x = 1
console.log(x) // exibe 1

// addition assignment

x = 1
x += 2 // x = x + 2
console.log(x) // exibe 3

// subtraction assignment

x = 1
x -= 1 // x = x - 1
console.log(x) // exibe 0

// multiplication assignment

x = 1
x *= 2 // x = x * 2
console.log(x) // exibe 2

// division assignment

x = 10
x /= 2 // x = x / 2
console.log(x) // exibe 5

// remainder assignment

x = 4
x %= 2 // x = x % 2
console.log(x) // exibe 0

// exponietation assignment

x = 4
x **= 2 // x = x ** 2
console.log(x) // exibe 16
```

//          Operadores lógicos          //
```js

// and &&

let pao = true
let queijo = true
console.log(pao && queijo) // exibe true

let pao = true
let queijo = false
console.log(pao && queijo) // exibe false

// or ||

let pao = true
let queijo = false
console.log(pao || queijo) // exibe true - basta um dos elementos

// not !


















