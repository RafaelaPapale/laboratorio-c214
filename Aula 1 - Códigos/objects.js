var Pessoa = { nome : "Maria", idade : 30, sexo: "F" }

console.log("Pessoa: ", Pessoa);

let mapa = {
    cantoSuperiorEsquerdo : { x : 1, y : 1 },
    cantoSuperiorDireito : { x : 10, y : 1 },
    cantoInferiorEsquerdo : { x : 1, y : 10 },
    cantoInferiorDireito : { x : 10, y : 10 }
}

console.log("Canto inferior direito ", mapa.cantoInferiorDireito.x);

mapa.cantoSuperiorDireito = { x: 0, y: 0};
console.log("Canto superior direito ", mapa.cantoSuperiorDireito)

mapa.cantoSuperiorDireito.x = 10;
console.log("Canto superior direito ", mapa.cantoSuperiorDireito)

const car = {
    Marca : "Ford",
    Modelo : "Ka",
    Caracteristicas : ["Preto", "1.0", "2 portas"],
}

console.log("Carro: ", car);