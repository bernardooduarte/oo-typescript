export class Usuarios {

    nome: string;
    senha: string;

    constructor(nome: string, senha: string) {
        this.nome = nome;
        this.senha = senha;
    }

    editarUsuario(novoNome: string, novaSenha: string): void {
        this.nome = novoNome;
        this.senha = novaSenha;
    }
}