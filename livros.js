const livro1 = {
    titulo : '1984',
    autor : 'George Orwell',
    anoPublicacao : 1949
}
const livro2 = {
    titulo : 'Manifesto Comunista',
    autor : 'Karl Marx',
    anoPublicacao : 1848
}
const livro3 = {
    titulo : 'Dom Quixote',
    autor : 'Miguel de Cervantes',
    anoPublicacao : 1605
}
const livro4 = {
    titulo : 'Hamlet',
    autor : 'Shakespeare',
    anoPublicacao : 1600
}
var livros = [livro1, livro2, livro3, livro4]


function buscarLivro(titulo){
    for(let i = 0; i < livros.length; i++){
        if(livros[i].titulo == titulo){
            return i;
        }
    }
    throw new Error("O livro solicitado nao está na base de dados");
}

function removerLivro(livro){
    return livros.splice(buscarLivro(livro), 1)
}


function adicionarLivro(livro){
    if(livro.titulo === undefined || livro.autor === undefined || livro.anoPublicacao === undefined){
        throw new Error("Há campos a serem adicionados ou não foi possível adicionar à base de dados")
    }

    return livros.push(livro)
}

module.exports = {adicionarLivro, buscarLivro, removerLivro}