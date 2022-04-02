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
    let age, isHuman, number, name

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
