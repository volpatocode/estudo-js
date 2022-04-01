/*
strings = cadeia de caracteres, se usa "" ou '' ou `` (as crases permite interpolação
ex: console.log(`Mayk e João são ${1 + 1} alunos.`)
-

number
inteiros
reais = quebrados
nan // not a number
Infinity
-
    
boolean
    
true
false   
-
    
undefined = nada definido é diferente de null = nada dentro
-

object
    propriedade = atributo
    funcionalidade = metodo
*/
    {proprieade: "valor"}

    console.log({
        name:"João",
        idade:18,
        andar: function() {
            console.log('andar')
        }
    })
/*

array = vetores = agrupamento de dados []
*/

    console.log({
        "Leite",
        "Ovos",
        "Fermento"
    })

/* 
9 tipos de dados

/ data types /
    primitive / primitive value
    structural
    structural primitive

/ primitivos = são imutáveis/
-string
-nunber
-bBoolean
-undefined
-Symbol
-BigInt

/ estruturai = recebe atributos e/ou funcionalidades /
-object
    array
    map
    set
    date
    ...
-function

/ primitivo estrutural /

-null
-



/ variáveis /

- são nomes simbólicos que recebem algum valor
- atalhos de código
- identifiers

    var
    let
    const = não muda

    let e const são mais utilizados
*/
    //no html//
    var clima = ("quente")

    console.log("clima")

/* concatenando e interpolando valores*/

    let name, age, isHuman

    name = João
    age = 15
    isHuman = true
    

    console.log ('o' + name + ' tem ' + age ' anos.')

    -

    console.log(`o ${name} tem ${age} anos.`)

// Object

    const person = {
        name: João,
        age: 18,
        weight: 78.5,
        isAdmin: true
    }

    console.log(person.age) // mostra somente a idade
    console.log(`${name.person} tem ${person.age} anos.`)


// Arrays

    const animals = {
        'Lion',
        'Monkey',
        {
            name:'Cat',
            age:3
        }
    }

    console.log(animals[0]) //escolhe um atributo
    console.log(animals[2].name) //escolhe um atributo e seleciona o valor

    console.log(animals.lenght) // demonstra o total


    
function createPhrases() {
    console.log('Estudar é muito ruim')
}

createPhrases()


// function expression
// function anonymous


//                      parameters

const sum = function(number1, number2) {
    console.log(number1+number2)
}


sum(2, 3) // arguments

let number1 = 34
let number2 = 25
//sum (number1, number2)


console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)

