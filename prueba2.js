//Teniendo en cuenta el sgte arreglo:

const precios = [1045.0, 234, 456.98, 238.98, 3455, 234, 1045.0, 234];

//Deberá realizar el cálculo de : promedio, valor máximo, moda, suma total de los precios, suma de los precios que son menores a 1500 dólares.

//EJEMPLO DE REDUCE
/* const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

countOccurrences([2, 1, 3, 3, 2, 3]); // { '1': 1, '2': 2, '3': 3 }
countOccurrences(['a', 'b', 'a', 'c', 'a', 'b']); // { 'a': 3, 'b': 2, 'c': 1 } */


let calculoArray = (precios) => {

    //CÁLCULO SUMA TOTAL
    let sumaTotal = precios.reduce((a, b) => a + b, 0);
    console.log(`La suma total de los elementos del array es ${sumaTotal}`);

    //CÁLCULO PROMEDIO
    let promedio = sumaTotal / precios.length;
    console.log(`El promedio de los elementos del array es: ${promedio}`);

    //CÁLCULO DEL VALOR MÁXIMO: se utiliza el spread operator
    let max = Math.max(...precios);
    console.log(`Valor maximo: ${max}`);

    //CÁLCULO DE LA MODA
    let moda = precios.reduce((a, b) => ((a[b] = ++a[b] || 1), a), {});

    moda = Object.entries(moda).sort((a, b) => {
        return a[1] - b[1];
    });

    console.log(`la moda: ${JSON.stringify(moda[moda.length - 1])}`);

    //SUMA DE VALORES MENORES A 1500

    let nuevaSuma = precios.reduce((a, b) => (b < 1500 ? a + b : a + 0), 0)

    console.log(nuevaSuma);
}

calculoArray(precios);