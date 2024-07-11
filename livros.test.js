const {adicionarLivro, removerLivro, buscarLivro} = require('./livros')

describe("testes em buscarLivro", () => {
    test("buscar livro existente", () => {
        const entrada = '1984'
        const saida = 0;
        expect(buscarLivro(entrada)).toEqual(saida)
    })
    
    test("buscar livro inexistente", () => {
        const entrada = 'sim'
        expect(() => buscarLivro(entrada)).toThrow(); //O throw precisa de função seta para funcionar
    })
    
    test("buscar sem string um livro com titulo so de numeros", () => {
        const entrada = 1984
        const saida = 0
        expect(buscarLivro(entrada)).toEqual(saida);
    })
    
    test("buscar sem string um livro com titulo so de numeros que não está na base de dados", () => {
        const entrada = 2
        expect(() => buscarLivro(entrada)).toThrow(); //O throw precisa de função seta para funcionar
    })
})

describe("testes em adicionarLivro", () => {
    test('adicionar livro válido', () => {
        const entrada = {titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", anoPublicacao: 1880}
        expect(adicionarLivro(entrada)).toBeGreaterThan(0)
    })
    test('adicionar livro com campos faltando', () => {
        const entrada = {titulo: "Memórias Póstumas de Brás Cubas", autor: 'Machado de Assis'}
        expect(() => adicionarLivro(entrada)).toThrow()
    })
})

describe("testes em removerLivro", () => {
    test('remover livro válido', () => {
        const entrada = "1984"
        const saida = [{titulo : '1984', autor : 'George Orwell', anoPublicacao : 1949}]
        expect(removerLivro(entrada)).toEqual(saida)
    })
    test('remover livro inexistente', () => {
        const entrada = "198"
        expect(() => removerLivro(entrada)).toThrow()
    })
})

