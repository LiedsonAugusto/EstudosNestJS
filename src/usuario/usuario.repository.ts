import { Injectable } from "@nestjs/common";
import { UsuarioDTO } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";

//Tornar a classe pronta para injeção de dependências
@Injectable()
export class UsuarioRepository {

    private usuarios: UsuarioEntity[] = [];

    async salvarUsuario(usuario: UsuarioEntity) {
        this.usuarios.push(usuario);
    }

    async listarUsuarios(){
        return this.usuarios;
    }

    async listaUsuarioPorEmail(email: string){
        const usuario = this.usuarios.find((usuario)=> usuario.email === email);
        return usuario !== undefined;
    }
}