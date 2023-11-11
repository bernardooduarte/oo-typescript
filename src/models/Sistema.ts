import { Banco_de_Dados } from "./Banco_de_Dados";
import { Usuarios } from "./Usuarios";

export interface IUsuarios {
    nome: string;
    senha: string;
}


class Sistema {

    private banco_de_dados: Banco_de_Dados;

    constructor(banco_de_dados: Banco_de_Dados) {
        this.banco_de_dados = banco_de_dados;
    }

    obterUsuarios(): Usuarios[] {
        return this.banco_de_dados.obterUsuarios();
    }

    salvarUsuarios(usuarios: Usuarios): void {
        this.banco_de_dados.salvarUsuarios(usuarios);
    }

    editarUsuarios(nome: string, senha: string, novoNome: string, novaSenha: string): void {
        this.banco_de_dados.editarUsuarios(nome, senha, novoNome, novaSenha);
    }

    deletarUsuarios(nome: string, senha: string): void {
        if (this.banco_de_dados) {
            this.banco_de_dados.deletarUsuarios(nome, senha);
        }
    }

   login(nome: string, senha: string): boolean {
        const usuarios = this.banco_de_dados.obterUsuarios();
        let login = false;
        usuarios.forEach((usuario) => {
            if (usuario.nome === nome && usuario.senha === senha) {
                login = true;
            }
        });
        return login;
    }
}

