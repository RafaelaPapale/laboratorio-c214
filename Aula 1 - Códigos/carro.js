class Carro {
    Marca = "Sem marca";
    Modelo = "Sem modelo";

    ShowMarca() {
        console.log("Marca:", this.Marca);
    }

    ShowModelo() {
        console.log("Modelo:",this.Modelo);
    }

    SetMarca(_marca) {
        this.Marca = _marca;
    }

    SetModelo(_modelo) {
        this.Modelo = _modelo;
    }
}

var carro = new Carro();

carro.SetMarca("Ford");
carro.SetModelo("Ka");
carro.ShowMarca();
carro.ShowModelo();