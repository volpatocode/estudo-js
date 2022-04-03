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

-Array / vetores = agrupamento de dados     permite quebra de linha
```js  

    ["João", 36, "Pedro"]
```
-Function

-Symbol
-BigInt


//             Variáveis              //
```js

    var clima = "Quente"
    let clima = "Frio"          variáveis declaradas e atribuídas com valores
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
```
// // // // // // // // // 
```js

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

















