import { Injectable } from "@nestjs/common";
import { UsuarioDTO } from "./dto/usuario.dto";

//Tornar a classe pronta para injeção de dependências
@Injectable()
export class UsuarioRepository {

    private usuarios = []

    async salvarUsuario(usuario: UsuarioDTO) {
        this.usuarios.push(usuario);
    }

    async listarUsuarios(){
        return this.usuarios;
    }

}