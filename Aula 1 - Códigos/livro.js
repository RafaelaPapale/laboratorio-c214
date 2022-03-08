function Livro() {
    var nome = "Sem nome";
    var autor = "Sem autor";
    var temas = [];

    this.SetNome = SetNome;
    this.SetAutor = SetAutor;
    this.SetTemas = SetTemas;
    this.ShowNome = DisplayNome;
    this.ShowAutor = DisplayAutor;
    this.ShowTemas = DisplayTemas;

    function DisplayNome() {
        console.log("Nome do livro:", nome);
    }

    function DisplayAutor() {
        console.log("Autor do livro:", autor);
    }

    function DisplayTemas() {
        console.log("Temas:", temas);
    }

    function SetNome(novoNome) {
        nome = novoNome;
    }

    function SetAutor(novoAutor) {
        autor = novoAutor;
    }

    function SetTemas(tema){
        temas.push(tema);
    }

}
var livro = new Livro();

livro.SetNome("Harry Potter");
livro.SetAutor("J. K. Rowling");
livro.ShowNome();
livro.ShowAutor();

livro.SetTemas('Fantasia');
livro.SetTemas('Ficção');
livro.ShowTemas();