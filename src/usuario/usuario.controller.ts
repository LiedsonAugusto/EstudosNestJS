import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { UsuarioDTO } from "./dto/usuario.dto";
import { v4 as uuid} from 'uuid';
import { UsuarioEntity } from "./usuario.entity";

//Indica que a classe é um controller no caminho /usuarios
@Controller('/usuarios')
export class UsuarioController {

    //Construtor para o uso do repository
    constructor(private usuarioRepository: UsuarioRepository){}

    // @Post() -> Método http
    // @Body() -> Permite aceitar corpos em requisições
    @Post()
    async criaUsuario(@Body() usuario:UsuarioDTO){
        const usuarioEntity = new UsuarioEntity()
        usuarioEntity.id = uuid();
        usuarioEntity.nome = usuario.nome;
        usuarioEntity.email = usuario.email;
        usuarioEntity.senha = usuario.senha;
        this.usuarioRepository.salvarUsuario(usuarioEntity);

        return {
            "id": usuarioEntity.id,
            "message": "Usuário registrado com sucesso"
        }
    }

    // @Get() -> Método http
    @Get()
    async listarUsuarios(){
        return this.usuarioRepository.listarUsuarios();
    }

}