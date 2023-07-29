import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { UsuarioDTO } from "./dto/usuario.dto";

//Indica que a classe é um controller no caminho /usuarios
@Controller('/usuarios')
export class UsuarioController {

    //Construtor para o uso do repository
    constructor(private usuarioRepository: UsuarioRepository){}

    // @Post() -> Método http
    // @Body() -> Permite aceitar corpos em requisições
    @Post()
    async criaUsuario(@Body() usuario:UsuarioDTO){
        this.usuarioRepository.salvarUsuario(usuario);
    }

    // @Get() -> Método http
    @Get()
    async listarUsuarios(){
        return this.usuarioRepository.listarUsuarios();
    }

}