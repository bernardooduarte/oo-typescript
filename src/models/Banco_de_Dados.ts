import { Usuarios } from "./Usuarios";

export class Banco_de_Dados {

    private usuarios: Usuarios[] = [];
    iniciarBancoDeDados: any;

    constructor() {
        this.usuarios = [];
    }

    obterUsuarios(): Usuarios[] {
        return this.usuarios;
    }

    salvarUsuarios(usuarios: Usuarios): void {
        this.usuarios.push(usuarios);
    }

    editarUsuarios(nome: string, senha: string, novoNome: string, novaSenha: string): void {
        this.usuarios.forEach((usuarios) => {
            if (usuarios.nome === nome && usuarios.senha === senha) {
                usuarios.editarUsuario(novoNome, novaSenha);
            }
        });
    }

    deletarUsuarios(nome: string, senha: string): void {
        this.usuarios.forEach((usuarios, index) => {
            if (usuarios.nome === nome && usuarios.senha === senha) {
                this.usuarios.splice(index, 1);
            }
        });
    }
}
