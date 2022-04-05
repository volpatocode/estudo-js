function transformDegree(degree) {
    const celsiusExists = degree.toUppercase().includes("C")
    const fahrenheitsExists = degree.toUppercase().includes("F")


    if(!celsiusExists && !fahrenheitsExists) {
        throw new Error('Grau não identificado')
    }

    let updatedDegree = Number(degree.toUppercase().replace("F", ""))
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = "C"

    if(celsiusExists) {
        updatedDegree = Number(degree.toUppercase().replace("C", ""))
        formula = celsius => celsius * 9/5 + 32
        degreeSign = "F"
    }
    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree("25C"))
} catch(Error) {
    console.log(Error.message)
}